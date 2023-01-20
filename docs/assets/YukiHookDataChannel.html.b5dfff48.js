import{_ as s,o as a,c as o,a as n}from"./app.a3fd8dd4.js";const p={},l=n(`<h1 id="yukihookdatachannel-class" tabindex="-1"><a class="header-anchor" href="#yukihookdatachannel-class" aria-hidden="true">#</a> YukiHookDataChannel <span class="symbol">- class</span></h1><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiHookDataChannel</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u5B9E\u73B0 Xposed \u6A21\u5757\u7684\u6570\u636E\u901A\u8BAF\u6865\u3002</p></blockquote><p>\u901A\u8FC7\u6A21\u5757\u4E0E\u5BBF\u4E3B\u76F8\u4E92\u6CE8\u518C <code>BroadcastReceiver</code> \u6765\u5B9E\u73B0\u6570\u636E\u7684\u4EA4\u4E92\u3002</p><p>\u6A21\u5757\u9700\u8981\u5C06 <code>Application</code> \u7EE7\u627F\u4E8E <code>ModuleApplication</code> \u6765\u5B9E\u73B0\u6B64\u529F\u80FD\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p>\u6A21\u5757\u4E0E\u5BBF\u4E3B\u9700\u8981\u4FDD\u6301\u5B58\u6D3B\u72B6\u6001\uFF0C\u5426\u5219\u65E0\u6CD5\u5EFA\u7ACB\u901A\u8BAF\u3002</p></div><h2 id="namespace-class" tabindex="-1"><a class="header-anchor" href="#namespace-class" aria-hidden="true">#</a> NameSpace <span class="symbol">- class</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">inner </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">NameSpace</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> context</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Context?</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> packageName</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isSecure</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><code>v1.0.90</code> <code>\u4FEE\u6539</code></p><p>\u65B0\u589E <code>isSecure</code> \u53C2\u6570</p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p><code>YukiHookDataChannel</code> \u547D\u540D\u7A7A\u95F4\u3002</p></blockquote><h3 id="with-method" tabindex="-1"><a class="header-anchor" href="#with-method" aria-hidden="true">#</a> with <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">with</span><span style="color:#ADBAC7;">(initiate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">NameSpace</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">NameSpace</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u521B\u5EFA\u4E00\u4E2A\u8C03\u7528\u7A7A\u95F4\u3002</p></blockquote><h3 id="allowsendtoolargedata-method" tabindex="-1"><a class="header-anchor" href="#allowsendtoolargedata-method" aria-hidden="true">#</a> allowSendTooLargeData <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">allowSendTooLargeData</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">NameSpace</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.1.5</code> <code>\u65B0\u589E</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u89E3\u9664\u53D1\u9001\u6570\u636E\u7684\u5927\u5C0F\u9650\u5236\u5E76\u7981\u6B62\u5F00\u542F\u5206\u6BB5\u53D1\u9001\u529F\u80FD\u3002</p></blockquote><p>\u4EC5\u4F1A\u5728\u6BCF\u6B21\u8C03\u7528\u65F6\u751F\u6548\uFF0C\u4E0B\u4E00\u6B21\u6CA1\u6709\u8C03\u7528\u6B64\u65B9\u6CD5\u5219\u6B64\u529F\u80FD\u5C06\u88AB\u81EA\u52A8\u5173\u95ED\u3002</p><p>\u4F60\u8FD8\u9700\u8981\u5728\u6574\u4E2A\u8C03\u7528\u57DF\u4E2D\u58F0\u660E\u6CE8\u89E3 <code>CauseProblemsApi</code> \u4EE5\u6D88\u9664\u8B66\u544A\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p>\u82E5\u4F60\u4E0D\u77E5\u9053\u5141\u8BB8\u6B64\u529F\u80FD\u4F1A\u5E26\u6765\u4F55\u79CD\u540E\u679C\uFF0C\u8BF7\u52FF\u4F7F\u7528\u3002</p></div><h3 id="put-method" tabindex="-1"><a class="header-anchor" href="#put-method" aria-hidden="true">#</a> put <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&lt;</span><span style="color:#DCBDFB;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&lt;</span><span style="color:#DCBDFB;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(data</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelData</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">?)</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> data</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelData</span><span style="color:#F47067;">&lt;*&gt;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u53D1\u9001\u952E\u503C\u6570\u636E\u3002</p></blockquote><h3 id="put-method-1" tabindex="-1"><a class="header-anchor" href="#put-method-1" aria-hidden="true">#</a> put <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u4EC5\u53D1\u9001\u952E\u503C\u76D1\u542C\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C <code>VALUE_WAIT_FOR_LISTENER</code> \u53D1\u9001\u952E\u503C\u6570\u636E\u3002</p></blockquote><h3 id="wait-method" tabindex="-1"><a class="header-anchor" href="#wait-method" aria-hidden="true">#</a> wait <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&lt;</span><span style="color:#DCBDFB;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, priority</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelPriority?</span><span style="color:#ADBAC7;">, result</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> (value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&lt;</span><span style="color:#DCBDFB;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(data</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelData</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">, priority</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelPriority?</span><span style="color:#ADBAC7;">, result</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> (value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><code>v1.0.90</code> <code>\u4FEE\u6539</code></p><p>\u79FB\u9664\u9ED8\u8BA4\u503C <code>value</code></p><p><code>v1.1.5</code> <code>\u4FEE\u6539</code></p><p>\u65B0\u589E <code>priority</code> \u53C2\u6570</p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u53D6\u952E\u503C\u6570\u636E\u3002</p></blockquote><h3 id="wait-method-1" tabindex="-1"><a class="header-anchor" href="#wait-method-1" aria-hidden="true">#</a> wait <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">wait</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, priority</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelPriority?</span><span style="color:#ADBAC7;">, callback</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> () </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><code>v1.1.5</code> <code>\u4FEE\u6539</code></p><p>\u65B0\u589E <code>priority</code> \u53C2\u6570</p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u4EC5\u83B7\u53D6\u76D1\u542C\u7ED3\u679C\uFF0C\u4E0D\u83B7\u53D6\u952E\u503C\u6570\u636E\u3002</p></blockquote><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p>\u4EC5\u9650\u4F7F\u7528 <strong>VALUE_WAIT_FOR_LISTENER</strong> \u53D1\u9001\u7684\u76D1\u542C\u624D\u80FD\u88AB\u63A5\u6536\u3002</p></div><h3 id="checkingversionequals-method" tabindex="-1"><a class="header-anchor" href="#checkingversionequals-method" aria-hidden="true">#</a> checkingVersionEquals <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">checkingVersionEquals</span><span style="color:#ADBAC7;">(priority</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelPriority?</span><span style="color:#ADBAC7;">, result</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> (</span><span style="color:#6CB6FF;">Boolean</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.0.88</code> <code>\u65B0\u589E</code></p><p><code>v1.1.5</code> <code>\u4FEE\u6539</code></p><p>\u65B0\u589E <code>priority</code> \u53C2\u6570</p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u53D6\u6A21\u5757\u4E0E\u5BBF\u4E3B\u7684\u7248\u672C\u662F\u5426\u5339\u914D\u3002</p></blockquote><p>\u901A\u8FC7\u6B64\u65B9\u6CD5\u53EF\u539F\u751F\u5224\u65AD Xposed \u6A21\u5757\u66F4\u65B0\u540E\u5BBF\u4E3B\u5E76\u672A\u91CD\u65B0\u88C5\u8F7D\u9020\u6210\u4E24\u8005\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u3002</p><h3 id="obtainloggerinmemorydata-method" tabindex="-1"><a class="header-anchor" href="#obtainloggerinmemorydata-method" aria-hidden="true">#</a> obtainLoggerInMemoryData <span class="symbol">- method</span></h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">obtainLoggerInMemoryData</span><span style="color:#ADBAC7;">(priority</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ChannelPriority?</span><span style="color:#ADBAC7;">, result</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> (</span><span style="color:#F69D50;">ArrayList</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">YukiLoggerData</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Unit</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>\u53D8\u66F4\u8BB0\u5F55</strong></p><p><code>v1.1.4</code> <code>\u65B0\u589E</code></p><p><code>v1.1.5</code> <code>\u4FEE\u6539</code></p><p>\u65B0\u589E <code>priority</code> \u53C2\u6570</p><p><strong>\u529F\u80FD\u63CF\u8FF0</strong></p><blockquote><p>\u83B7\u53D6\u6A21\u5757\u4E0E\u5BBF\u4E3B\u4E4B\u95F4\u7684 <code>ArrayList&lt;YukiLoggerData&gt;</code> \u6570\u636E\u3002</p></blockquote><p>\u7531\u4E8E\u6A21\u5757\u4E0E\u5BBF\u4E3B\u5904\u4E8E\u4E0D\u540C\u7684\u8FDB\u7A0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6570\u636E\u901A\u8BAF\u6865\u8BBF\u95EE\u5404\u81EA\u7684\u8C03\u8BD5\u65E5\u5FD7\u6570\u636E\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p>\u6A21\u5757\u4E0E\u5BBF\u4E3B\u5FC5\u987B\u542F\u7528 <a href="../../log/LoggerFactory#isrecord-field">YukiHookLogger.Configs.isRecord</a> \u624D\u80FD\u83B7\u53D6\u5230\u8C03\u8BD5\u65E5\u5FD7\u6570\u636E\u3002</p><p>\u7531\u4E8E Android \u9650\u5236\u4E86\u6570\u636E\u4F20\u8F93\u5927\u5C0F\u7684\u6700\u5927\u503C\uFF0C\u5982\u679C\u8C03\u8BD5\u65E5\u5FD7\u8FC7\u591A\u5C06\u4F1A\u81EA\u52A8\u8FDB\u884C\u5206\u6BB5\u53D1\u9001\uFF0C\u6570\u636E\u8D8A\u5927\u901F\u5EA6\u8D8A\u6162\u3002</p></div>`,85),e=[l];function t(c,r){return a(),o("div",null,e)}const d=s(p,[["render",t],["__file","YukiHookDataChannel.html.vue"]]);export{d as default};