import{_ as c,r as a,o as i,c as l,b as t,a as s,e as p,d as n}from"./app.8d3bbff2.js";const u={},r=p('<h1 id="\u8054\u52A8\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u8054\u52A8\u539F\u7406" aria-hidden="true">#</a> \u8054\u52A8\u539F\u7406</h1><p>tmagic-editor\u7684\u8054\u52A8\uFF0C\u6307\u8FD9\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u5728\u7F16\u8F91\u5668\u4E2D\uFF0C\u7EC4\u4EF6\u7684\u8868\u5355\u914D\u7F6E\u9879\u4E4B\u95F4\u9700\u8981\u8054\u52A8\u3002</li><li>\u9875\u9762\u4E2D\u7684\u7EC4\u4EF6\u4E4B\u95F4\uFF0C\u9700\u8981\u8054\u52A8\u89E6\u53D1\u884C\u4E3A\u3002</li></ul><h2 id="\u8868\u5355\u8054\u52A8" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u8054\u52A8" aria-hidden="true">#</a> \u8868\u5355\u8054\u52A8</h2><p>\u8868\u5355\u7684\u8BE6\u7EC6\u5185\u5BB9\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="../advanced/magic-form">@tmagic/form</a>\u3002\u6211\u4EEC\u901A\u8FC7 <a href="../advanced/js-schema">JS Schema</a> \u63CF\u8FF0\u7684\u8868\u5355\u914D\u7F6E\uFF0C\u5B9E\u73B0\u8054\u52A8\u7684\u65B9\u5F0F\uFF0C\u5C31\u662F\u5199\u4E00\u4E2A\u7B80\u5355 js \u51FD\u6570\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5E0C\u671B\u6539\u53D8\u9009\u9879\u65F6\uFF0C\u540C\u65F6\u6539\u53D8\u6587\u672C\u6846\u7684\u5185\u5BB9\u3002</p>',6),d=n("\u5728\u7ECF\u8FC7\u8868\u5355\u6E32\u67D3\u5668\u65F6\uFF0C\u6240\u6709\u6307\u51FA\u51FD\u6570 API \u90FD\u4F1A\u4F20\u5165\u5F53\u524D\u6E32\u67D3\u7684"),k=s("strong",null,"\u8868\u5355\u7EC4\u4EF6\u5B9E\u4F8B(vm)",-1),v=n("\uFF0C"),m=s("strong",null,"\u5F53\u524D\u9879\u76EE(value)",-1),g=n("\uFF0C"),b=s("strong",null,"\u5F53\u524D\u8868\u5355model",-1),h=n("\uFF0C"),f=s("strong",null,"\u8868\u5355\u503CformValue",-1),_=n("\uFF0Cmodel \u5373 vue \u7684"),y={href:"https://v3.cn.vuejs.org/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},x=n("\u8868\u5355\u8F93\u5165\u7ED1\u5B9A"),w=n("\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u4ED6\u6765\u5B9E\u73B0\u503C\u8054\u52A8\u3002"),j=p(`<p>\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E0A\u8FF0\u7684\u53C2\u6570\u4F20\u5165\uFF0C\u4EE5\u53CA\u5176\u4ED6\u51FD\u6570 API \u5B9E\u73B0\u66F4\u591A\u7075\u6D3B\u7684\u8868\u5355\u8054\u52A8\uFF0C\u5177\u4F53\u53C2\u8003<a href="../../api/base-config">\u8868\u5355 API</a>\u3002</p><h2 id="\u7EC4\u4EF6\u8054\u52A8" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u8054\u52A8" aria-hidden="true">#</a> \u7EC4\u4EF6\u8054\u52A8</h2><p>tmagic-editor\u5728 @tmagic/core \u4E2D\uFF0C\u5B9E\u73B0\u4E86\u7EC4\u4EF6\u7684\u4E8B\u4EF6\u7ED1\u5B9A/\u5206\u53D1\u673A\u5236\u3002\u5728\u7EC4\u4EF6\u6E32\u67D3\u65F6\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u5728 @tmagic/ui \u4E2D\u7ECF\u8FC7\u57FA\u7840\u7EC4\u4EF6\u6E32\u67D3\u65F6\uFF0C\u4F1A\u88AB\u57FA\u7840\u7EC4\u4EF6\u6CE8\u5165\u516C\u5171\u65B9\u6CD5\u7684\u5B9E\u73B0\u3002\u5982\u4E0B\u5BF9\u6309\u94AE\u914D\u7F6E\u4E86<strong>\u70B9\u51FB\u4F7F\u6587\u672C\u9690\u85CF</strong>\u7684\u8054\u52A8\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u5728\u5BF9\u5E94\u6309\u94AE\u88AB\u70B9\u51FB\u65F6\uFF0C\u5C06\u4F1A\u89E6\u53D1\u5BF9\u5E94\u7ED1\u5B9A\u6587\u672C\u7684\u9690\u85CF\u3002</p><img src="https://image.video.qpic.cn/oa_88b7d-10_2117738923_1637238863127559"><h3 id="\u6DFB\u52A0\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><p>\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A\u5B8C\u6574\u7EC4\u4EF6\u53EF\u4EE5\u53C2\u8003<a href="../../component/introduction">\u7EC4\u4EF6\u5F00\u53D1</a>\uFF0C\u8FD9\u4E00\u8282\u6211\u4EEC\u4E3B\u8981\u8BB2\u8FF0\u5982\u4F55\u914D\u7F6E\u5B9A\u4E49\u4E8B\u4EF6\u3002</p><p>\u5728\u7EC4\u4EF6\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u58F0\u660E\u7EC4\u4EF6\u4E2D\u7684 event \u6587\u4EF6\uFF0C\u5728\u6587\u4EF6\u4E2D\u63CF\u8FF0\u5F53\u524D\u7EC4\u4EF6\u53EF\u4EE5\u914D\u7F6E\u7684\u4E8B\u4EF6\u540D\uFF0C\u548C\u53EF\u4EE5\u88AB\u89E6\u53D1\u7684\u52A8\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// event.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5B8C\u6210\u67D0\u4E8B\u4EF6&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;yourComponent:finishSomething&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5F39\u51FA Toast&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;toast&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF0Cevents \u7684 value \u662F\u4E2A\u4E8B\u4EF6\u540D\uFF0C\u662F <code>string</code> \u7C7B\u578B\uFF0C\u672A\u4E86\u907F\u514D\u548C\u5176\u4ED6\u7EC4\u4EF6\u4E8B\u4EF6\u540D\u91CD\u590D\uFF0C\u5E94\u8BE5\u6DFB\u52A0\u4E0A\u4E00\u4E9B\u524D\u7F00\u3002</p><p>\u800C methods \u4E2D\u7684 value \u5219\u662F\u4E00\u4E2A\u6302\u8F7D\u5728\u7EC4\u4EF6\u4E0A\u7684\u53EF\u6267\u884C\u51FD\u6570\u3002\u6211\u4EEC\u4F1A\u5728\u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u5206\u53D1\u5230\u5BF9\u5E94\u7EC4\u4EF6\u4E0A\uFF0C\u5E76\u6267\u884C\u5BF9\u5E94\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u7684\u65B9\u6CD5\u3002</p><p>\u914D\u7F6E\u4E86\u4E0A\u8FF0\u5185\u5BB9\u7684\u7EC4\u4EF6\uFF0C\u5728\u7F16\u8F91\u5668\u4E2D\u9009\u4E2D\u5F53\u524D\u7EC4\u4EF6\uFF0C\u8981\u89E6\u53D1\u5176\u4ED6\u7EC4\u4EF6\u7684\u8054\u52A8\u4E8B\u4EF6\u65F6\uFF0C\u4F1A\u6709\u5982\u4E0B\u9009\u9879</p><img src="https://image.video.qpic.cn/oa_88b7d-32_1191352525_1637240258489761"><p>\u5728\u88AB\u5176\u4ED6\u7EC4\u4EF6\u9009\u4E2D\u4E3A\u8054\u52A8\u7EC4\u4EF6\uFF0C\u8981\u89E6\u53D1\u8054\u52A8\u4E8B\u4EF6\uFF0C\u4F1A\u6709\u5982\u4E0B\u9009\u9879</p><img src="https://image.video.qpic.cn/oa_fd3c9c-3_214972289_1637240375129207"><h3 id="\u7EC4\u4EF6\u4E2D\u7684\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E2D\u7684\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E2D\u7684\u4EE3\u7801\u5B9E\u73B0</h3><p>\u5982\u4E0A\u9762\u63D0\u5230\u7684\uFF0C\u6211\u4EEC\u5B9A\u5236\u4E86<strong>\u5B8C\u6210\u67D0\u4EF6\u4E8B</strong>\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u4EE5\u53CA\u8981\u63D0\u4F9B\u4E00\u4E2A<strong>\u5F39\u51FA Toast</strong>\u7684\u65B9\u6CD5\u3002\u5728\u7EC4\u4EF6\u4E2D\u5FC5\u8981\u7684\u5B9E\u73B0\u5185\u5BB9\u5982\u4E0B\u3002</p><h4 id="vue-\u7248\u672C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue-\u7248\u672C\u5B9E\u73B0" aria-hidden="true">#</a> vue \u7248\u672C\u5B9E\u73B0</h4><p>\u6211\u4EEC\u4E3B\u8981\u8BB2\u89E3 vue3 \u7684 setup \u5B9E\u73B0\u3002vue2 \u53EF\u4EE5\u6839\u636E vue3 \u540C\u7406\u8F6C\u6362\u6210 options api \u5B9E\u73B0\u5373\u53EF\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Test.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- your component code --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;magic-ui-test&#39;</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">app</span><span class="token operator">:</span> Core <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> hoc <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;hoc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6B64\u5904\u5B9E\u73B0\u4E8B\u4EF6\u52A8\u4F5C</span>
    <span class="token comment">// \u7531\u4E8E\u7EC4\u4EF6\u5728 @tmagic/ui \u4E2D\u901A\u8FC7\u57FA\u7840\u7EC4\u4EF6 Component \u6765\u5C01\u88C5\uFF0C\u5373\u6BCF\u4E2A\u7EC4\u4EF6\u5176\u5B9E\u90FD\u88AB Component \u5305\u88F9</span>
    <span class="token comment">// \u5B9E\u9645\u89E6\u53D1\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5230\u5F53\u524D\u7EC4\u4EF6\u7684\u76F4\u5C5E\u7236\u7EC4\u4EF6 Component \u4E0A\uFF0C\u6211\u4EEC\u4F1A provide \u8FD9\u4E2A\u7236\u7EC4\u4EF6\u4E3A\u9AD8\u9636\u7EC4\u4EF6 hoc</span>
    <span class="token comment">// \u6240\u4EE5\u5C06 toast \u65B9\u6CD5\u6302\u8F7D\u5230\u5F53\u524D\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u4E0A</span>
    hoc<span class="token punctuation">.</span>toast <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token comment">/*\u63A5\u6536\u89E6\u53D1\u4E8B\u4EF6\u7EC4\u4EF6\u4F20\u8FDB\u6765\u7684\u53C2\u6570*/</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4B\u8BD5 vue3&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6B64\u5904\u5B9E\u73B0\u89E6\u53D1\u4E8B\u4EF6</span>
      <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// app.emit \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u4E8B\u4EF6\u540D\uFF0C\u5176\u4F59\u53C2\u6570\u4E3A\u4F60\u8981\u4F20\u7ED9\u63A5\u53D7\u4E8B\u4EF6\u7EC4\u4EF6\u7684\u53C2\u6570</span>
        app<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;yourComponent:finishSomething&quot;</span><span class="token punctuation">,</span> <span class="token comment">/*\u53EF\u4EE5\u4F20\u53C2\u7ED9\u63A5\u6536\u65B9*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u7528 vue \u5B9E\u73B0\u7684 \u7EC4\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7 inject \u65B9\u5F0F\u6765\u63D0\u4F9B\u6838\u5FC3 app \u548C\u9AD8\u9636\u7EC4\u4EF6 hoc\u3002\u8C03\u7528\u8054\u52A8\u4E8B\u4EF6\u65B9\u6CD5\u65F6\uFF0Ctmagic-editor\u662F\u901A\u8FC7\u7EC4\u4EF6\u7684 ref\uFF0C\u5E76\u76F4\u63A5\u8C03\u7528\u5F53\u524D\u7EC4\u4EF6\u7684\u65B9\u6CD5\u3002</p></div><h4 id="react-\u7248\u672C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#react-\u7248\u672C\u5B9E\u73B0" aria-hidden="true">#</a> react \u7248\u672C\u5B9E\u73B0</h4><p>\u5728 react \u7684\u5B9E\u73B0\u4E2D\uFF0C\u7531\u4E8Etmagic-editor\u63D0\u4F9B\u7684 @tmagic/ui-react \u7248\u672C\u662F\u7528 hook \u5B9E\u73B0\u7684\u3002\u6240\u4EE5\u7EC4\u4EF6\u5F00\u53D1\u6211\u4EEC\u4E5F\u76F8\u5E94\u7684\u9700\u8981\u4F7F\u7528 hook \u65B9\u5F0F\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@tmagic/ui-react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> config <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// react \u548C vue \u5B9E\u73B0\u4E0D\u540C\uFF0C\u6211\u4EEC\u901A\u8FC7 useApp \u8FD9\u4E2A hook \u6765\u63D0\u4F9B app, ref \u7B49\u6838\u5FC3\u5185\u5BB9</span>
  <span class="token comment">// \u5176\u4E2D ref \u9700\u8981\u7ED1\u5B9A\u5230\u4F60\u7684\u7EC4\u4EF6\u4E0A\u4F5C\u4E3A ref\u3002\u56E0\u4E3A\u4E00\u4E9B\u516C\u5171\u4E8B\u4EF6\u4F1A\u9700\u8981\u4F7F\u7528\u5230\u4F60\u7684\u7EC4\u4EF6 dom</span>
  <span class="token comment">// \u540C\u65F6\u8FD9\u4E2A ref \u4E5F\u4F1A\u5728tmagic-editor\u7684\u9AD8\u7EA7\u51FD\u6570\u94A9\u5B50\u4E2D\uFF0C\u5C06\u4F60\u7684\u7EC4\u4EF6 dom \u4F5C\u4E3A\u53C2\u6570\u63D0\u4F9B\u7ED9\u81EA\u5B9A\u4E49\u94A9\u5B50</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    config<span class="token punctuation">,</span>
    <span class="token comment">// \u6B64\u5904\u5B9E\u73B0\u4E8B\u4EF6\u52A8\u4F5C</span>
    <span class="token comment">// \u901A\u8FC7\u5411 useApp \u8FD9\u4E2A hook \u63D0\u4F9B methods \u65B9\u6CD5</span>
    <span class="token comment">// tmagic-editor\u4F1A\u5C06\u8BE5\u4E8B\u4EF6\u6CE8\u518C\u5230\u4E8B\u4EF6\u673A\u5236\u4E2D\uFF0C\u5728\u5BF9\u5E94\u4E8B\u4EF6\u54CD\u5E94\u88AB\u89E6\u53D1\u65F6\u8C03\u7528\u5BF9\u5E94\u65B9\u6CD5</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">toast</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token comment">/*\u63A5\u6536\u89E6\u53D1\u4E8B\u4EF6\u7EC4\u4EF6\u4F20\u8FDB\u6765\u7684\u53C2\u6570*/</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4B\u8BD5 react&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onClickFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// app.emit \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u4E8B\u4EF6\u540D\uFF0C\u5176\u4F59\u53C2\u6570\u4E3A\u4F60\u8981\u4F20\u7ED9\u63A5\u53D7\u4E8B\u4EF6\u7EC4\u4EF6\u7684\u53C2\u6570</span>
    app<span class="token operator">?.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;yourComponent:finishSomething&quot;</span><span class="token punctuation">,</span> <span class="token comment">/*\u53EF\u4EE5\u4F20\u53C2\u7ED9\u63A5\u6536\u65B9*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> 
      <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span>
      <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>config<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>app<span class="token punctuation">.</span><span class="token function">transformStyle</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>style <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      // your component code
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>react \u7684\u5B9E\u73B0\u65B9\u5F0F\u9700\u8981\u5F00\u53D1\u8005\u901A\u8FC7 useApp \u6765\u83B7\u5F97\u6211\u4EEC\u63D0\u4F9B\u7684\u6838\u5FC3 app \u548C\u4E00\u4E2A ref\uFF0C\u8FD9\u4E2A ref \u662F\u9700\u8981\u5F00\u53D1\u8005\u7ED1\u5B9A\u5230\u7EC4\u4EF6\u4E0A\u7684\u3002\u548C vue \u4E0D\u540C\uFF0Creact \u7684 dom \u5B9E\u4F8B\u9700\u8981\u7528\u6237\u6307\u5B9A\u3002</p><p>\u800C\u9700\u8981\u8FD9\u4E2A ref \u7684\u539F\u56E0\uFF0C\u662F\u5728\u516C\u5171\u4E8B\u4EF6\u6267\u884C\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981 dom \u5B9E\u4F8B\u6765\u8FDB\u884C\u64CD\u4F5C\uFF1B\u6216\u8005\u7528\u6237\u4F7F\u7528\u9AD8\u7EA7\u51FD\u6570\u65F6\uFF0C\u6211\u4EEC\u4F1A\u5411\u7528\u6237\u4F20\u5165\u7EC4\u4EF6\u7684 dom \u5B9E\u4F8B\u7ED9\u5F00\u53D1\u8005\u4F7F\u7528\u3002</p></div><p>\u6309\u7167\u4E0A\u8FF0\u5B9E\u73B0\u89E6\u53D1\u4E8B\u4EF6\u548C\u4E8B\u4EF6\u52A8\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u5B8C\u6210\u7EC4\u4EF6\u7684\u8054\u52A8\u4E8B\u4EF6\u5206\u53D1\u54CD\u5E94\u3002</p>`,25);function C(q,A){const e=a("demo-block"),o=a("ExternalLinkIcon");return i(),l("div",null,[r,t(e,{type:"form",config:`[{
  text: '\u6587\u672C',
  name: 'text'
}, {
  type: 'select',
  text: '\u4E0B\u62C9\u9009\u9879',
  name: 'select',
  options: [
    { text: '\u9009\u98791', value: 1 },
    { text: '\u9009\u98792', value: 2 }
  ],
  onChange: (vm, value, { model }) => {
    model.text = value;
  }
}]`},null,8,["config"]),s("p",null,[d,k,v,m,g,b,h,f,_,s("a",y,[x,t(o)]),w]),j])}var E=c(u,[["render",C],["__file","coupling.html.vue"]]);export{E as default};
