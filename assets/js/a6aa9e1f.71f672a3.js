"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[7643,8401],{2383:(e,n,o)=>{o.d(n,{A:()=>s});o(6540);const l="marker_ejtM";var t=o(4848);const s=e=>{let{children:n}=e;return(0,t.jsx)("span",{className:l,children:n})}},7785:(e,n,o)=>{o.r(n),o.d(n,{default:()=>m});o(6540);var l=o(4164),t=o(4586),s=o(1003),c=o(7559),a=o(6535),r=o(7713),i=o(1463),d=o(3892),u=o(4848);function p(e){const{metadata:n}=e,{siteConfig:{title:o}}=(0,t.A)(),{blogDescription:l,blogTitle:c,permalink:a}=n,r="/"===a?o:c;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.be,{title:r,description:l}),(0,u.jsx)(i.A,{tag:"blog_posts_list"})]})}function h(e){const{metadata:n,items:o,sidebar:l}=e;return(0,u.jsxs)(a.A,{sidebar:l,children:[(0,u.jsx)(d.A,{items:o}),(0,u.jsx)(r.A,{metadata:n})]})}function m(e){return(0,u.jsxs)(s.e3,{className:(0,l.A)(c.G.wrapper.blogPages,c.G.page.blogListPage),children:[(0,u.jsx)(p,{...e}),(0,u.jsx)(h,{...e})]})}},7713:(e,n,o)=>{o.d(n,{A:()=>c});o(6540);var l=o(1312),t=o(9022),s=o(4848);function c(e){const{metadata:n}=e,{previousPage:o,nextPage:c}=n;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[o&&(0,s.jsx)(t.A,{permalink:o,title:(0,s.jsx)(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),c&&(0,s.jsx)(t.A,{permalink:c,title:(0,s.jsx)(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,n,o)=>{o.d(n,{A:()=>c});o(6540);var l=o(7131),t=o(8258),s=o(4848);function c(e){let{items:n,component:o=t.A}=e;return(0,s.jsx)(s.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,s.jsx)(l.i,{content:n,children:(0,s.jsx)(o,{children:(0,s.jsx)(n,{})})},n.metadata.permalink)}))})}},356:(e,n,o)=>{o.d(n,{A:()=>i});o(6540);var l=o(4164),t=o(6058),s=o(7559),c=o(4291);const a={codeBlockContainer:"codeBlockContainer_APcc"};var r=o(4848);function i(e){let{as:n,...o}=e;const i=(0,t.A)(),d=(0,c.M$)(i);return(0,r.jsx)(n,{...o,style:d,className:(0,l.A)(o.className,a.codeBlockContainer,s.G.common.codeBlock)})}},5822:(e,n,o)=>{o.d(n,{A:()=>a});o(6540);var l=o(4164),t=o(356),s=o(2626),c=o(4848);function a(e){let{children:n,className:o}=e;return(0,c.jsx)(t.A,{as:"pre",tabIndex:0,className:(0,l.A)(s.A.codeBlockStandalone,"thin-scrollbar",o),children:(0,c.jsx)("code",{className:s.A.codeBlockLines,children:n})})}},8336:(e,n,o)=>{o.d(n,{A:()=>j});o(6540);var l=o(4164),t=o(6342),s=o(6058),c=o(4291),a=o(6591),r=o(1765);const i={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var d=o(4848);function u(e){let{line:n,classNames:o,showLineNumbers:t,getLineProps:s,getTokenProps:c}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const a=s({line:n,className:(0,l.A)(o,t&&i.codeLine)}),r=n.map(((e,n)=>(0,d.jsx)("span",{...c({token:e,key:n})},n)));return(0,d.jsxs)("span",{...a,children:[t?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:i.codeLineNumber}),(0,d.jsx)("span",{className:i.codeLineContent,children:r})]}):r,(0,d.jsx)("br",{})]})}var p=o(2092),h=o(1312),m=o(5048);const _={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function g(e){let{className:n,onClick:o,isEnabled:t}=e;const s=(0,h.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:o,className:(0,l.A)("clean-btn",n,t&&_.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(m.A,{className:_.wordWrapButtonIcon,"aria-hidden":"true"})})}var x=o(356),b=o(2626);function j(e){let{children:n,className:o="",metastring:i,title:h,showLineNumbers:m,language:_}=e;const{prism:{defaultLanguage:j,magicComments:v}}=(0,t.p)(),N=function(e){return e?.toLowerCase()}(_??(0,c.Op)(o)??j),k=(0,s.A)(),y=(0,a.f)(),f=(0,c.wt)(i)||h,{lineClassNames:A,code:C}=(0,c.Li)(n,{metastring:i,language:N,magicComments:v}),B=m??(0,c._u)(i);return(0,d.jsxs)(x.A,{as:"div",className:(0,l.A)(o,N&&!o.includes(`language-${N}`)&&`language-${N}`),children:[f&&(0,d.jsx)("div",{className:b.A.codeBlockTitle,children:f}),(0,d.jsxs)("div",{className:b.A.codeBlockContent,children:[(0,d.jsx)(r.f4,{theme:k,code:C,language:N??"text",children:e=>{let{className:n,style:o,tokens:t,getLineProps:s,getTokenProps:c}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,l.A)(n,b.A.codeBlock,"thin-scrollbar"),style:o,children:(0,d.jsx)("code",{className:(0,l.A)(b.A.codeBlockLines,B&&b.A.codeBlockLinesWithNumbering),children:t.map(((e,n)=>(0,d.jsx)(u,{line:e,getLineProps:s,getTokenProps:c,classNames:A[n],showLineNumbers:B},n)))})})}}),(0,d.jsxs)("div",{className:b.A.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,d.jsx)(g,{className:b.A.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),(0,d.jsx)(p.A,{className:b.A.codeButton,code:C})]})]})]})}},2092:(e,n,o)=>{o.d(n,{A:()=>u});var l=o(6540),t=o(4164),s=o(6861),c=o(1312),a=o(1473),r=o(4115);const i={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR",copyButtonText:"copyButtonText_xXQF"};var d=o(4848);function u(e){let{code:n,className:o}=e;const[u,p]=(0,l.useState)(!1),h=(0,l.useRef)(void 0),m=(0,l.useCallback)((()=>{(0,s.A)(n),p(!0),h.current=window.setTimeout((()=>{p(!1)}),1e3)}),[n]);return(0,l.useEffect)((()=>()=>window.clearTimeout(h.current)),[]),(0,d.jsxs)("button",{type:"button","aria-label":u?(0,c.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,c.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,c.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,t.A)("clean-btn",o,i.copyButton,u&&i.copyButtonCopied),onClick:m,children:[(0,d.jsx)("span",{className:i.copyButtonText,children:u?(0,c.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,c.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"})}),(0,d.jsxs)("span",{className:i.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(a.A,{className:i.copyButtonIcon}),(0,d.jsx)(r.A,{className:i.copyButtonSuccessIcon})]})]})}},224:(e,n,o)=>{o.d(n,{A:()=>F});var l=o(6540),t=o(4164),s=o(2303),c=o(6850),a=o(1312),r=o(4586),i=o(8478),d=o(2181),u=o(6058),p=o(7489);const h={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"},m={codeParent:"codeParent_GSj2",codeButton:"codeButton_bR3a"};var _=o(2092),g=o(4848);function x(e){let{children:n}=e;return(0,g.jsx)("div",{className:(0,t.A)(h.playgroundHeader),children:n})}function b(){return(0,g.jsx)("div",{children:"Loading..."})}function j(){return(0,g.jsx)(i.A,{fallback:(0,g.jsx)(b,{}),children:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.A,{fallback:e=>(0,g.jsx)(d.MN,{...e}),children:(0,g.jsx)(c.pA,{})}),(0,g.jsx)(c.p1,{})]})})}function v(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:h.playgroundPreview,children:(0,g.jsx)(j,{})})})}function N(){const e=(0,s.A)();return(0,g.jsx)(c.w,{className:h.playgroundEditor},String(e))}function k(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{children:(0,g.jsx)(a.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,g.jsx)(N,{})]})}const y=e=>`${e};`;function f(e){let{children:n,transformCode:o,...l}=e;const{siteConfig:{themeConfig:t}}=(0,r.A)(),{liveCodeBlock:{playgroundPosition:s}}=t,a=(0,u.A)(),i=l.metastring?.includes("noInline")??!1;return(0,g.jsx)("div",{className:h.playgroundContainer,children:(0,g.jsx)(c.Q,{code:n?.replace(/\n$/,""),noInline:i,transformCode:o??y,theme:a,...l,children:"top"===s?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{}),(0,g.jsxs)("div",{className:m.codeParent,children:[(0,g.jsx)(_.A,{className:m.codeButton,code:n?.replace(/\n$/,"")||""}),(0,g.jsx)(k,{})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{}),(0,g.jsx)(v,{})]})})})}var A=o(960),C=o(9644);const B=(I=C.A,function(e){return e.live?(0,g.jsx)(f,{scope:A.A,...e,className:(0,t.A)(e.className,m.playground)}):(0,g.jsx)(I,{...e})});var I,w=o(3230),P=o(3730),L=o(1351),T=o(6512),E=o(8774),S=o(2383),O=o(2302);function F(e){return function(e){return void 0!==e.children&&l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,g.jsx)(w.A,{...e}):(0,g.jsx)(B,{...e,scope:{...P,IoBluetoothOutline:L.xo_,IoLayersOutline:L.llF,IoSearch:L.zfp,IoMailUnreadOutline:L.Jex,IoIosArrowForward:T.OQo,Link:E.A,I:S.A,uuid:O.A}})}},7617:(e,n,o)=>{o.d(n,{Z:()=>l});const l={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,o)=>{o.d(n,{A:()=>m});var l=o(6540),t=o(403),s=o(7617);const c="mtui_button_xmEf",a="content_JZQn",r="default_QvER",i="mtui_button__icon_kEuk",d="glossy_1pgh";var u=o(4848);const p={hue:0,isIcon:!1,glossy:!1,leftIcon:null,rightIcon:null,as:(0,u.jsx)("button",{})},h=e=>{const n={"--hue":s.Z[e.color]?s.Z[e.color]:e.hue?e.hue:100,...e.style},o={...e};Object.keys(p).forEach((e=>delete o[e]));const h=(0,t.A)({"mtui-button":!0,[c]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[i]:e.isIcon,[e.className]:!!e.className}),m=(0,u.jsxs)(l.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:a,children:e?.children}),e.rightIcon??""]});return l.cloneElement(e.as,{...o,children:m,style:n,className:h})};h.defaultProps=p;const m=h},7874:(e,n,o)=>{o.d(n,{A:()=>l.A});var l=o(9427)},3730:(e,n,o)=>{o.r(n),o.d(n,{Accordion:()=>ne,AccordionButton:()=>te,AccordionItem:()=>oe,Breadcrumbs:()=>me,BreadcrumbsItem:()=>ge,Button:()=>l.A,ButtonIcon:()=>r,Checkbox:()=>be,Code:()=>P,InputChild:()=>y,InputChildButton:()=>f,InputChildIcon:()=>A,InputChildPrefix:()=>N,InputChildSelect:()=>k,InputDecrementStepper:()=>g,InputIncrementStepper:()=>x,InputNumber:()=>h,InputNumberField:()=>m,InputNumberStepper:()=>_,InputText:()=>j,InputTextField:()=>v,Kley:()=>Ee,LabelText:()=>B,LinkButton:()=>c,Progress:()=>qe,Radio:()=>Ne,RadioGroup:()=>ye,Select:()=>Ae,SelectGroup:()=>Le,Spinner:()=>De,Stack:()=>$,Toggle:()=>Ke});var l=o(7874),t=o(6540),s=o(4848);const c=e=>(0,s.jsx)(l.A,{...e});var a=o(9427);const r=e=>(0,s.jsx)(a.A,{...e,isIcon:!0});var i=o(6268);const d={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var u=o(7617);const p=e=>{const{name:n,disabled:o,value:l,onChange:c,placeholder:a}=e,r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,s.jsx)("div",{className:(0,i.A)("mtui-inputnum",d.mtui_inputtype,{[d["mtui_color_"+e.color]]:e.color,[d.disabled]:o,[e.className]:!!e.className}),style:r,children:t.Children.map(e.children,(e=>t.cloneElement(e,{childProps:e.props,value:l,onChange:c,placeholder:a,name:n})))})};p.defaultProps={name:"",disabled:!1,placeholder:"0"};const h=p,m=e=>{let{onChange:n,value:o,placeholder:l,name:t,disabled:c}=e;const a={placeholder:l,name:t,disabled:c};return"function"==typeof n&&(a.onChange=n),(o||""===o)&&(a.value=o),(0,s.jsx)("input",{type:"number",...a})},_=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},o=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,s.jsx)("div",{className:d.stepper,children:t.Children.map(e.children,(e=>t.cloneElement(e,{onDecrement:o,onIncrement:n})))})},g=e=>{let{onDecrement:n}=e;return(0,s.jsx)("button",{onClick:n,children:(0,s.jsx)("span",{children:"\u25bc"})})},x=e=>(0,s.jsx)("button",{onClick:e.onIncrement,children:(0,s.jsx)("span",{children:"\u25b2"})}),b=e=>{const{onChange:n,value:o,placeholder:l,name:c,hue:a,disabled:r}=e,p={"--hue":u.Z[e.color]?u.Z[e.color]:a||160,...e.style};return(0,s.jsx)("div",{className:(0,i.A)("mtui-inputtext",d.mtui_inputtype,{[d.disabled]:r,[d["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:t.Children.map(e.children,(e=>t.cloneElement(e,{childProps:e.props,onChange:n,value:o,placeholder:l,disabled:r,name:c})))})};b.defaultProps={name:"",disabled:!1,placeholder:""};const j=b,v=e=>{let{value:n,placeholder:o,name:l,onChange:t,disabled:c}=e;const a={type:"text",placeholder:o,name:l,disabled:c};return"function"==typeof t&&(a.onChange=t),(n||""===n)&&(a.value=n),(0,s.jsx)("input",{...a})},N=e=>{let{childProps:n}=e;return n.value?(0,s.jsx)("div",{className:d.inputPrefix,children:n.value}):""},k=e=>e.children?(0,s.jsx)("select",{className:d.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",y=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:d.inputChild,children:t.Children.map(e.children,(e=>{const o={...n,...e.props};return e.props.onClick&&(o.onClick=n=>e.props.onClick(n,o)),t.cloneElement(e,o)}))}):""},f=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,s.jsx)("button",{...n,className:d.inputChildButton,children:e.children}):""},A=e=>{const n={...e};return delete n.children,e.children?(0,s.jsx)("div",{...n,className:d.inputChildIcon,children:e.children}):""},C="label_khEV",B=e=>{let{children:n}=e;return(0,s.jsx)("div",{className:C,children:n})},I={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var w=o(403);const P=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,s.jsx)("span",{className:(0,w.A)({"mtui-codeblock":!0,[I.code]:!0,[I["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},L="stack_wl5C",T="column_AVcH",E="stretch_Koba",S="flex__9bI",O="js_end_cSG9",F="js_center_boE0",W="js_start_k4mk",Z="js_spaceBetween_ny_D",R="js_spaceAround_eiM1",z="al_start_euFe",G="al_end_O7Cd",D="al_center_YCq4",Q="al_stretch_QfIY";var M=o(464);const $=e=>{const n="mtstack__"+(0,M.A)(),{flex:o,justify:l,align:t,margin:c,padding:a}=e,r={gap:isNaN(e.gap)?e.gap:e.gap+"px",flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style};"string"==typeof c&&(r.margin=isNaN(c)?c:c+"px"),"string"==typeof a&&(r.padding=isNaN(a)?a:a+"px"),console.log(o);const d={...e};return delete d.children,delete d.wrap,delete d.column,delete d.justify,delete d.flex,delete d.margin,delete d.padding,e.children?(0,s.jsxs)("div",{...d,className:(0,i.A)(["mtui-stack",n,L,{[T]:e.column,[S]:"boolean"==typeof o&&o,[O]:"end"===l,[F]:"center"===l,[W]:"start"===l,[Z]:"spaceBetween"===l,[R]:"spaceAround"===l,[z]:"start"===t,[G]:"end"===t,[D]:"center"===t,[Q]:"stretch"===t,[E]:e.stretch,[d.className]:d.className}]),style:r,children:[e.children,(0,s.jsx)("style",{children:`.${n} > * {\n          flex: ${"string"==typeof o?o:"0 1 auto"}\n      }`})]}):""},q="accordion_JXnx",K="button_KX5s",V="contentitem_Ypfv",Y="visible_Rwwh",H="hidden_GCVw",J="icon_Tmaf",X="children_fxDu",U="button_opened_GUD0",ee=e=>{const n={...e.style},o={...e,style:n};return delete o.setIcon,(0,s.jsx)("section",{...o,className:(0,i.A)([q,"mtui-accordion",o.className,{[q]:q}]),children:t.Children.map(o.children,(n=>t.cloneElement(n,{setIcon:e.setIcon,...n.props})))})};ee.defaultProps={children:null,setIcon:null,className:"",style:{}};const ne=ee,oe=e=>{const[n,o]=(0,t.useState)(e.isOpened||!1),l=()=>{o(!n)};return(0,s.jsx)("article",{children:t.Children.map(e.children,((o,s)=>{const c={...o.props};return"AccordionButton"===o.type.displayName?(c.onClick=l,t.cloneElement(o,{...c,isOpened:n,setIcon:e.setIcon})):(c["data-visible"]=n,c.className=`mtui-accordion__item ${V} ${n?Y:H}`,t.cloneElement(o,c))}))})},le=e=>(0,s.jsxs)("button",{onClick:e.onClick,className:(0,w.A)({[K]:!0,[U]:e.isOpened}),children:[(0,s.jsx)("span",{className:X,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,s.jsx)("i",{className:J,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});le.displayName="AccordionButton";const te=le,se="breadcrumbs_EqqV",ce="item_U93n",ae="divider_e5y_",re="divider_child_jasW",ie="link_Mfuz",de="last_visible_EQmH",ue="last_inactive_e_0M",pe={divider:"/",showLastDivider:!0,lastActive:!1,children:null,className:""},he=function(e){void 0===e&&(e=pe);const n={...e};return Object.keys(pe).forEach((e=>delete n[e])),(0,s.jsx)("nav",{...n,className:(0,i.A)(["mtui-breadcrumbs",se,e.className,{[de]:e.showLastDivider,[ue]:!e.lastActive}]),children:t.Children.map(e.children,(n=>t.cloneElement(n,{divider:e?.divider,...n.props})))})};he.defaultProps=pe;const me=he,_e=e=>e.divider?(0,s.jsx)("div",{className:`${ae} ${re}`,children:e.divider}):(0,s.jsx)("div",{className:ae,children:"/"}),ge=e=>(0,s.jsxs)("div",{className:ce,children:[(0,s.jsx)("span",{className:ie,children:e.children}),(0,s.jsx)(_e,{divider:e.divider})]}),xe={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function be(e){let{name:n,value:o,onChange:l,disabled:c,checked:a,toggle:r,linear:d,...u}=e;const[p,h]=t.useState(!1),[m,_]=t.useState(o||a),g={type:"checkbox",className:xe.input,checked:m,onChange:e=>{if(!c){let n=e.target.checked;_(n),"function"==typeof l&&l(e)}},name:n};return t.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,s.jsxs)("label",{className:(0,i.A)(["mtui-checkbox",xe.parent,{[xe.disabled]:c,[xe.toggle]:r,[xe.linear]:d}]),style:u.style,children:[(0,s.jsx)("input",{...g}),(0,s.jsx)("span",{className:xe.checkbox,children:m&&!r?(0,s.jsx)("svg",{className:xe.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,s.jsx)("polyline",{children:(0,s.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,s.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,s.jsx)("span",{className:xe.label,children:u.children}):""]})}be.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const je={parent:"parent_ZnxF",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},ve={name:"",onChange:()=>{},value:!1,disabled:!1},Ne=function(e){void 0===e&&(e=ve);const{name:n,value:o,disabled:l,styleParent:t}=e;return console.log(t),(0,s.jsxs)("label",{className:(0,i.A)(["mtui-radioitem",je.parent,{[je.disabled]:l}]),style:{"--bg":t["--bg"],...e.childProps.style},children:[(0,s.jsx)("input",{type:"radio",checked:o===e.childProps.value,className:je.input,onChange:l?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,s.jsx)("span",{className:je.checkbox}),e.children?(0,s.jsx)("span",{className:je.label,children:e.children}):""]})},ke={value:"",onChange:()=>{}},ye=function(e){void 0===e&&(e=ke);const{onChange:n,value:o}=e,l=o||e.defaultValue||"",[c,a]=t.useState(l),r={"--hue":u.Z[e.color]?u.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,s.jsx)("div",{className:(0,w.A)({"mtui-radiogroup":!0,[je.radio]:!0,[je["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:t.Children.map(e.children,(e=>t.cloneElement(e,{childProps:e.props,value:n?l:c,onChange:n??a,styleParent:r})))})},fe={value:!1,disabled:!1},Ae=function(e){void 0===e&&(e=fe);const{value:n,disabled:o,defaultValue:l}=e;if(e.children)return(0,s.jsx)("option",{value:n,disabled:o,checked:n===l,children:e.children})},Ce="parent_AxwE",Be="fitContent_kJ4E",Ie="select_WxMX",we="icon_l9F_",Pe={value:"",onChange:()=>{}},Le=function(e){void 0===e&&(e=Pe);const{onChange:n,value:o,fitContent:l}=e,c=o||e.defaultValue||"",[a,r]=t.useState(c),d={...e.style};if(e.children)return(0,s.jsxs)("label",{className:(0,i.A)(["mtui-selectgroup",[Ce],{[e.className]:!!e.className,[Be]:!!e.fitContent}]),style:d,children:[(0,s.jsx)("select",{className:Ie,onChange:e=>{n?n(e.target.value):r(e.target.value)},value:n?c:a,children:e.children}),(0,s.jsx)("i",{className:we,children:(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},Te="key_uKP6",Ee=e=>e.children?(0,s.jsx)("div",{className:Te,children:e.children}):"",Se="parent_VdR2",Oe="act_TEYv",Fe="isColor_OwMK",We="size_s_KznB",Ze="size_m_HLKY",Re="size_l_NawM",ze="size_xl_rRp9",Ge="text_l7Qz",De=e=>{const{size:n,colorScheme:o,hidden:l}=e,t={"--hue":u.Z[o]>-1?u.Z[o]:e.hue?e.hue:220,...e.style};return l?"":(0,s.jsxs)("div",{className:(0,i.A)(["mtui-spinner",Se,{[Ze]:"m"===n||"M"===n,[We]:"s"===n||"S"===n,[Re]:"l"===n||"L"===n,[ze]:"xl"===n||"XL"===n,[Fe]:!!e.colorScheme,[e.className]:!!e.className}]),style:{...t,...e.styles},children:[(0,s.jsx)("span",{className:Oe}),(0,s.jsx)("span",{className:Ge,children:"Loading..."})]})},Qe="parent_qZrO",Me="vis_kwFj",$e="text_Z_cA",qe=e=>{const{value:n,stripe:o,colorScheme:l,height:t,isIndeterminate:c,className:a}=e,r={"--hue":u.Z[l]>-1?u.Z[l]:e.hue?e.hue:220,...e.style};return t&&(r.height=-1!==t.indexOf("px")?t:t+"px"),(0,s.jsxs)("div",{className:(0,w.A)({"mtui-progressbar":!0,[Qe]:!0,[e.className]:!!e.className}),style:r,children:[(0,s.jsx)("span",{className:Me,style:{width:(n||0)+"%"}}),(0,s.jsxs)("span",{className:$e,children:["Progress: ",n||0,"%"]})]})},Ke=e=>(0,s.jsx)(be,{...e,toggle:!0})},403:(e,n,o)=>{function l(e){return Object.keys(e).filter((n=>e[n])).join(" ")}o.d(n,{A:()=>l})},2626:(e,n,o)=>{o.d(n,{A:()=>l});const l={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);