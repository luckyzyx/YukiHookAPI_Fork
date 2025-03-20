import{_ as s,o as a,c as n,a as l}from"./app-IYThtCMd.js";const e={},o=l(`<h1 id="prefsdata-class" tabindex="-1"><a class="header-anchor" href="#prefsdata-class" aria-hidden="true">#</a> PrefsData <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">data</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">PrefsData</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;(</span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">) : </span><span style="color:#F69D50;">Serializable</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.67</code> <code>新增</code></p><p><code>v1.1.5</code> <code>修改</code></p><p>实现了 <code>Serializable</code> 接口</p><p><strong>功能描述</strong></p><blockquote><p>键值对存储构造类。</p></blockquote><p>这个类是对 <code>YukiHookPrefsBridge</code> 的一个扩展用法。</p><p><strong>功能示例</strong></p><p>建立一个模板类定义模块与宿主需要使用的键值数据。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">DataConst</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> TEST_KV_DATA_1 </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">PrefsData</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_data_1&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;defalut value&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> TEST_KV_DATA_2 </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">PrefsData</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_data_2&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">false</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> TEST_KV_DATA_3 </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">PrefsData</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test_data_3&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>键值数据定义后，你就可以方便地在模块和宿主中调用所需要的数据。</p><blockquote><p>模块示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// 读取</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">data</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(DataConst.TEST_KV_DATA_1)</span></span>
<span class="line"><span style="color:#768390;">// 写入</span></span>
<span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(DataConst.TEST_KV_DATA_1, </span><span style="color:#96D0FF;">&quot;written value&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>宿主示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// 读取 String</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> dataString </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> prefs.</span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(DataConst.TEST_KV_DATA_1)</span></span>
<span class="line"><span style="color:#768390;">// 读取 Boolean</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> dataBoolean </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> prefs.</span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(DataConst.TEST_KV_DATA_2)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你依然可以不使用模板定义的默认值，随时修改你的默认值。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;">// 读取 - 此时 data 取到的默认值将会是 2 - 并不是模板提供的 0</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">data</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> prefs.</span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(DataConst.TEST_KV_DATA_3, </span><span style="color:#6CB6FF;">2</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),p=[o];function t(c,r){return a(),n("div",null,p)}const d=s(e,[["render",t],["__file","PrefsData.html.vue"]]);export{d as default};
