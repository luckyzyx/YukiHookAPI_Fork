import{_ as i,r as n,o as p,c as d,b as s,d as e,e as l,w as a,a as c}from"./app-IYThtCMd.js";const A={},y=s("h1",{id:"introduce",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduce","aria-hidden":"true"},"#"),e(" Introduce")],-1),u=s("blockquote",null,[s("p",null,[s("code",null,"YukiHookAPI"),e(" is an integrated Hook API Framework, which does not provide any Hook functions, and needs the support of Xposed related basic APIs.")])],-1),D=s("h2",{id:"background",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),e(" Background")],-1),B=s("p",null,"This is an efficient Hook API rebuilt based on the Xposed API using Kotlin, and creates rich function extensions for the development of Xposed Modules.",-1),m={href:"https://www.bilibili.com/bangumi/play/ss5016",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/fankes/TMore",target:"_blank",rel:"noopener noreferrer"},h=c('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p><code>YukiHookAPI</code> is built entirely with Kotlin <strong>lambda</strong> syntax.</p><p>Abandoning the original less friendly <code>XposedHelpers</code>, you can use it to easily create Xposed Modules and easily implement custom Hook API.</p><h2 id="language-requirement" tabindex="-1"><a class="header-anchor" href="#language-requirement" aria-hidden="true">#</a> Language Requirement</h2><p>Please use Kotlin, the framework part of the code composition is also compatible with Java but the implementation of the basic Hook scene <strong>may not work at all</strong>.</p><p>All demo code in this document will be described using Kotlin, if you don&#39;t know how to use Kotlin then you may not be able to use <code>YukiHookAPI</code>.</p>',6),b={href:"https://github.com/HighCapable/YukiHookAPI/tree/master/samples/demo-module/src/main/java/com/highcapable/yukihookapi/demo_module/hook/java",target:"_blank",rel:"noopener noreferrer"},v=c('<h2 id="source-of-inspiration" tabindex="-1"><a class="header-anchor" href="#source-of-inspiration" aria-hidden="true">#</a> Source of Inspiration</h2><p>Previously, when we built an Xposed Module, we first needed to create an <code>xposed_init</code> file under <code>assets</code>.</p><p>Then, manually fill in your own entry class name into the file and use <code>XposedHelpers</code> to implement our Hook logic.</p><p>Since Kotlin is the main Android development language, this API is really not very elegant to use.</p><p>Is there any <strong>easy to use, light, elegant</strong> solution?</p><p>With this idea, <code>YukiHookAPI</code> was born.</p><p>Now, we only need to write a small amount of code, and all the time and expense are handed over to automation.</p><p>With Kotlin&#39;s elegant <strong>lambda</strong> writing and <code>YukiHookAPI</code>, you can make your Hook logic more beautiful and clear.</p><blockquote><p>The following example</p></blockquote>',9),k=s("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[s("pre",{class:"shiki github-dark-dimmed",style:{"background-color":"#22272e"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F69D50"}},"@InjectYukiHookWithXposed")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"object"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"HookEntry"),s("span",{style:{color:"#ADBAC7"}}," : "),s("span",{style:{color:"#F69D50"}},"IYukiHookXposedInit"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"override"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"onHook"),s("span",{style:{color:"#ADBAC7"}},"() "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"encase"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#DCBDFB"}},"loadZygote"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            ActivityClass."),s("span",{style:{color:"#DCBDFB"}},"method"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                name "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"onCreate"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#DCBDFB"}},"param"),s("span",{style:{color:"#ADBAC7"}},"(BundleClass)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            }."),s("span",{style:{color:"#DCBDFB"}},"hook"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#DCBDFB"}},"before"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                  "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#DCBDFB"}},"after"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                  "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#DCBDFB"}},"loadApp"),s("span",{style:{color:"#ADBAC7"}},"(name "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"com.android.browser"'),s("span",{style:{color:"#ADBAC7"}},") {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            ActivityClass."),s("span",{style:{color:"#DCBDFB"}},"method"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                name "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"onCreate"')]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#DCBDFB"}},"param"),s("span",{style:{color:"#ADBAC7"}},"(BundleClass)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            }."),s("span",{style:{color:"#DCBDFB"}},"hook"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#DCBDFB"}},"before"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                  "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#DCBDFB"}},"after"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                  "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"}")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[s("pre",{class:"shiki github-dark-dimmed",style:{"background-color":"#22272e"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"class"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"HookEntry"),s("span",{style:{color:"#ADBAC7"}}," : "),s("span",{style:{color:"#F69D50"}},"IXposedHookZygoteInit"),s("span",{style:{color:"#ADBAC7"}},", "),s("span",{style:{color:"#DCBDFB"}},"IXposedHookLoadPackage"),s("span",{style:{color:"#ADBAC7"}}," {")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"private"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"lateinit"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"var"),s("span",{style:{color:"#ADBAC7"}}," moduleResources: "),s("span",{style:{color:"#F69D50"}},"XModuleResources")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"override"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"initZygote"),s("span",{style:{color:"#ADBAC7"}},"(sparam: "),s("span",{style:{color:"#F69D50"}},"IXposedHookZygoteInit"),s("span",{style:{color:"#ADBAC7"}},".StartupParam) {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        moduleResources "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," XModuleResources."),s("span",{style:{color:"#DCBDFB"}},"createInstance"),s("span",{style:{color:"#ADBAC7"}},"(sparam.modulePath, "),s("span",{style:{color:"#6CB6FF"}},"null"),s("span",{style:{color:"#ADBAC7"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        XposedHelpers."),s("span",{style:{color:"#DCBDFB"}},"findAndHookMethod"),s("span",{style:{color:"#ADBAC7"}},"(")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                Activity::"),s("span",{style:{color:"#DCBDFB"}},"class"),s("span",{style:{color:"#ADBAC7"}},".java.name,")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                "),s("span",{style:{color:"#6CB6FF"}},"null"),s("span",{style:{color:"#ADBAC7"}},", "),s("span",{style:{color:"#96D0FF"}},'"onCreate"'),s("span",{style:{color:"#ADBAC7"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                Bundle::"),s("span",{style:{color:"#DCBDFB"}},"class"),s("span",{style:{color:"#ADBAC7"}},".java,")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                object : "),s("span",{style:{color:"#F69D50"}},"XC_MethodHook"),s("span",{style:{color:"#ADBAC7"}},"() {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    "),s("span",{style:{color:"#F47067"}},"override"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"beforeHookedMethod"),s("span",{style:{color:"#ADBAC7"}},"(param: "),s("span",{style:{color:"#F69D50"}},"MethodHookParam"),s("span",{style:{color:"#ADBAC7"}},"?) {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                        "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    }")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    "),s("span",{style:{color:"#F47067"}},"override"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"afterHookedMethod"),s("span",{style:{color:"#ADBAC7"}},"(param: "),s("span",{style:{color:"#F69D50"}},"MethodHookParam"),s("span",{style:{color:"#ADBAC7"}},"?) {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                        "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                })")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"override"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"handleLoadPackage"),s("span",{style:{color:"#ADBAC7"}},"(lpparam: "),s("span",{style:{color:"#F69D50"}},"XC_LoadPackage"),s("span",{style:{color:"#ADBAC7"}},".LoadPackageParam) {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}}," (lpparam.packageName "),s("span",{style:{color:"#F47067"}},"=="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"com.android.browser"'),s("span",{style:{color:"#ADBAC7"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            XposedHelpers."),s("span",{style:{color:"#DCBDFB"}},"findAndHookMethod"),s("span",{style:{color:"#ADBAC7"}},"(")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                Activity::"),s("span",{style:{color:"#DCBDFB"}},"class"),s("span",{style:{color:"#ADBAC7"}},".java.name,")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                lpparam.classLoader, "),s("span",{style:{color:"#96D0FF"}},'"onCreate"'),s("span",{style:{color:"#ADBAC7"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                Bundle::"),s("span",{style:{color:"#DCBDFB"}},"class"),s("span",{style:{color:"#ADBAC7"}},".java,")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                object : "),s("span",{style:{color:"#F69D50"}},"XC_MethodHook"),s("span",{style:{color:"#ADBAC7"}},"() {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    "),s("span",{style:{color:"#F47067"}},"override"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"beforeHookedMethod"),s("span",{style:{color:"#ADBAC7"}},"(param: "),s("span",{style:{color:"#F69D50"}},"MethodHookParam"),s("span",{style:{color:"#ADBAC7"}},"?) {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                        "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    }")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    "),s("span",{style:{color:"#F47067"}},"override"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"fun"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"afterHookedMethod"),s("span",{style:{color:"#ADBAC7"}},"(param: "),s("span",{style:{color:"#F69D50"}},"MethodHookParam"),s("span",{style:{color:"#ADBAC7"}},"?) {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                        "),s("span",{style:{color:"#768390"}},"// Your code here.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                    }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"                })")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"}")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("p",null,"Yes, you read that right, just needing these codes can completely replace the traditional Xposed API to achieve the same function.",-1),g=s("p",null,[e("Now, with the help of the efficient and powerful "),s("code",null,"YukiHookAPI"),e(", you can implement a very simple Xposed Module.")],-1);function _(H,I){const o=n("ExternalLinkIcon"),r=n("CodeGroupItem"),t=n("CodeGroup");return p(),d("div",null,[y,u,D,B,s("p",null,[e("The name is taken from "),s("a",m,[e('"ももくり" heroine Yuki Kurihara'),l(o)]),e(".")]),s("p",null,[e("Formerly the Innocent Xposed API used in "),s("a",C,[e("Development Learning Project"),l(o)]),e(", now renamed and open sourced.")]),h,s("p",null,[e("Part of the Java Demo code can be found "),s("a",b,[e("here"),l(o)]),e(", but not recommended.")]),v,l(t,null,{default:a(()=>[l(r,{title:"Yuki Hook API"},{default:a(()=>[k]),_:1}),l(r,{title:"Rovo89 Xposed API"},{default:a(()=>[F]),_:1})]),_:1}),f,g])}const w=i(A,[["render",_],["__file","home.html.vue"]]);export{w as default};
