import{_ as r,r as t,o as d,c,a as e,b as s,w as i,e as a,d as n}from"./app.8d3bbff2.js";const p={},u=a('<h1 id="stagedragresize" tabindex="-1"><a class="header-anchor" href="#stagedragresize" aria-hidden="true">#</a> StageDragResize</h1><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> core</h3>',3),h=e("strong",null,"\u7C7B\u578B\uFF1A",-1),g=n(),m=n("StageCore"),v=e("li",null,[e("p",null,[e("strong",null,"\u8BE6\u60C5\uFF1A")])],-1),b=a('<p>StageCore\u5B9E\u4F8B</p><h3 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLElement</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u9009\u4E2D\u6846\u5BB9\u5668</p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><h3 id="core-1" tabindex="-1"><a class="header-anchor" href="#core-1" aria-hidden="true">#</a> core</h3>',6),_=e("strong",null,"\u7C7B\u578B\uFF1A",-1),k=n(),f=n("StageCore"),x=e("li",null,[e("p",null,[e("strong",null,"\u8BE6\u60C5\uFF1A")])],-1),E=a('<h3 id="container-1" tabindex="-1"><a class="header-anchor" href="#container-1" aria-hidden="true">#</a> container</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLElement</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u9009\u4E2D\u6846\u5BB9\u5668</p><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> target</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLElement</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u76EE\u6807\u8282\u70B9</p><h3 id="dragel" tabindex="-1"><a class="header-anchor" href="#dragel" aria-hidden="true">#</a> dragEl</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLElement</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u76EE\u6807\u8282\u70B9\u5728\u8499\u5C42\u4E2D\u7684\u5360\u4F4D\u8282\u70B9</p><h3 id="moveable" tabindex="-1"><a class="header-anchor" href="#moveable" aria-hidden="true">#</a> moveable</h3>',10),L=e("strong",null,"\u7C7B\u578B\uFF1A",-1),y=n(),T={href:"https://github.com/daybrush/moveable",target:"_blank",rel:"noopener noreferrer"},M=n("moveable"),z=e("li",null,[e("p",null,[e("strong",null,"\u8BE6\u60C5\uFF1A")])],-1),H=a(`<p>moveable\u5B9E\u4F8B</p><h3 id="horizontalguidelines" tabindex="-1"><a class="header-anchor" href="#horizontalguidelines" aria-hidden="true">#</a> horizontalGuidelines</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number[]</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u6C34\u5E73\u53C2\u8003\u7EBF</p><h3 id="verticalguidelines" tabindex="-1"><a class="header-anchor" href="#verticalguidelines" aria-hidden="true">#</a> verticalGuidelines</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number[]</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u5782\u76F4\u53C2\u8003\u7EBF</p><h3 id="elementguidelines" tabindex="-1"><a class="header-anchor" href="#elementguidelines" aria-hidden="true">#</a> elementGuidelines</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLElement[]</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u5BF9\u9F50\u5143\u7D20\u96C6\u5408</p><h3 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h3><ul><li><strong>\u7C7B\u578B\uFF1A</strong> Mode</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Mode <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u7EDD\u5BF9\u5B9A\u4F4D\u5E03\u5C40 */</span>
  <span class="token constant">ABSOLUTE</span> <span class="token operator">=</span> <span class="token string">&#39;absolute&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** \u56FA\u5B9A\u5B9A\u4F4D\u5E03\u5C40 */</span>
  <span class="token constant">FIXED</span> <span class="token operator">=</span> <span class="token string">&#39;fixed&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** \u6D41\u5F0F\u5E03\u5C40 */</span>
  <span class="token constant">SORTABLE</span> <span class="token operator">=</span> <span class="token string">&#39;sortable&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u8BE6\u60C5\uFF1A</strong></li></ul><p>\u5E03\u5C40\u65B9\u5F0F\uFF1A\u6D41\u5F0F\u5E03\u5C40\u3001\u7EDD\u5BF9\u5B9A\u4F4D\u3001\u56FA\u5B9A\u5B9A\u4F4D</p><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{HTMLElement} el</code> \u7EC4\u4EF6Dom\u8282\u70B9</li><li><code>{MouseEvent} MouseEvent</code></li></ul></li><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u5C06\u9009\u4E2D\u6846\u6E32\u67D3\u5E76\u8986\u76D6\u5230\u9009\u4E2D\u7684\u7EC4\u4EF6Dom\u8282\u70B9\u4E0A\u65B9</p><p>\u5F53\u9009\u4E2D\u7684\u8282\u70B9\u662F\u4E0D\u662Fabsolute\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9\u51FA\u6765\u4F5C\u4E3A\u62D6\u62FD\u76EE\u6807</p></li></ul><h3 id="updatemoveable" tabindex="-1"><a class="header-anchor" href="#updatemoveable" aria-hidden="true">#</a> updateMoveable</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{HTMLElement} el</code> \u7EC4\u4EF6Dom\u8282\u70B9</li></ul></li><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u521D\u59CB\u5316\u9009\u4E2D\u6846\u5E76\u6E32\u67D3\u51FA\u6765</p></li></ul><h3 id="setguidelines" tabindex="-1"><a class="header-anchor" href="#setguidelines" aria-hidden="true">#</a> setGuidelines</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{GuidesType} type</code> \u53C2\u8003\u7EBF\u7C7B\u578B</li><li><code>{number[]} guidelines</code> \u53C2\u8003\u7EBF\u504F\u79FB\u503C</li></ul></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** \u53C2\u8003\u7EBF\u7C7B\u578B */</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> GuidesType <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u6C34\u5E73 */</span>
  <span class="token constant">HORIZONTAL</span> <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** \u5782\u76F4 */</span>
  <span class="token constant">VERTICAL</span> <span class="token operator">=</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u8BBE\u7F6E\u53C2\u8003\u7EBF</p></li></ul><h3 id="clearguides" tabindex="-1"><a class="header-anchor" href="#clearguides" aria-hidden="true">#</a> clearGuides</h3><ul><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u60C5\u51B5\u53C2\u8003\u7EBF</p></li></ul><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><ul><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u9500\u6BC1\u5B9E\u4F8B</p></li></ul>`,28);function G(R,S){const l=t("RouterLink"),o=t("ExternalLinkIcon");return d(),c("div",null,[u,e("ul",null,[e("li",null,[e("p",null,[h,g,s(l,{to:"/api/stage/core.html"},{default:i(()=>[m]),_:1})])]),v]),b,e("ul",null,[e("li",null,[e("p",null,[_,k,s(l,{to:"/api/stage/core.html"},{default:i(()=>[f]),_:1})])]),x]),E,e("ul",null,[e("li",null,[e("p",null,[L,y,e("a",T,[M,s(o)])])]),z]),H])}var w=r(p,[["render",G],["__file","drag-resize.html.vue"]]);export{w as default};
