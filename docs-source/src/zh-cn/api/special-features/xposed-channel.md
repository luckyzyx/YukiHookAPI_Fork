# Xposed 模块与宿主通讯桥

> 这是一个使用系统无序广播在模块与宿主之间发送和接收数据的解决方案。

::: danger 需要满足的条件

模块与宿主需要保持存活状态，否则无法建立通讯。

:::

## 基本用法

> 这里描述了 `wait` 与 `put` 方法的基本使用方法。

通过使用 `dataChannel` 来实现模块与宿主之间的通讯桥，原理为发送接收系统无序广播。

> 模块示例如下

```kotlin
// 从指定包名的宿主获取
dataChannel(packageName = "com.example.demo").wait<String>(key = "key_from_host") { value ->
    // Your code here.
}
// 发送给指定包名的宿主
dataChannel(packageName = "com.example.demo").put(key = "key_from_module", value = "I am module")
```

> 宿主示例如下

```kotlin
// 从模块获取
dataChannel.wait<String>(key = "key_from_module") { value ->
    // Your code here.
}
// 发送给模块
dataChannel.put(key = "key_from_host", value = "I am host")
```

你可以不设置 `dataChannel` 的 `value` 来达到仅通知模块或宿主回调 `wait` 方法。

> 模块示例如下

```kotlin
// 从指定包名的宿主获取
dataChannel(packageName = "com.example.demo").wait(key = "listener_from_host") {
    // Your code here.
}
// 发送给指定包名的宿主
dataChannel(packageName = "com.example.demo").put(key = "listener_from_module")
```

> 宿主示例如下

```kotlin
// 从模块获取
dataChannel.wait(key = "listener_from_module") {
    // Your code here.
}
// 发送给模块
dataChannel.put(key = "listener_from_host")
```

::: danger

接收方需要保持存活状态才能收到通讯数据。

:::

::: tip

更多功能请参考 [YukiHookDataChannel](../public/com/highcapable/yukihookapi/hook/xposed/channel/YukiHookDataChannel)。

:::

## 判断模块与宿主版本是否匹配

> 通过通讯桥功能，`YukiHookAPI` 还为你提供了在用户更新模块后，判断模块是否与宿主版本匹配的解决方案。

我们只需要调用 `checkingVersionEquals` 方法，即可实现这个功能。

在模块与宿主中可进行双向判断。

你可以在模块中判断指定包名的宿主是否与当前模块的版本匹配。

> 示例如下

```kotlin
// 从指定包名的宿主获取
dataChannel(packageName = "com.example.demo").checkingVersionEquals { isEquals ->
    // Your code here.
}
```

你还可以在宿主中判断是否自身与当前模块的版本匹配。

> 示例如下

```kotlin
// 从模块获取
dataChannel.checkingVersionEquals { isEquals ->
    // Your code here.
}
```

::: warning 方法回调的条件

宿主、模块保持存活状态，并在激活模块后重启了作用域中的 Hook 目标宿主对象。

:::

::: tip

更多功能请参考 [YukiHookDataChannel](../public/com/highcapable/yukihookapi/hook/xposed/channel/YukiHookDataChannel)。

:::

## 回调事件响应的规则

这里只列出了在模块中使用的例子，在宿主中相同的 `key` 始终不允许重复创建。

::: danger

在模块和宿主中，每一个 **dataChannel** 对应的 **key** 的回调事件**都不允许重复创建**，若重复，之前的回调事件会被新增加的回调事件替换，若在模块中使用，在同一个 **Activity** 中不可以重复，不同的 **Activity** 中相同的 **key** 允许重复。

:::

> 示例如下

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // 回调事件 A
        dataChannel(packageName = "com.example.demo").wait(key = "test_key") {
            // Your code here.
        }
        // 回调事件 B
        dataChannel(packageName = "com.example.demo").wait(key = "test_key") {
            // Your code here.
        }
        // 回调事件 C
        dataChannel(packageName = "com.example.demo").wait(key = "other_test_key") {
            // Your code here.
        }
    }
}

class OtherActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // 回调事件 D
        dataChannel(packageName = "com.example.demo").wait(key = "test_key") {
            // Your code here.
        }
    }
}
```

在上述示例中，回调事件 A 会被回调事件 B 替换掉，回调事件 C 的 `key` 不与其它重复，回调事件 D 在另一个 Activity 中，所以最终回调事件 B、C、D 都可被创建成功。

::: danger

一个相同 **key** 的回调事件只会回调当前模块正在显示的 **Activity** 中注册的回调事件，例如上述中的 **test_key**，如果 **OtherActivity** 正在显示，那么 **MainActivity** 中的 **test_key** 就不会被回调。

相同的 **key** 在同一个 **Activity** 不同的 **Fragment** 中注册 **dataChannel**，它们依然会在当前 **Activity** 中同时被回调。 

在模块中，你只能使用 **Activity** 的 **Context** 注册 **dataChannel**，你不能在 **Application** 以及 **Service** 等地方使用 **dataChannel**，若要在 **Fragment** 中使用 **dataChannel**，请使用 **activity?.dataChannel(...)**。

:::

## 安全性说明

在模块环境中，你只能接收<u>**指定包名的宿主**</u>发送的通讯数据且只能发送给<u>**指定包名的宿主**</u>。

::: danger

为了进一步防止广播滥用，通讯数据中 API 会自动指定宿主和模块的包名，防止其它 APP 监听并利用广播做出超限行为。

:::