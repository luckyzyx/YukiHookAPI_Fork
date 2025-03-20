import{_ as l,r as p,o as c,c as i,b as s,d as n,e,a as o}from"./app-IYThtCMd.js";const r={},t=o(`<h1 id="作为-hook-api-使用的相关配置" tabindex="-1"><a class="header-anchor" href="#作为-hook-api-使用的相关配置" aria-hidden="true">#</a> 作为 Hook API 使用的相关配置</h1><blockquote><p>作为 Hook API 通常为做自身 APP 热更新或功能需要以及产品测试的 Hook 操作。</p></blockquote><h2 id="依赖配置" tabindex="-1"><a class="header-anchor" href="#依赖配置" aria-hidden="true">#</a> 依赖配置</h2><p>你只需要集成 <code>com.highcapable.yukihookapi:api</code> 依赖即可。</p><p>然后请集成你目标使用的 <code>Hook Framework</code> 依赖。</p><h2 id="入口配置" tabindex="-1"><a class="header-anchor" href="#入口配置" aria-hidden="true">#</a> 入口配置</h2><p>创建你的自定义 <code>Application</code>。</p><p>在 <code>attachBaseContext</code> 中添加 <code>YukiHookAPI.encase</code> 方法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MyApplication</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">Application</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// 装载 Hook Framework</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">//</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">//</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// 配置 YukiHookAPI</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookApi.</span><span style="color:#DCBDFB;">configs</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// 装载 YukiHookAPI</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(base) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base)</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，你就完成了 API 的相关配置。</p><p>你可以 <a href="../config/api-example#%E4%BD%9C%E4%B8%BA-hook-api-%E4%BD%BF%E7%94%A8%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E5%9C%B0%E6%96%B9">点击这里</a> 查看异同点和注意事项。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>你不能再使用 <strong>loadApp</strong> 进行包装，可直接开始编写你的 Hook 代码。</p></div><h2 id="hook-framework" tabindex="-1"><a class="header-anchor" href="#hook-framework" aria-hidden="true">#</a> Hook Framework</h2><blockquote><p>这里给出了一些较高使用率的 <code>Hook Framework</code> 如何对接 <code>YukiHookAPI</code> 的相关方式。</p></blockquote>`,15),d={id:"pine",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#pine","aria-hidden":"true"},"#",-1),y={href:"https://github.com/canyie/pine",target:"_blank",rel:"noopener noreferrer"},u=o(`<blockquote><p><strong>所需 Xposed API 依赖</strong> <code>top.canyie.pine:xposed</code></p></blockquote><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 Pine</span></span>
<span class="line"><span style="color:#ADBAC7;">    PineConfig.debug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    PineConfig.debuggable </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> BuildConfig.DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 YukiHookAPI</span></span>
<span class="line"><span style="color:#ADBAC7;">    YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(base) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),B={id:"sandhook",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#sandhook","aria-hidden":"true"},"#",-1),b={href:"https://github.com/asLody/SandHook",target:"_blank",rel:"noopener noreferrer"},v=o(`<blockquote><p><strong>所需 Xposed API 依赖</strong> <code>com.swift.sandhook:xposedcompat</code> 或 <code>com.swift.sandhook:xposedcompat_new</code></p></blockquote><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 SandHook</span></span>
<span class="line"><span style="color:#ADBAC7;">    SandHookConfig.DEBUG </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> BuildConfig.DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">    XposedCompat.cacheDir </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> base?.cacheDir</span></span>
<span class="line"><span style="color:#ADBAC7;">    XposedCompat.context </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> base</span></span>
<span class="line"><span style="color:#ADBAC7;">    XposedCompat.classLoader </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> javaClass.classLoader</span></span>
<span class="line"><span style="color:#ADBAC7;">    XposedCompat.isFirstApplication </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> base?.processName </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> base?.packageName</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 YukiHookAPI</span></span>
<span class="line"><span style="color:#ADBAC7;">    YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(base) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),D={id:"whale",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#whale","aria-hidden":"true"},"#",-1),m={href:"https://github.com/asLody/whale",target:"_blank",rel:"noopener noreferrer"},k=s("blockquote",null,[s("p",null,[s("strong",null,"所需 Xposed API 依赖"),n(),s("code",null,"com.wind.xposed:xposed-on-whale")])],-1),F={href:"https://github.com/WindySha/xposed-hook-based-on-whale",target:"_blank",rel:"noopener noreferrer"},_=o(`<blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 Whale 不需要任何配置</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// 装载 YukiHookAPI</span></span>
<span class="line"><span style="color:#ADBAC7;">    YukiHookAPI.</span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(base) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;">(base)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(x,f){const a=p("ExternalLinkIcon");return c(),i("div",null,[t,s("h3",d,[A,n(),s("a",y,[n("Pine"),e(a)])]),u,s("h3",B,[C,n(),s("a",b,[n("SandHook"),e(a)])]),v,s("h3",D,[h,n(),s("a",m,[n("Whale"),e(a)])]),k,s("p",null,[n("请参考 "),s("a",F,[n("xposed-hook-based-on-whale"),e(a)]),n("。")]),_])}const P=l(r,[["render",g],["__file","api-using.html.vue"]]);export{P as default};
