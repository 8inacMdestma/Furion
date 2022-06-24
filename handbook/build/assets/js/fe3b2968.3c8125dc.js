"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3723],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"audit",title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},c=void 0,l={unversionedId:"audit",id:"audit",title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",description:"5.4.1 \u5ba1\u8ba1\u65e5\u5fd7",source:"@site/docs/audit.mdx",sourceDirName:".",slug:"/audit",permalink:"/furion/docs/audit",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/audit.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1656057364,formattedLastUpdatedAt:"6/24/2022",frontMatter:{id:"audit",title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},sidebar:"docs",previous:{title:"5.3 \u7b5b\u9009\u5668/\u62e6\u622a\u5668/\u8fc7\u6ee4\u5668/AOP",permalink:"/furion/docs/filter"},next:{title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",permalink:"/furion/docs/middleware"}},d={},p=[{value:"5.4.1 \u5ba1\u8ba1\u65e5\u5fd7",id:"541-\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"5.4.2 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",id:"542-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"5.4.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"543-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"541-\u5ba1\u8ba1\u65e5\u5fd7"},"5.4.1 \u5ba1\u8ba1\u65e5\u5fd7"),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u4f01\u4e1a\u5e94\u7528\u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u5bf9\u7cfb\u7edf\u6240\u6709\u7684\u64cd\u4f5c\u5305\u62ec\u8bf7\u6c42\u3001\u6570\u636e\u5e93\u64cd\u4f5c\u7b49\u7b49\u90fd\u5e94\u8be5\u8bb0\u5f55\u8d77\u6765\uff0c\u90a3\u4e48\u8fd9\u4e9b\u65e5\u5fd7\u6211\u4eec\u79f0\u4e3a\u64cd\u4f5c\u65e5\u5fd7\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u5ba1\u8ba1\u65e5\u5fd7\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5173\u4e8e\u6570\u636e\u5e93\u64cd\u4f5c\u5ba1\u8ba1\u65e5\u5fd7")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u9700\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u64cd\u4f5c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u64cd\u4f5c")," \u7684\u5ba1\u8ba1\u65e5\u5fd7\u53ef\u67e5\u9605 \u3010",(0,i.kt)("a",{parentName:"p",href:"/furion/docs/dbcontext-audit"},"9.22 \u5ba1\u8ba1\u65e5\u5fd7\u7ae0\u8282"),"\u3011"))),(0,i.kt)("h2",{id:"542-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"},"5.4.2 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5b9e\u73b0\u539f\u7406")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u8fd9\u91cc\uff0c\u7ed3\u5408 \u3010",(0,i.kt)("a",{parentName:"p",href:"/furion/docs/filter"},"5.3 \u7b5b\u9009\u5668"),"\u3011 \u5b9e\u73b0\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\u3002"))),(0,i.kt)("p",null,"\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u901a\u5e38\u6307\u7684\u662f\u8bb0\u5f55\u8bf7\u6c42\u5730\u5740\uff0c\u6765\u6e90\u5730\u5740\uff0c\u64cd\u4f5c\u4eba\uff0c\u4f20\u9012\u53c2\u6570\u7b49\u3002\u8fd9\u4e2a\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"IAsyncActionFilter")," \u7b5b\u9009\u5668\u5b9e\u73b0\uff0c\u5982\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestAuditFilter")," \u5e76\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"IAsyncActionFilter"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {9,45}",showLineNumbers:!0,"":!0,"{9,45}":!0},'using Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc.Filters;\nusing System;\nusing System.Security.Claims;\nusing System.Threading.Tasks;\n\nnamespace Furion.Web.Core\n{\n    public class RequestAuditFilter : IAsyncActionFilter\n    {\n        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)\n        {\n            //============== \u8fd9\u91cc\u662f\u6267\u884c\u65b9\u6cd5\u4e4b\u524d\u83b7\u53d6\u6570\u636e ====================\n\n            // \u83b7\u53d6\u63a7\u5236\u5668\u3001\u8def\u7531\u4fe1\u606f\n            var actionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;\n\n            // \u83b7\u53d6\u8bf7\u6c42\u7684\u65b9\u6cd5\n            var method = actionDescriptor.MethodInfo;\n\n            // \u83b7\u53d6 HttpContext \u548c HttpRequest \u5bf9\u8c61\n            var httpContext = context.HttpContext;\n            var httpRequest = httpContext.Request;\n\n            // \u83b7\u53d6\u5ba2\u6237\u7aef Ipv4 \u5730\u5740\n            var remoteIPv4 = httpContext.GetRemoteIpAddressToIPv4();\n\n            // \u83b7\u53d6\u8bf7\u6c42\u7684 Url \u5730\u5740\n            var requestUrl = httpRequest.GetRequestUrlAddress();\n\n            // \u83b7\u53d6\u6765\u6e90 Url \u5730\u5740\n            var refererUrl = httpRequest.GetRefererUrlAddress();\n\n            // \u83b7\u53d6\u8bf7\u6c42\u53c2\u6570\uff08\u5199\u5165\u65e5\u5fd7\uff0c\u9700\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\u540e\u5b58\u50a8\uff09\n            var parameters = context.ActionArguments;\n\n            // \u83b7\u53d6\u64cd\u4f5c\u4eba\uff08\u5fc5\u987b\u6388\u6743\u8bbf\u95ee\u624d\u6709\u503c\uff09"userId" \u4e3a\u4f60\u5b58\u50a8\u7684 claims type\uff0cjwt \u6388\u6743\u5bf9\u5e94\u7684\u662f payload \u4e2d\u5b58\u50a8\u7684\u952e\u540d\n            var userId = httpContext.User?.FindFirstValue("userId");\n\n            // \u8bf7\u6c42\u65f6\u95f4\n            var requestedTime = DateTimeOffset.Now;\n\n\n            //============== \u8fd9\u91cc\u662f\u6267\u884c\u65b9\u6cd5\u4e4b\u540e\u83b7\u53d6\u6570\u636e ====================\n            var actionContext = await next();\n\n            // \u83b7\u53d6\u8fd4\u56de\u7684\u7ed3\u679c\n            var returnResult = actionContext.Result;\n\n            // \u5224\u65ad\u662f\u5426\u8bf7\u6c42\u6210\u529f\uff0c\u6ca1\u6709\u5f02\u5e38\u5c31\u662f\u8bf7\u6c42\u6210\u529f\n            var isRequestSucceed = actionContext.Exception == null;\n\n            // \u83b7\u53d6\u8c03\u7528\u5806\u6808\u4fe1\u606f\uff0c\u63d0\u4f9b\u66f4\u52a0\u7b80\u5355\u660e\u4e86\u7684\u8c03\u7528\u548c\u5f02\u5e38\u5806\u6808\n            var stackTrace = EnhancedStackTrace.Current();\n\n            // \u8fd9\u91cc\u5199\u5165\u65e5\u5fd7\uff0c\u6216\u5b58\u50a8\u5230\u6570\u636e\u5e93\u4e2d\uff01\uff01\uff01~~~~~~~~~~~~~~~~~~~~\n        }\n    }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestAuditFilter")," \u7b5b\u9009\u5668")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddMvcFilter<RequestAuditFilter>();\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8e\u7b5b\u9009\u5668\u6ce8\u518c\u987a\u5e8f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u901a\u5e38\u5148\u6ce8\u518c\u7684\u4f1a\u5148\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"IOrderedFilter")," \u63a5\u53e3\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"Order")," \u5c5e\u6027\uff0c\u6570\u503c\u8d8a\u5c0f\uff0c\u8d8a\u5148\u6267\u884c\u3002"))),(0,i.kt)("h2",{id:"543-\u53cd\u9988\u4e0e\u5efa\u8bae"},"5.4.3 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);