/*
 * YukiHookAPI - An efficient Kotlin version of the Xposed Hook API.
 * Copyright (C) 2019-2022 HighCapable
 * https://github.com/fankes/YukiHookAPI
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This file is Created by fankes on 2022/8/15.
 * Thanks for providing https://github.com/cinit/QAuxiliary/blob/main/app/src/main/java/io/github/qauxv/ui/CommonContextWrapper.java
 */
package com.highcapable.yukihookapi.hook.xposed.parasitic.context.wrapper

import android.content.Context
import android.content.res.Resources
import android.view.ContextThemeWrapper
import com.highcapable.yukihookapi.hook.factory.injectModuleAppResources
import com.highcapable.yukihookapi.hook.xposed.bridge.YukiHookBridge
import com.highcapable.yukihookapi.hook.xposed.parasitic.reference.ModuleClassLoader

/**
 * 代理 [ContextThemeWrapper]
 *
 * 通过包装 - 你可以轻松在 (Xposed) 宿主环境使用来自模块的主题资源
 * @param baseContext 原始 [Context]
 * @param theme 使用的主题
 */
class ModuleContextThemeWrapper private constructor(baseContext: Context, theme: Int) : ContextThemeWrapper(baseContext, theme) {

    internal companion object {

        /**
         * 从 [Context] 创建 [ModuleContextThemeWrapper]
         * @param baseContext 对接的 [Context]
         * @param theme 需要使用的主题
         * @return [ModuleContextThemeWrapper]
         * @throws IllegalStateException 如果重复装载
         */
        internal fun wrapper(baseContext: Context, theme: Int) =
            if (baseContext !is ModuleContextThemeWrapper)
                ModuleContextThemeWrapper(baseContext, theme)
            else error("ModuleContextThemeWrapper already loaded")
    }

    /** 创建用于替换的 [Resources] */
    private var baseResources: Resources? = null

    init {
        if (baseContext.resources?.configuration != null)
            baseResources = baseContext.createConfigurationContext(baseContext.resources.configuration).resources
        if (YukiHookBridge.hasXposedBridge) resources?.injectModuleAppResources()
    }

    override fun getClassLoader(): ClassLoader = ModuleClassLoader.instance()

    override fun getResources(): Resources? = baseResources ?: super.getResources()
}