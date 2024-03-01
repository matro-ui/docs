"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[3249,8401],{2383:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);const o="marker_ejtM";var l=t(4848);const s=e=>{let{children:n}=e;return(0,l.jsx)("span",{className:o,children:n})}},4029:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(6540);var o=t(4164),l=t(1003),s=t(7559),c=t(7131),a=t(6535),r=t(8258),i=t(1312),d=t(9022),u=t(4848);function p(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(i.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(i.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,c.e)(),{title:t,description:o,date:s,tags:a,authors:r,frontMatter:i}=n,{keywords:d}=i,p=e.image??i.image;return(0,u.jsxs)(l.be,{title:t,description:o,keywords:d,image:p,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),a.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:a.map((e=>e.label)).join(",")})]})}var m=t(7763),g=t(996);function _(e){let{sidebar:n,children:t}=e;const{metadata:o,toc:l}=(0,c.e)(),{nextItem:s,prevItem:i,frontMatter:d,unlisted:h}=o,{hide_table_of_contents:_,toc_min_heading_level:x,toc_max_heading_level:v}=d;return(0,u.jsxs)(a.A,{sidebar:n,toc:!_&&l.length>0?(0,u.jsx)(m.A,{toc:l,minHeadingLevel:x,maxHeadingLevel:v}):void 0,children:[h&&(0,u.jsx)(g.A,{}),(0,u.jsx)(r.A,{children:t}),(s||i)&&(0,u.jsx)(p,{nextItem:s,prevItem:i})]})}function x(e){const n=e.content;return(0,u.jsx)(c.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(l.e3,{className:(0,o.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(_,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},7763:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(4164),l=t(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var c=t(4848);const a="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function i(e){let{className:n,...t}=e;return(0,c.jsx)("div",{className:(0,o.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,c.jsx)(l.A,{...t,linkClassName:a,linkActiveClassName:r})})}},5195:(e,n,t)=>{t.d(n,{A:()=>g});var o=t(6540),l=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):o.push(l)})),o}function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const o=e.find((e=>a(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function i(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=i();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:l,minHeadingLevel:s,maxHeadingLevel:c}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let l=n;l<=t;l+=1)o.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:c}),i=r(a,{anchorTopOffset:t.current}),d=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(8774),p=t(4848);function h(e){let{toc:n,className:t,linkClassName:o,isChild:l}=e;return n.length?(0,p.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,p.jsxs)("li",{children:[(0,p.jsx)(u.A,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,p.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const m=o.memo(h);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:u,...h}=e;const g=(0,l.p)(),_=i??g.tableOfContents.minHeadingLevel,x=u??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,o.useMemo)((()=>c({toc:s(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:_,maxHeadingLevel:x});return d((0,o.useMemo)((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:_,maxHeadingLevel:x}}),[a,r,_,x])),(0,p.jsx)(m,{toc:v,className:t,linkClassName:a,...h})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var o=t(4164),l=t(1312),s=t(5260),c=t(4848);function a(){return(0,c.jsx)(l.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,c.jsx)(l.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,c.jsx)(s.A,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function p(e){let{className:n}=e;return(0,c.jsx)(u.A,{type:"caution",title:(0,c.jsx)(a,{}),className:(0,o.A)(n,d.G.common.unlistedBanner),children:(0,c.jsx)(r,{})})}function h(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{}),(0,c.jsx)(p,{...e})]})}},356:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(4164),l=t(6058),s=t(7559),c=t(4291);const a={codeBlockContainer:"codeBlockContainer_APcc"};var r=t(4848);function i(e){let{as:n,...t}=e;const i=(0,l.A)(),d=(0,c.M$)(i);return(0,r.jsx)(n,{...t,style:d,className:(0,o.A)(t.className,a.codeBlockContainer,s.G.common.codeBlock)})}},5822:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var o=t(4164),l=t(356),s=t(2626),c=t(4848);function a(e){let{children:n,className:t}=e;return(0,c.jsx)(l.A,{as:"pre",tabIndex:0,className:(0,o.A)(s.A.codeBlockStandalone,"thin-scrollbar",t),children:(0,c.jsx)("code",{className:s.A.codeBlockLines,children:n})})}},8336:(e,n,t)=>{t.d(n,{A:()=>b});t(6540);var o=t(4164),l=t(6342),s=t(6058),c=t(4291),a=t(6591),r=t(1765);const i={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var d=t(4848);function u(e){let{line:n,classNames:t,showLineNumbers:l,getLineProps:s,getTokenProps:c}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const a=s({line:n,className:(0,o.A)(t,l&&i.codeLine)}),r=n.map(((e,n)=>(0,d.jsx)("span",{...c({token:e,key:n})},n)));return(0,d.jsxs)("span",{...a,children:[l?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:i.codeLineNumber}),(0,d.jsx)("span",{className:i.codeLineContent,children:r})]}):r,(0,d.jsx)("br",{})]})}var p=t(2092),h=t(1312),m=t(5048);const g={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function _(e){let{className:n,onClick:t,isEnabled:l}=e;const s=(0,h.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,o.A)("clean-btn",n,l&&g.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(m.A,{className:g.wordWrapButtonIcon,"aria-hidden":"true"})})}var x=t(356),v=t(2626);function b(e){let{children:n,className:t="",metastring:i,title:h,showLineNumbers:m,language:g}=e;const{prism:{defaultLanguage:b,magicComments:f}}=(0,l.p)(),j=function(e){return e?.toLowerCase()}(g??(0,c.Op)(t)??b),N=(0,s.A)(),y=(0,a.f)(),k=(0,c.wt)(i)||h,{lineClassNames:C,code:A}=(0,c.Li)(n,{metastring:i,language:j,magicComments:f}),B=m??(0,c._u)(i);return(0,d.jsxs)(x.A,{as:"div",className:(0,o.A)(t,j&&!t.includes(`language-${j}`)&&`language-${j}`),children:[k&&(0,d.jsx)("div",{className:v.A.codeBlockTitle,children:k}),(0,d.jsxs)("div",{className:v.A.codeBlockContent,children:[(0,d.jsx)(r.f4,{theme:N,code:A,language:j??"text",children:e=>{let{className:n,style:t,tokens:l,getLineProps:s,getTokenProps:c}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,o.A)(n,v.A.codeBlock,"thin-scrollbar"),style:t,children:(0,d.jsx)("code",{className:(0,o.A)(v.A.codeBlockLines,B&&v.A.codeBlockLinesWithNumbering),children:l.map(((e,n)=>(0,d.jsx)(u,{line:e,getLineProps:s,getTokenProps:c,classNames:C[n],showLineNumbers:B},n)))})})}}),(0,d.jsxs)("div",{className:v.A.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,d.jsx)(_,{className:v.A.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),(0,d.jsx)(p.A,{className:v.A.codeButton,code:A})]})]})]})}},2092:(e,n,t)=>{t.d(n,{A:()=>u});var o=t(6540),l=t(4164),s=t(6861),c=t(1312),a=t(1473),r=t(4115);const i={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR",copyButtonText:"copyButtonText_xXQF"};var d=t(4848);function u(e){let{code:n,className:t}=e;const[u,p]=(0,o.useState)(!1),h=(0,o.useRef)(void 0),m=(0,o.useCallback)((()=>{(0,s.A)(n),p(!0),h.current=window.setTimeout((()=>{p(!1)}),1e3)}),[n]);return(0,o.useEffect)((()=>()=>window.clearTimeout(h.current)),[]),(0,d.jsxs)("button",{type:"button","aria-label":u?(0,c.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,c.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,c.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",t,i.copyButton,u&&i.copyButtonCopied),onClick:m,children:[(0,d.jsx)("span",{className:i.copyButtonText,children:u?(0,c.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,c.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"})}),(0,d.jsxs)("span",{className:i.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(a.A,{className:i.copyButtonIcon}),(0,d.jsx)(r.A,{className:i.copyButtonSuccessIcon})]})]})}},224:(e,n,t)=>{t.d(n,{A:()=>O});var o=t(6540),l=t(4164),s=t(2303),c=t(6850),a=t(1312),r=t(4586),i=t(8478),d=t(2181),u=t(6058),p=t(7489);const h={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"},m={codeParent:"codeParent_GSj2",codeButton:"codeButton_bR3a"};var g=t(2092),_=t(4848);function x(e){let{children:n}=e;return(0,_.jsx)("div",{className:(0,l.A)(h.playgroundHeader),children:n})}function v(){return(0,_.jsx)("div",{children:"Loading..."})}function b(){return(0,_.jsx)(i.A,{fallback:(0,_.jsx)(v,{}),children:()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p.A,{fallback:e=>(0,_.jsx)(d.MN,{...e}),children:(0,_.jsx)(c.pA,{})}),(0,_.jsx)(c.p1,{})]})})}function f(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:h.playgroundPreview,children:(0,_.jsx)(b,{})})})}function j(){const e=(0,s.A)();return(0,_.jsx)(c.w,{className:h.playgroundEditor},String(e))}function N(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(x,{children:(0,_.jsx)(a.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,_.jsx)(j,{})]})}const y=e=>`${e};`;function k(e){let{children:n,transformCode:t,...o}=e;const{siteConfig:{themeConfig:l}}=(0,r.A)(),{liveCodeBlock:{playgroundPosition:s}}=l,a=(0,u.A)(),i=o.metastring?.includes("noInline")??!1;return(0,_.jsx)("div",{className:h.playgroundContainer,children:(0,_.jsx)(c.Q,{code:n?.replace(/\n$/,""),noInline:i,transformCode:t??y,theme:a,...o,children:"top"===s?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{}),(0,_.jsxs)("div",{className:m.codeParent,children:[(0,_.jsx)(g.A,{className:m.codeButton,code:n?.replace(/\n$/,"")||""}),(0,_.jsx)(N,{})]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(N,{}),(0,_.jsx)(f,{})]})})})}var C=t(960),A=t(9644);const B=(I=A.A,function(e){return e.live?(0,_.jsx)(k,{scope:C.A,...e,className:(0,l.A)(e.className,m.playground)}):(0,_.jsx)(I,{...e})});var I,L=t(3230),w=t(3730),P=t(1351),T=t(6512),E=t(8774),S=t(2383),H=t(2302);function O(e){return function(e){return void 0!==e.children&&o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,_.jsx)(L.A,{...e}):(0,_.jsx)(B,{...e,scope:{...w,IoBluetoothOutline:P.xo_,IoLayersOutline:P.llF,IoSearch:P.zfp,IoMailUnreadOutline:P.Jex,IoIosArrowForward:T.OQo,Link:E.A,I:S.A,uuid:H.A}})}},7617:(e,n,t)=>{t.d(n,{Z:()=>o});const o={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(6540),l=t(403),s=t(7617);const c="mtui_button_xmEf",a="content_JZQn",r="default_QvER",i="mtui_button__icon_kEuk",d="glossy_1pgh";var u=t(4848);const p={hue:0,isIcon:!1,glossy:!1,leftIcon:null,rightIcon:null,as:(0,u.jsx)("button",{})},h=e=>{const n={"--hue":s.Z[e.color]?s.Z[e.color]:e.hue?e.hue:100,...e.style},t={...e};Object.keys(p).forEach((e=>delete t[e]));const h=(0,l.A)({"mtui-button":!0,[c]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[i]:e.isIcon,[e.className]:!!e.className}),m=(0,u.jsxs)(o.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:a,children:e?.children}),e.rightIcon??""]});return o.cloneElement(e.as,{...t,children:m,style:n,className:h})};h.defaultProps=p;const m=h},7874:(e,n,t)=>{t.d(n,{A:()=>o.A});var o=t(9427)},3730:(e,n,t)=>{t.r(n),t.d(n,{Accordion:()=>ne,AccordionButton:()=>le,AccordionItem:()=>te,Breadcrumbs:()=>me,BreadcrumbsItem:()=>_e,Button:()=>o.A,ButtonIcon:()=>r,Checkbox:()=>ve,Code:()=>w,InputChild:()=>y,InputChildButton:()=>k,InputChildIcon:()=>C,InputChildPrefix:()=>j,InputChildSelect:()=>N,InputDecrementStepper:()=>_,InputIncrementStepper:()=>x,InputNumber:()=>h,InputNumberField:()=>m,InputNumberStepper:()=>g,InputText:()=>b,InputTextField:()=>f,Kley:()=>Ee,LabelText:()=>B,LinkButton:()=>c,Progress:()=>Qe,Radio:()=>je,RadioGroup:()=>ye,Select:()=>Ce,SelectGroup:()=>Pe,Spinner:()=>ze,Stack:()=>$,Toggle:()=>De});var o=t(7874),l=t(6540),s=t(4848);const c=e=>(0,s.jsx)(o.A,{...e});var a=t(9427);const r=e=>(0,s.jsx)(a.A,{...e,isIcon:!0});var i=t(6268);const d={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var u=t(7617);const p=e=>{const{name:n,disabled:t,value:o,onChange:c,placeholder:a}=e,r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,s.jsx)("div",{className:(0,i.A)("mtui-inputnum",d.mtui_inputtype,{[d["mtui_color_"+e.color]]:e.color,[d.disabled]:t,[e.className]:!!e.className}),style:r,children:l.Children.map(e.children,(e=>l.cloneElement(e,{childProps:e.props,value:o,onChange:c,placeholder:a,name:n})))})};p.defaultProps={name:"",disabled:!1,placeholder:"0"};const h=p,m=e=>{let{onChange:n,value:t,placeholder:o,name:l,disabled:c}=e;const a={placeholder:o,name:l,disabled:c};return"function"==typeof n&&(a.onChange=n),(t||""===t)&&(a.value=t),(0,s.jsx)("input",{type:"number",...a})},g=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,s.jsx)("div",{className:d.stepper,children:l.Children.map(e.children,(e=>l.cloneElement(e,{onDecrement:t,onIncrement:n})))})},_=e=>{let{onDecrement:n}=e;return(0,s.jsx)("button",{onClick:n,children:(0,s.jsx)("span",{children:"\u25bc"})})},x=e=>(0,s.jsx)("button",{onClick:e.onIncrement,children:(0,s.jsx)("span",{children:"\u25b2"})}),v=e=>{const{onChange:n,value:t,placeholder:o,name:c,hue:a,disabled:r}=e,p={"--hue":u.Z[e.color]?u.Z[e.color]:a||160,...e.style};return(0,s.jsx)("div",{className:(0,i.A)("mtui-inputtext",d.mtui_inputtype,{[d.disabled]:r,[d["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:l.Children.map(e.children,(e=>l.cloneElement(e,{childProps:e.props,onChange:n,value:t,placeholder:o,disabled:r,name:c})))})};v.defaultProps={name:"",disabled:!1,placeholder:""};const b=v,f=e=>{let{value:n,placeholder:t,name:o,onChange:l,disabled:c}=e;const a={type:"text",placeholder:t,name:o,disabled:c};return"function"==typeof l&&(a.onChange=l),(n||""===n)&&(a.value=n),(0,s.jsx)("input",{...a})},j=e=>{let{childProps:n}=e;return n.value?(0,s.jsx)("div",{className:d.inputPrefix,children:n.value}):""},N=e=>e.children?(0,s.jsx)("select",{className:d.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",y=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:d.inputChild,children:l.Children.map(e.children,(e=>{const t={...n,...e.props};return e.props.onClick&&(t.onClick=n=>e.props.onClick(n,t)),l.cloneElement(e,t)}))}):""},k=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,s.jsx)("button",{...n,className:d.inputChildButton,children:e.children}):""},C=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:d.inputChildIcon,children:e.children}):""},A="label_khEV",B=e=>{let{children:n}=e;return(0,s.jsx)("div",{className:A,children:n})},I={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var L=t(403);const w=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,s.jsx)("span",{className:(0,L.A)({"mtui-codeblock":!0,[I.code]:!0,[I["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},P="stack_wl5C",T="column_AVcH",E="stretch_Koba",S="flex__9bI",H="js_end_cSG9",O="js_center_boE0",F="js_start_k4mk",R="js_spaceBetween_ny_D",W="js_spaceAround_eiM1",M="al_start_euFe",Z="al_end_O7Cd",z="al_center_YCq4",G="al_stretch_QfIY";var q=t(464);const $=e=>{const n="mtstack__"+(0,q.A)(),{flex:t,justify:o,align:l,margin:c,padding:a}=e,r={gap:isNaN(e.gap)?e.gap:e.gap+"px",flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style};"string"==typeof c&&(r.margin=isNaN(c)?c:c+"px"),"string"==typeof a&&(r.padding=isNaN(a)?a:a+"px"),console.log(t);const d={...e};return delete d.children,delete d.wrap,delete d.column,delete d.justify,delete d.flex,delete d.margin,delete d.padding,e.children?(0,s.jsxs)("div",{...d,className:(0,i.A)(["mtui-stack",n,P,{[T]:e.column,[S]:"boolean"==typeof t&&t,[H]:"end"===o,[O]:"center"===o,[F]:"start"===o,[R]:"spaceBetween"===o,[W]:"spaceAround"===o,[M]:"start"===l,[Z]:"end"===l,[z]:"center"===l,[G]:"stretch"===l,[E]:e.stretch,[d.className]:d.className}]),style:r,children:[e.children,(0,s.jsx)("style",{children:`.${n} > * {\n          flex: ${"string"==typeof t?t:"0 1 auto"}\n      }`})]}):""},Q="accordion_JXnx",D="button_KX5s",K="contentitem_Ypfv",V="visible_Rwwh",Y="hidden_GCVw",J="icon_Tmaf",X="children_fxDu",U="button_opened_GUD0",ee=e=>{const n={...e.style},t={...e,style:n};return delete t.setIcon,(0,s.jsx)("section",{...t,className:(0,i.A)([Q,"mtui-accordion",t.className,{[Q]:Q}]),children:l.Children.map(t.children,(n=>l.cloneElement(n,{setIcon:e.setIcon,...n.props})))})};ee.defaultProps={children:null,setIcon:null,className:"",style:{}};const ne=ee,te=e=>{const[n,t]=(0,l.useState)(e.isOpened||!1),o=()=>{t(!n)};return(0,s.jsx)("article",{children:l.Children.map(e.children,((t,s)=>{const c={...t.props};return"AccordionButton"===t.type.displayName?(c.onClick=o,l.cloneElement(t,{...c,isOpened:n,setIcon:e.setIcon})):(c["data-visible"]=n,c.className=`mtui-accordion__item ${K} ${n?V:Y}`,l.cloneElement(t,c))}))})},oe=e=>(0,s.jsxs)("button",{onClick:e.onClick,className:(0,L.A)({[D]:!0,[U]:e.isOpened}),children:[(0,s.jsx)("span",{className:X,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,s.jsx)("i",{className:J,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});oe.displayName="AccordionButton";const le=oe,se="breadcrumbs_EqqV",ce="item_U93n",ae="divider_e5y_",re="divider_child_jasW",ie="link_Mfuz",de="last_visible_EQmH",ue="last_inactive_e_0M",pe={divider:"/",showLastDivider:!0,lastActive:!1,children:null,className:""},he=function(e){void 0===e&&(e=pe);const n={...e};return Object.keys(pe).forEach((e=>delete n[e])),(0,s.jsx)("nav",{...n,className:(0,i.A)(["mtui-breadcrumbs",se,e.className,{[de]:e.showLastDivider,[ue]:!e.lastActive}]),children:l.Children.map(e.children,(n=>l.cloneElement(n,{divider:e?.divider,...n.props})))})};he.defaultProps=pe;const me=he,ge=e=>e.divider?(0,s.jsx)("div",{className:`${ae} ${re}`,children:e.divider}):(0,s.jsx)("div",{className:ae,children:"/"}),_e=e=>(0,s.jsxs)("div",{className:ce,children:[(0,s.jsx)("span",{className:ie,children:e.children}),(0,s.jsx)(ge,{divider:e.divider})]}),xe={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function ve(e){let{name:n,value:t,onChange:o,disabled:c,checked:a,toggle:r,linear:d,...u}=e;const[p,h]=l.useState(!1),[m,g]=l.useState(t||a),_={type:"checkbox",className:xe.input,checked:m,onChange:e=>{if(!c){let n=e.target.checked;g(n),"function"==typeof o&&o(e)}},name:n};return l.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,s.jsxs)("label",{className:(0,i.A)(["mtui-checkbox",xe.parent,{[xe.disabled]:c,[xe.toggle]:r,[xe.linear]:d}]),style:u.style,children:[(0,s.jsx)("input",{..._}),(0,s.jsx)("span",{className:xe.checkbox,children:m&&!r?(0,s.jsx)("svg",{className:xe.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,s.jsx)("polyline",{children:(0,s.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,s.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,s.jsx)("span",{className:xe.label,children:u.children}):""]})}ve.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const be={parent:"parent_ZnxF",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},fe={name:"",onChange:()=>{},value:!1,disabled:!1},je=function(e){void 0===e&&(e=fe);const{name:n,value:t,disabled:o,styleParent:l}=e;return console.log(l),(0,s.jsxs)("label",{className:(0,i.A)(["mtui-radioitem",be.parent,{[be.disabled]:o}]),style:{"--bg":l["--bg"],...e.childProps.style},children:[(0,s.jsx)("input",{type:"radio",checked:t===e.childProps.value,className:be.input,onChange:o?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,s.jsx)("span",{className:be.checkbox}),e.children?(0,s.jsx)("span",{className:be.label,children:e.children}):""]})},Ne={value:"",onChange:()=>{}},ye=function(e){void 0===e&&(e=Ne);const{onChange:n,value:t}=e,o=t||e.defaultValue||"",[c,a]=l.useState(o),r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,s.jsx)("div",{className:(0,L.A)({"mtui-radiogroup":!0,[be.radio]:!0,[be["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:l.Children.map(e.children,(e=>l.cloneElement(e,{childProps:e.props,value:n?o:c,onChange:n??a,styleParent:r})))})},ke={value:!1,disabled:!1},Ce=function(e){void 0===e&&(e=ke);const{value:n,disabled:t,defaultValue:o}=e;if(e.children)return(0,s.jsx)("option",{value:n,disabled:t,checked:n===o,children:e.children})},Ae="parent_AxwE",Be="fitContent_kJ4E",Ie="select_WxMX",Le="icon_l9F_",we={value:"",onChange:()=>{}},Pe=function(e){void 0===e&&(e=we);const{onChange:n,value:t,fitContent:o}=e,c=t||e.defaultValue||"",[a,r]=l.useState(c),d={...e.style};if(e.children)return(0,s.jsxs)("label",{className:(0,i.A)(["mtui-selectgroup",[Ae],{[e.className]:!!e.className,[Be]:!!e.fitContent}]),style:d,children:[(0,s.jsx)("select",{className:Ie,onChange:e=>{n?n(e.target.value):r(e.target.value)},value:n?c:a,children:e.children}),(0,s.jsx)("i",{className:Le,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},Te="key_uKP6",Ee=e=>e.children?(0,s.jsx)("div",{className:Te,children:e.children}):"",Se="parent_VdR2",He="act_TEYv",Oe="isColor_OwMK",Fe="size_s_KznB",Re="size_m_HLKY",We="size_l_NawM",Me="size_xl_rRp9",Ze="text_l7Qz",ze=e=>{const{size:n,colorScheme:t,hidden:o}=e,l={"--hue":u.Z[t]>-1?u.Z[t]:e.hue?e.hue:220,...e.style};return o?"":(0,s.jsxs)("div",{className:(0,i.A)(["mtui-spinner",Se,{[Re]:"m"===n||"M"===n,[Fe]:"s"===n||"S"===n,[We]:"l"===n||"L"===n,[Me]:"xl"===n||"XL"===n,[Oe]:!!e.colorScheme,[e.className]:!!e.className}]),style:{...l,...e.styles},children:[(0,s.jsx)("span",{className:He}),(0,s.jsx)("span",{className:Ze,children:"Loading..."})]})},Ge="parent_qZrO",qe="vis_kwFj",$e="text_Z_cA",Qe=e=>{const{value:n,stripe:t,colorScheme:o,height:l,isIndeterminate:c,className:a}=e,r={"--hue":u.Z[o]>-1?u.Z[o]:e.hue?e.hue:220,...e.style};return l&&(r.height=-1!==l.indexOf("px")?l:l+"px"),(0,s.jsxs)("div",{className:(0,L.A)({"mtui-progressbar":!0,[Ge]:!0,[e.className]:!!e.className}),style:r,children:[(0,s.jsx)("span",{className:qe,style:{width:(n||0)+"%"}}),(0,s.jsxs)("span",{className:$e,children:["Progress: ",n||0,"%"]})]})},De=e=>(0,s.jsx)(ve,{...e,toggle:!0})},403:(e,n,t)=>{function o(e){return Object.keys(e).filter((n=>e[n])).join(" ")}t.d(n,{A:()=>o})},2626:(e,n,t)=>{t.d(n,{A:()=>o});const o={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);