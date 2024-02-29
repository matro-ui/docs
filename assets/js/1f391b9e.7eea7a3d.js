"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[6061,8401],{7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(6540);var l=t(4164),o=t(1003),c=t(7559),s=t(2415),a=t(1823),r=t(7763),i=t(996);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:h,unlisted:p},assets:x}=n,{keywords:g,wrapperClassName:_,hide_table_of_contents:v}=h,b=x.image??h.image;return(0,u.jsx)(o.e3,{className:(0,l.A)(_??c.G.wrapper.mdxPages,c.G.page.mdxPage),children:(0,u.jsxs)(s.A,{children:[(0,u.jsx)(o.be,{title:t,description:m,keywords:g,image:b}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,l.A)("row",d.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,l.A)("col",!v&&"col--8"),children:[p&&(0,u.jsx)(i.A,{}),(0,u.jsx)("article",{children:(0,u.jsx)(a.A,{children:(0,u.jsx)(n,{})})})]}),!v&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(r.A,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},7763:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var l=t(4164),o=t(5195);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(4848);const a="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function i(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,l.A)(c.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(o.A,{...t,linkClassName:a,linkActiveClassName:r})})}},5195:(e,n,t)=>{t.d(n,{A:()=>x});var l=t(6540),o=t(6342);function c(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const l=t.slice(2,e.level);e.parentIndex=Math.max(...l),t[e.level]=n}));const l=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):l.push(o)})),l}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:l});return function(e){return e.level>=t&&e.level<=l}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const l=e.find((e=>a(e).top>=t));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function i(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=i();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const l=[];for(let o=n;o<=t;o+=1)l.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:c,maxHeadingLevel:s}),i=r(a,{anchorTopOffset:t.current}),d=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:l,isChild:o}=e;return n.length?(0,m.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:l})]},e.id)))}):null}const p=l.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:u,...h}=e;const x=(0,o.p)(),g=i??x.tableOfContents.minHeadingLevel,_=u??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,l.useMemo)((()=>s({toc:c(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:g,maxHeadingLevel:_});return d((0,l.useMemo)((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:g,maxHeadingLevel:_}}),[a,r,g,_])),(0,m.jsx)(p,{toc:v,className:t,linkClassName:a,...h})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var l=t(4164),o=t(1312),c=t(5260),s=t(4848);function a(){return(0,s.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,s.jsx)(c.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){let{className:n}=e;return(0,s.jsx)(u.A,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,l.A)(n,d.G.common.unlistedBanner),children:(0,s.jsx)(r,{})})}function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{}),(0,s.jsx)(m,{...e})]})}},356:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var l=t(4164),o=t(6058),c=t(7559),s=t(4291);const a={codeBlockContainer:"codeBlockContainer_APcc"};var r=t(4848);function i(e){let{as:n,...t}=e;const i=(0,o.A)(),d=(0,s.M$)(i);return(0,r.jsx)(n,{...t,style:d,className:(0,l.A)(t.className,a.codeBlockContainer,c.G.common.codeBlock)})}},5822:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var l=t(4164),o=t(356),c=t(2626),s=t(4848);function a(e){let{children:n,className:t}=e;return(0,s.jsx)(o.A,{as:"pre",tabIndex:0,className:(0,l.A)(c.A.codeBlockStandalone,"thin-scrollbar",t),children:(0,s.jsx)("code",{className:c.A.codeBlockLines,children:n})})}},8336:(e,n,t)=>{t.d(n,{A:()=>b});t(6540);var l=t(4164),o=t(6342),c=t(6058),s=t(4291),a=t(6591),r=t(1765);const i={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var d=t(4848);function u(e){let{line:n,classNames:t,showLineNumbers:o,getLineProps:c,getTokenProps:s}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const a=c({line:n,className:(0,l.A)(t,o&&i.codeLine)}),r=n.map(((e,n)=>(0,d.jsx)("span",{...s({token:e,key:n})},n)));return(0,d.jsxs)("span",{...a,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:i.codeLineNumber}),(0,d.jsx)("span",{className:i.codeLineContent,children:r})]}):r,(0,d.jsx)("br",{})]})}var m=t(2092),h=t(1312),p=t(5048);const x={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function g(e){let{className:n,onClick:t,isEnabled:o}=e;const c=(0,h.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,l.A)("clean-btn",n,o&&x.wordWrapButtonEnabled),"aria-label":c,title:c,children:(0,d.jsx)(p.A,{className:x.wordWrapButtonIcon,"aria-hidden":"true"})})}var _=t(356),v=t(2626);function b(e){let{children:n,className:t="",metastring:i,title:h,showLineNumbers:p,language:x}=e;const{prism:{defaultLanguage:b,magicComments:f}}=(0,o.p)(),j=function(e){return e?.toLowerCase()}(x??(0,s.Op)(t)??b),N=(0,c.A)(),C=(0,a.f)(),k=(0,s.wt)(i)||h,{lineClassNames:y,code:A}=(0,s.Li)(n,{metastring:i,language:j,magicComments:f}),B=p??(0,s._u)(i);return(0,d.jsxs)(_.A,{as:"div",className:(0,l.A)(t,j&&!t.includes(`language-${j}`)&&`language-${j}`),children:[k&&(0,d.jsx)("div",{className:v.A.codeBlockTitle,children:k}),(0,d.jsxs)("div",{className:v.A.codeBlockContent,children:[(0,d.jsx)(r.f4,{theme:N,code:A,language:j??"text",children:e=>{let{className:n,style:t,tokens:o,getLineProps:c,getTokenProps:s}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:C.codeBlockRef,className:(0,l.A)(n,v.A.codeBlock,"thin-scrollbar"),style:t,children:(0,d.jsx)("code",{className:(0,l.A)(v.A.codeBlockLines,B&&v.A.codeBlockLinesWithNumbering),children:o.map(((e,n)=>(0,d.jsx)(u,{line:e,getLineProps:c,getTokenProps:s,classNames:y[n],showLineNumbers:B},n)))})})}}),(0,d.jsxs)("div",{className:v.A.buttonGroup,children:[(C.isEnabled||C.isCodeScrollable)&&(0,d.jsx)(g,{className:v.A.codeButton,onClick:()=>C.toggle(),isEnabled:C.isEnabled}),(0,d.jsx)(m.A,{className:v.A.codeButton,code:A})]})]})]})}},2092:(e,n,t)=>{t.d(n,{A:()=>u});var l=t(6540),o=t(4164),c=t(6861),s=t(1312),a=t(1473),r=t(4115);const i={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR",copyButtonText:"copyButtonText_xXQF"};var d=t(4848);function u(e){let{code:n,className:t}=e;const[u,m]=(0,l.useState)(!1),h=(0,l.useRef)(void 0),p=(0,l.useCallback)((()=>{(0,c.A)(n),m(!0),h.current=window.setTimeout((()=>{m(!1)}),1e3)}),[n]);return(0,l.useEffect)((()=>()=>window.clearTimeout(h.current)),[]),(0,d.jsxs)("button",{type:"button","aria-label":u?(0,s.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.A)("clean-btn",t,i.copyButton,u&&i.copyButtonCopied),onClick:p,children:[(0,d.jsx)("span",{className:i.copyButtonText,children:u?(0,s.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"})}),(0,d.jsxs)("span",{className:i.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(a.A,{className:i.copyButtonIcon}),(0,d.jsx)(r.A,{className:i.copyButtonSuccessIcon})]})]})}},224:(e,n,t)=>{t.d(n,{A:()=>E});var l=t(6540),o=t(4164),c=t(2303),s=t(6850),a=t(1312),r=t(4586),i=t(8478),d=t(2181),u=t(6058),m=t(7489);const h={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"},p={codeParent:"codeParent_GSj2",codeButton:"codeButton_bR3a"};var x=t(2092),g=t(4848);function _(e){let{children:n}=e;return(0,g.jsx)("div",{className:(0,o.A)(h.playgroundHeader),children:n})}function v(){return(0,g.jsx)("div",{children:"Loading..."})}function b(){return(0,g.jsx)(i.A,{fallback:(0,g.jsx)(v,{}),children:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.A,{fallback:e=>(0,g.jsx)(d.MN,{...e}),children:(0,g.jsx)(s.pA,{})}),(0,g.jsx)(s.p1,{})]})})}function f(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:h.playgroundPreview,children:(0,g.jsx)(b,{})})})}function j(){const e=(0,c.A)();return(0,g.jsx)(s.w,{className:h.playgroundEditor},String(e))}function N(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(_,{children:(0,g.jsx)(a.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,g.jsx)(j,{})]})}const C=e=>`${e};`;function k(e){let{children:n,transformCode:t,...l}=e;const{siteConfig:{themeConfig:o}}=(0,r.A)(),{liveCodeBlock:{playgroundPosition:c}}=o,a=(0,u.A)(),i=l.metastring?.includes("noInline")??!1;return(0,g.jsx)("div",{className:h.playgroundContainer,children:(0,g.jsx)(s.Q,{code:n?.replace(/\n$/,""),noInline:i,transformCode:t??C,theme:a,...l,children:"top"===c?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{}),(0,g.jsxs)("div",{className:p.codeParent,children:[(0,g.jsx)(x.A,{className:p.codeButton,code:n?.replace(/\n$/,"")||""}),(0,g.jsx)(N,{})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(N,{}),(0,g.jsx)(f,{})]})})})}var y=t(960),A=t(9644);const B=(L=A.A,function(e){return e.live?(0,g.jsx)(k,{scope:y.A,...e,className:(0,o.A)(e.className,p.playground)}):(0,g.jsx)(L,{...e})});var L,w=t(3230),I=t(676),P=t(1351);function E(e){return function(e){return void 0!==e.children&&l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,g.jsx)(w.A,{...e}):(0,g.jsx)(B,{...e,scope:{...I,IoBluetoothOutline:P.xo_,IoLayersOutline:P.llF,IoSearch:P.zfp,IoMailUnreadOutline:P.Jex}})}},7617:(e,n,t)=>{t.d(n,{Z:()=>l});const l={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,t)=>{t.d(n,{A:()=>h});var l=t(6540),o=t(403),c=t(7617);const s="mtui_button_xmEf",a="content_JZQn",r="default_QvER",i="mtui_button__icon_kEuk",d="glossy_1pgh";var u=t(4848);const m={hue:0,isIcon:!1,glossy:!1,leftIcon:l.Component,rightIcon:l.Component,as:(0,u.jsx)("button",{})},h=function(e){void 0===e&&(e=m);const n={"--hue":c.Z[e.color]?c.Z[e.color]:e.hue?e.hue:100,...e.style},t={...e};Object.keys(m).forEach((e=>delete t[e]));const h=(0,o.A)({"mtui-button":!0,[s]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[i]:e.isIcon,[e.className]:!!e.className}),p=(0,u.jsxs)(l.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:a,children:e?.children}),e.rightIcon??""]});return l.cloneElement(e.as,{...t,children:p,style:n,className:h})}},7874:(e,n,t)=>{t.d(n,{A:()=>l.A});var l=t(9427)},676:(e,n,t)=>{t.r(n),t.d(n,{Accordion:()=>q,AccordionButton:()=>D,AccordionItem:()=>M,Breadcrumbs:()=>ee,BreadcrumbsItem:()=>te,Button:()=>l.A,ButtonIcon:()=>a,Checkbox:()=>oe,Code:()=>w,InputChild:()=>N,InputChildButton:()=>C,InputChildIcon:()=>k,InputChildPrefix:()=>f,InputChildSelect:()=>j,InputDecrementStepper:()=>x,InputIncrementStepper:()=>g,InputNumber:()=>m,InputNumberField:()=>h,InputNumberStepper:()=>p,InputText:()=>v,InputTextField:()=>b,Kley:()=>be,LabelText:()=>A,Progress:()=>ye,Radio:()=>ae,RadioGroup:()=>ie,Select:()=>ue,SelectGroup:()=>_e,Spinner:()=>je,Stack:()=>T,Toggle:()=>Ae});var l=t(7874),o=t(6540),c=t(9427),s=t(4848);const a=e=>(0,s.jsx)(c.A,{...e,isIcon:!0});var r=t(6268);const i={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var d=t(7617);const u=e=>{const{name:n,disabled:t,value:l,onChange:c,placeholder:a}=e,u={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,s.jsx)("div",{className:(0,r.A)("mtui-inputnum",i.mtui_inputtype,{[i["mtui_color_"+e.color]]:e.color,[i.disabled]:t,[e.className]:!!e.className}),style:u,children:o.Children.map(e.children,(e=>o.cloneElement(e,{childProps:e.props,value:l,onChange:c,placeholder:a,name:n})))})};u.defaultProps={name:"",disabled:!1,placeholder:"0"};const m=u,h=e=>{let{onChange:n,value:t,placeholder:l,name:o,disabled:c}=e;const a={placeholder:l,name:o,disabled:c};return"function"==typeof n&&(a.onChange=n),(t||""===t)&&(a.value=t),(0,s.jsx)("input",{type:"number",...a})},p=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,s.jsx)("div",{className:i.stepper,children:o.Children.map(e.children,(e=>o.cloneElement(e,{onDecrement:t,onIncrement:n})))})},x=e=>{let{onDecrement:n}=e;return(0,s.jsx)("button",{onClick:n,children:(0,s.jsx)("span",{children:"\u25bc"})})},g=e=>(0,s.jsx)("button",{onClick:e.onIncrement,children:(0,s.jsx)("span",{children:"\u25b2"})}),_=e=>{const{onChange:n,value:t,placeholder:l,name:c,hue:a,disabled:u}=e,m={"--hue":d.Z[e.color]?d.Z[e.color]:a||160,...e.style};return(0,s.jsx)("div",{className:(0,r.A)("mtui-inputtext",i.mtui_inputtype,{[i.disabled]:u,[i["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:m,children:o.Children.map(e.children,(e=>o.cloneElement(e,{childProps:e.props,onChange:n,value:t,placeholder:l,disabled:u,name:c})))})};_.defaultProps={name:"",disabled:!1,placeholder:""};const v=_,b=e=>{let{value:n,placeholder:t,name:l,onChange:o,disabled:c}=e;const a={type:"text",placeholder:t,name:l,disabled:c};return"function"==typeof o&&(a.onChange=o),(n||""===n)&&(a.value=n),(0,s.jsx)("input",{...a})},f=e=>{let{childProps:n}=e;return n.value?(0,s.jsx)("div",{className:i.inputPrefix,children:n.value}):""},j=e=>e.children?(0,s.jsx)("select",{className:i.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",N=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:i.inputChild,children:o.Children.map(e.children,(e=>{const t={...n,...e.props};return e.props.onClick&&(t.onClick=n=>e.props.onClick(n,t)),o.cloneElement(e,t)}))}):""},C=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,s.jsx)("button",{...n,className:i.inputChildButton,children:e.children}):""},k=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:i.inputChildIcon,children:e.children}):""},y="label_khEV",A=e=>{let{children:n}=e;return(0,s.jsx)("div",{className:y,children:n})},B={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var L=t(403);const w=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,s.jsx)("span",{className:(0,L.A)({"mtui-codeblock":!0,[B.code]:!0,[B["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},I="stack_VFNJ",P="column_UECP",E="stretch_wfbw",T=e=>{const n={gap:e.gap,flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style},t={...e};return delete t.children,delete t.wrap,delete t.column,e.children?(0,s.jsx)("div",{...t,className:(0,L.A)({stack:!0,[I]:!0,[P]:e.column,[E]:e.stretch,[t.className]:t.className}),style:n,children:e.children}):""},H="accordion_JXnx",S="button_KX5s",O="contentitem_Ypfv",W="visible_Rwwh",F="hidden_GCVw",R="icon_Tmaf",Z="children_fxDu",G="button_opened_GUD0",q=e=>{const n={...e.style},t={...e,style:n};return(0,s.jsx)("section",{...t,className:(0,L.A)({"mtui-accordion":!0,[H]:H,...t.className?.map((e=>({[e]:e})))}),children:t.children})},M=e=>{const[n,t]=(0,o.useState)(e.isOpened||!1),l=()=>{t(!n)};return(0,s.jsx)("article",{children:o.Children.map(e.children,((e,t)=>{const c={...e.props};return"AccordionButton"===e.type.displayName?(c.onClick=l,o.cloneElement(e,{...c,isOpened:n})):(c["data-visible"]=n,c.className=`mtui-accordion__item ${O} ${n?W:F}`,o.cloneElement(e,c))}))})},z=e=>(0,s.jsxs)("button",{onClick:e.onClick,className:(0,L.A)({[S]:!0,[G]:e.isOpened}),children:[(0,s.jsx)("span",{className:Z,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,s.jsx)("i",{className:R,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});z.displayName="AccordionButton";const D=z,$="breadcrumbs_EqqV",Q="item_U93n",V="divider_e5y_",J="divider_child_jasW",U="link_Mfuz",Y="last_visible_EQmH",K="last_inactive_e_0M",X={divider:"/",showLastDivider:!0,lastActive:!1,children:null},ee=function(e){void 0===e&&(e=X);const n={...e.style},t={...e};return delete t.style,delete t.divider,delete t.showLastDivider,delete t.className,delete t.lastActive,(0,s.jsx)("nav",{...t,className:(0,L.A)({"mtui-breadcrumbs":!0,[$]:!0,[Y]:e.showLastDivider,[K]:!e.lastActive,[e.className]:!!e.className}),style:n,children:o.Children.map(e.children,(n=>o.cloneElement(n,{divider:e.divider,...n.props})))})},ne=e=>e.divider?(0,s.jsx)("div",{className:`${V} ${J}`,children:e.divider}):(0,s.jsx)("div",{className:V,children:"/"}),te=e=>(0,s.jsxs)("div",{className:Q,children:[(0,s.jsx)("span",{className:U,children:e.children}),(0,s.jsx)(ne,{divider:e.divider})]}),le={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function oe(e){let{name:n,value:t,onChange:l,disabled:c,checked:a,toggle:i,linear:d,...u}=e;const[m,h]=o.useState(!1),[p,x]=o.useState(t||a),g={type:"checkbox",className:le.input,checked:p,onChange:e=>{if(!c){let n=e.target.checked;x(n),"function"==typeof l&&l(e)}},name:n};return o.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,s.jsxs)("label",{className:(0,r.A)(["mtui-checkbox",le.parent,{[le.disabled]:c,[le.toggle]:i,[le.linear]:d}]),style:u.style,children:[(0,s.jsx)("input",{...g}),(0,s.jsx)("span",{className:le.checkbox,children:p&&!i?(0,s.jsx)("svg",{className:le.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:m?(0,s.jsx)("polyline",{children:(0,s.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,s.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,s.jsx)("span",{className:le.label,children:u.children}):""]})}oe.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const ce={parent:"parent_ZnxF",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},se={name:"",onChange:()=>{},value:!1,disabled:!1},ae=function(e){void 0===e&&(e=se);const{name:n,value:t,disabled:l,styleParent:o}=e;return console.log(o),(0,s.jsxs)("label",{className:(0,r.A)(["mtui-radioitem",ce.parent,{[ce.disabled]:l}]),style:{"--bg":o["--bg"],...e.childProps.style},children:[(0,s.jsx)("input",{type:"radio",checked:t===e.childProps.value,className:ce.input,onChange:l?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,s.jsx)("span",{className:ce.checkbox}),e.children?(0,s.jsx)("span",{className:ce.label,children:e.children}):""]})},re={value:"",onChange:()=>{}},ie=function(e){void 0===e&&(e=re);const{onChange:n,value:t}=e,l=t||e.defaultValue||"",[c,a]=o.useState(l),r={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,s.jsx)("div",{className:(0,L.A)({"mtui-radiogroup":!0,[ce.radio]:!0,[ce["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:o.Children.map(e.children,(e=>o.cloneElement(e,{childProps:e.props,value:n?l:c,onChange:n??a,styleParent:r})))})},de={value:!1,disabled:!1},ue=function(e){void 0===e&&(e=de);const{value:n,disabled:t,defaultValue:l}=e;if(e.children)return(0,s.jsx)("option",{value:n,disabled:t,checked:n===l,children:e.children})},me="parent_AxwE",he="fitContent_kJ4E",pe="select_WxMX",xe="icon_l9F_",ge={value:"",onChange:()=>{}},_e=function(e){void 0===e&&(e=ge);const{onChange:n,value:t,fitContent:l}=e,c=t||e.defaultValue||"",[a,i]=o.useState(c),d={...e.style};if(e.children)return(0,s.jsxs)("label",{className:(0,r.A)(["mtui-selectgroup",[me],{[e.className]:!!e.className,[he]:!!e.fitContent}]),style:d,children:[(0,s.jsx)("select",{className:pe,onChange:e=>{n?n(e.target.value):i(e.target.value)},value:n?c:a,children:e.children}),(0,s.jsx)("i",{className:xe,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},ve="key_uKP6",be=e=>e.children?(0,s.jsx)("div",{className:ve,children:e.children}):"",fe={act:"act_TEYv",kf_load:"kf_load_XZCU",text:"text_l7Qz"},je=e=>(0,s.jsxs)("div",{className:(0,L.A)({"mtui-spinner":!0,[fe.parent]:!0,[e.className]:!!e.className}),style:e.styles,children:[(0,s.jsx)("span",{className:fe.act}),(0,s.jsx)("span",{className:fe.text,children:"Loading..."})]}),Ne="parent_qZrO",Ce="vis_kwFj",ke="text_Z_cA",ye=e=>{const{value:n,stripe:t,colorScheme:l,height:o,isIndeterminate:c,className:a}=e,r={"--hue":d.Z[l]?d.Z[l]:e.hue?e.hue:160,height:-1!==o.indexOf("px")?o:o+"px",...e.style};return(0,s.jsxs)("div",{className:(0,L.A)({"mtui-progressbar":!0,[Ne]:!0,[e.className]:!!e.className}),style:r,children:[(0,s.jsx)("span",{className:Ce,style:{width:(n||0)+"%"}}),(0,s.jsxs)("span",{className:ke,children:["Progress: ",n||0,"%"]})]})},Ae=e=>(0,s.jsx)(oe,{...e,toggle:!0})},403:(e,n,t)=>{function l(e){return Object.keys(e).filter((n=>e[n])).join(" ")}t.d(n,{A:()=>l})},2626:(e,n,t)=>{t.d(n,{A:()=>l});const l={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);