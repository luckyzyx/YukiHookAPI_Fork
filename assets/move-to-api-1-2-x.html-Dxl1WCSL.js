import{_ as l,r as o,o as p,c,b as n,d as s,e as i,a}from"./app-IYThtCMd.js";const r={},t=a('<h1 id="迁移到-yukihookapi-1-2-x" tabindex="-1"><a class="header-anchor" href="#迁移到-yukihookapi-1-2-x" aria-hidden="true">#</a> 迁移到 YukiHookAPI 1.2.x</h1><p><code>YukiHookAPI</code> 从 <code>1.2.0</code> 版本开始进行了大量调整，你可以继续向下阅读以查看有哪些注意事项和新功能。</p><h2 id="默认行为变更" tabindex="-1"><a class="header-anchor" href="#默认行为变更" aria-hidden="true">#</a> 默认行为变更</h2><p>从 <code>1.2.0</code> 版本开始，<code>@InjectYukiHookWithXposed</code> 中 <code>isUsingResourcesHook</code> 功能默认不再启用，如有需要请手动启用。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Resources Hook (资源钩子) 将在 <strong>2.0.0</strong> 版本被移除，现已被标记 <strong>LegacyResourcesHook</strong>，你可以使用 <strong>@OptIn(LegacyResourcesHook::class)</strong> 的方式消除警告以继续在 <strong>1.x.x</strong> 版本使用。</p></div><h2 id="新版-api" tabindex="-1"><a class="header-anchor" href="#新版-api" aria-hidden="true">#</a> 新版 API</h2>',6),d=n("code",null,"YukiHookAPI",-1),A=n("code",null,"1.2.0",-1),u=n("code",null,"2.0.0",-1),D={href:"https://github.com/HighCapable/YukiHookAPI/issues/33",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"2.0.0",-1),y=a(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>所有旧版 API 已被标记 <strong>LegacyHookApi</strong>，你可以使用 <strong>@OptIn(LegacyHookApi::class)</strong> 的方式消除警告以继续使用旧版 API。</p></div><p>例如，我们要 Hook <code>com.example.Test</code> 类中的 <code>test</code> 方法。</p><blockquote><p>旧版 API</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">findClass</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.example.Test&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">hook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">injectMember</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">beforeHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>新版 API</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#96D0FF;">&quot;com.example.Test&quot;</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">toClass</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    .</span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }.</span><span style="color:#DCBDFB;">hook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">before</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新版 API 的 Hook 对象从 <code>Class</code> 迁移到了 <code>Member</code>，这种方式将更加直观。</p><h2 id="差异性功能" tabindex="-1"><a class="header-anchor" href="#差异性功能" aria-hidden="true">#</a> 差异性功能</h2><p>下面是对接新版 API 的部分差异性功能。</p><h3 id="新的多重-hook-用法" tabindex="-1"><a class="header-anchor" href="#新的多重-hook-用法" aria-hidden="true">#</a> 新的多重 Hook 用法</h3><p>之前我们需要这样去 Hook 所有匹配条件的方法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">injectMembers</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;"> { it.</span><span style="color:#DCBDFB;">contains</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;some&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }.</span><span style="color:#DCBDFB;">all</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，你可以改用下面这种方式。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;"> { it.</span><span style="color:#DCBDFB;">contains</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;some&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">}.</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新的-allmembers-用法" tabindex="-1"><a class="header-anchor" href="#新的-allmembers-用法" aria-hidden="true">#</a> 新的 <code>allMembers(...)</code> 用法</h3><p>之前我们需要这样去 Hook 所有方法、构造方法。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">injectMembers</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">allMembers</span><span style="color:#ADBAC7;">(MembersType.METHOD)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">injectMembers</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">allMembers</span><span style="color:#ADBAC7;">(MembersType.CONSTRUCTOR)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">afterHook</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，你可以改用下面这种方式。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当不填写查找条件时，默认获取当前 <code>Class</code> 中的所有成员对象。</p><p>如果你想 Hook <code>MembersType.ALL</code>，目前暂时没有可以直接对接的方法，但是你可以将所有成员对象拼接后进行 Hook。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">(</span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">giveAll</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">+</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">giveAll</span><span style="color:#ADBAC7;">()).</span><span style="color:#DCBDFB;">hookAll</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">after</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但我们并不推荐这种做法，一次性 Hook 过多的成员是不可控的，还会发生问题。</p>`,30);function v(m,C){const e=o("ExternalLinkIcon");return p(),c("div",null,[t,n("p",null,[d,s(" 在 "),A,s(" 版本引入了 "),u,s(" 准备实现的 "),n("a",D,[s("New Hook Code Style"),i(e)]),s(" (新版 API)，现处于实验性阶段，你可以在 "),B,s(" 版本正式发布前，开始迁移并体验新版 API。")]),y])}const k=l(r,[["render",v],["__file","move-to-api-1-2-x.html.vue"]]);export{k as default};