(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[9551],{5835:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>A,default:()=>Z,frontMatter:()=>w,metadata:()=>S,toc:()=>E});var l=n(4848),s=n(8453),o=n(6540);const i="searchinput_jE7d",c="category_items_oI5b",r="item_svBn",a="imgartv_oMe5",d="title_DXOr",u="category_title_zM2i",p="category_group_ppjk";var h=n(1351),m=n(1929);const _=()=>{const[e,t]=(0,o.useState)(""),n=e=>t(e);return(0,l.jsxs)(m.InputText,{className:i,value:e,onChange:n,hue:"100",placeholder:"Search...",name:"input-name-prop",children:[(0,l.jsx)(m.InputTextField,{}),(0,l.jsx)(m.InputChildButton,{children:(0,l.jsx)(h.zfp,{}),onClick:()=>{alert("Query: "+e),n("")}})]})};var x=n(5556),v=n.n(x);class g extends o.PureComponent{static propTypes={disabled:v().bool};static defaultProps={disabled:!0};state={disabled:this.props.disabled};_hideImage=()=>this.setState({disabled:!0});_displayImage=()=>this.setState({disabled:!1});render=()=>{const{disabled:e}=this.state;return!e&&(0,l.jsx)("img",{onError:this._hideImage,onLoad:this._displayImage,...this.props})}}const b=g;var j=n(8774),N=n(6347);const f={img:"",title:"def-title"},y=function(e){void 0===e&&(e=f);const{img:t,title:n,url:s}={...f,...e},o=(0,N.W6)();return(0,l.jsxs)("article",{className:r,onClick:()=>{o.push(s||"")},children:[(0,l.jsx)("div",{className:a,children:(0,l.jsx)(b,{src:t,alt:n})}),(0,l.jsx)(j.A,{href:s,children:(0,l.jsx)("p",{className:d,children:(0,l.jsx)("span",{children:n})})})]})};var k=n(6579),C=n.n(k);const I=()=>{const e=C();return console.log(Object.keys(e)),(0,l.jsxs)("div",{children:[(0,l.jsx)(_,{}),Object.keys(e).map((e=>{const t=C()[e];return t.length?(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h2",{className:u,children:e.replace("-"," ")}),(0,l.jsx)("div",{className:c,children:t?.map((e=>(0,l.jsx)(y,{...e})))})]}):""}))]})},w={id:"view",title:"Components",sidebar_label:"Components"},A="Components",S={id:"compontents/view",title:"Components",description:"Matro UI provides you with the tools you need to create fast, beautiful and functional user interfaces.",source:"@site/docs/compontents/view.md",sourceDirName:"compontents",slug:"/compontents/view",permalink:"/docs/compontents/view",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"view",title:"Components",sidebar_label:"Components"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"Inputs"}},P={},E=[];function B(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"components",children:"Components"}),"\n",(0,l.jsxs)(t.p,{children:["Matro UI provides you with the tools you need to create fast, beautiful and functional user interfaces.",(0,l.jsx)("br",{}),"\nHere is an overview of the component categories:"]}),"\n",(0,l.jsx)(I,{})]})}function Z(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(B,{...e})}):B(e)}},6579:e=>{e.exports={inputs:[{id:1,title:"Checkbox",url:"/docs/compontents/inputs/checkbox",img:null},{id:2,title:"Input Number",url:"/docs/compontents/inputs/input-number",img:null},{id:3,title:"Input Text",url:"/docs/compontents/inputs/input-text",img:null},{id:5,title:"Radio",url:"/docs/compontents/inputs/radio",img:null},{id:6,title:"Select",url:"/docs/compontents/inputs/select",img:null},{id:7,title:"Slider",url:"/docs/compontents/inputs/slider",img:null},{id:8,title:"Textarea",url:"/docs/compontents/inputs/textarea",img:null}],layout:[{id:1,title:"Stack",url:"/docs/compontents/layout/stack",img:null}],media:[{id:1,title:"Hide",url:"/docs/compontents/media/hide",img:null},{id:1,title:"Minmax",url:"/docs/compontents/media/minmax",img:null},{id:1,title:"Show",url:"/docs/compontents/media/show",img:null}],navigation:[{id:1,title:"Breadcrumbs",url:"/docs/compontents/navigation/breadcrumbs",img:null},{id:1,title:"Link",url:"/docs/compontents/navigation/link",img:null}],progress:[{id:1,title:"Progress",url:"/docs/compontents/progress/",img:null},{id:1,title:"Spinner",url:"/docs/compontents/progress/spinner",img:null}],other:[{id:1,title:"Switch",url:"/docs/compontents/other/switch",img:null},{id:1,title:"Button",url:"/docs/compontents/other/button",img:null},{id:1,title:"Accordion",url:"/docs/compontents/other/accordion",img:null},{id:1,title:"Key",url:"/docs/compontents/other/kley",img:null}]}},7617:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var l=n(6540),s=n(403),o=n(7617);const i="mtui_button_xmEf",c="content_JZQn",r="default_QvER",a="mtui_button__icon_kEuk",d="glossy_1pgh";var u=n(4848);const p={hue:0,isIcon:!1,glossy:!1,leftIcon:l.Component,rightIcon:l.Component,as:(0,u.jsx)("button",{})},h=function(e){void 0===e&&(e=p);const t={"--hue":o.Z[e.color]?o.Z[e.color]:e.hue?e.hue:100,...e.style},n={...e};Object.keys(p).forEach((e=>delete n[e]));const h=(0,s.A)({"mtui-button":!0,[i]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[a]:e.isIcon,[e.className]:!!e.className}),m=(0,u.jsxs)(l.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:c,children:e?.children}),e.rightIcon??""]});return l.cloneElement(e.as,{...n,children:m,style:t,className:h})}},7874:(e,t,n)=>{"use strict";n.d(t,{A:()=>l.A});var l=n(9427)},1929:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Accordion:()=>V,AccordionButton:()=>Q,AccordionItem:()=>W,Breadcrumbs:()=>ee,BreadcrumbsItem:()=>ne,Button:()=>l.A,ButtonIcon:()=>c,Checkbox:()=>se,Code:()=>S,InputChild:()=>f,InputChildButton:()=>y,InputChildIcon:()=>k,InputChildPrefix:()=>j,InputChildSelect:()=>N,InputDecrementStepper:()=>_,InputIncrementStepper:()=>x,InputNumber:()=>p,InputNumberField:()=>h,InputNumberStepper:()=>m,InputText:()=>g,InputTextField:()=>b,Kley:()=>ge,LabelText:()=>I,Progress:()=>ke,Radio:()=>ce,RadioGroup:()=>ae,Select:()=>ue,SelectGroup:()=>xe,Spinner:()=>je,Stack:()=>Z});var l=n(7874),s=n(6540),o=n(9427),i=n(4848);const c=e=>(0,i.jsx)(o.A,{...e,isIcon:!0});var r=n(6268);const a={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var d=n(7617);const u=e=>{const{name:t,disabled:n,value:l,onChange:o,placeholder:c}=e,u={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,i.jsx)("div",{className:(0,r.A)("mtui-inputnum",a.mtui_inputtype,{[a["mtui_color_"+e.color]]:e.color,[a.disabled]:n,[e.className]:!!e.className}),style:u,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:l,onChange:o,placeholder:c,name:t})))})};u.defaultProps={name:"",disabled:!1,placeholder:"0"};const p=u,h=e=>{let{onChange:t,value:n,placeholder:l,name:s}=e;const o={placeholder:l,name:s};return"function"==typeof t&&(o.onChange=t),(n||""===n)&&(o.value=n),(0,i.jsx)("input",{type:"number",...o})},m=e=>{const t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,i.jsx)("div",{className:a.stepper,children:s.Children.map(e.children,(e=>s.cloneElement(e,{onDecrement:n,onIncrement:t})))})},_=e=>{let{onDecrement:t}=e;return(0,i.jsx)("button",{onClick:t,children:(0,i.jsx)("span",{children:"\u25bc"})})},x=e=>(0,i.jsx)("button",{onClick:e.onIncrement,children:(0,i.jsx)("span",{children:"\u25b2"})}),v=e=>{const{onChange:t,value:n,placeholder:l,name:o,hue:c,disabled:u}=e,p={"--hue":d.Z[e.color]?d.Z[e.color]:c||160,...e.style};return(0,i.jsx)("div",{className:(0,r.A)("mtui-inputtext",a.mtui_inputtype,{[a.disabled]:u,[a["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,onChange:t,value:n,placeholder:l,name:o})))})};v.defaultProps={name:"",disabled:!1,placeholder:""};const g=v,b=e=>{let{value:t,placeholder:n,name:l,onChange:s}=e;const o={type:"text",placeholder:n,name:l};return"function"==typeof s&&(o.onChange=s),(t||""===t)&&(o.value=t),(0,i.jsx)("input",{...o})},j=e=>{let{childProps:t}=e;return t.value?(0,i.jsx)("div",{className:a.inputPrefix,children:t.value}):""},N=e=>e.children?(0,i.jsx)("select",{className:a.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",f=e=>{const t={...e};return delete t.children,e.children?(0,i.jsx)("div",{...t,className:a.inputChild,children:s.Children.map(e.children,(e=>{const n={...t,...e.props};return e.props.onClick&&(n.onClick=t=>e.props.onClick(t,n)),s.cloneElement(e,n)}))}):""},y=e=>{const t={...e};return delete t.children,delete t.childProps,e.children?(0,i.jsx)("button",{...t,className:a.inputChildButton,children:e.children}):""},k=e=>{const t={...e};return delete t.children,e.children?(0,i.jsx)("div",{...t,className:a.inputChildIcon,children:e.children}):""},C="label_khEV",I=e=>{let{children:t}=e;return(0,i.jsx)("div",{className:C,children:t})},w={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var A=n(403);const S=e=>{const t={...e};return t.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(t.color)||(t.color="gray"),e.children?(0,i.jsx)("span",{className:(0,A.A)({"mtui-codeblock":!0,[w.code]:!0,[w["code__color_"+t.color]]:t.color,[e.className]:!!e.className}),children:e.children}):""},P="stack_VFNJ",E="column_UECP",B="stretch_wfbw",Z=e=>{const t={gap:e.gap,flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style},n={...e};return delete n.children,delete n.wrap,delete n.column,e.children?(0,i.jsx)("div",{...n,className:(0,A.A)({stack:!0,[P]:!0,[E]:e.column,[B]:e.stretch,[n.className]:n.className}),style:t,children:e.children}):""},O="accordion_JXnx",T="button_KX5s",L="contentitem_Ypfv",D="visible_Rwwh",R="hidden_GCVw",M="icon_Tmaf",z="children_fxDu",F="button_opened_GUD0",V=e=>{const t={...e.style},n={...e,style:t};return(0,i.jsx)("section",{...n,className:(0,A.A)({"mtui-accordion":!0,[O]:O,...n.className?.map((e=>({[e]:e})))}),children:n.children})},W=e=>{const[t,n]=(0,s.useState)(e.isOpened||!1),l=()=>{n(!t)};return(0,i.jsx)("article",{children:s.Children.map(e.children,((e,n)=>{const o={...e.props};return"AccordionButton"===e.type.displayName?(o.onClick=l,s.cloneElement(e,{...o,isOpened:t})):(o["data-visible"]=t,o.className=`mtui-accordion__item ${L} ${t?D:R}`,s.cloneElement(e,o))}))})},K=e=>(0,i.jsxs)("button",{onClick:e.onClick,className:(0,A.A)({[T]:!0,[F]:e.isOpened}),children:[(0,i.jsx)("span",{className:z,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,i.jsx)("i",{className:M,children:(0,i.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});K.displayName="AccordionButton";const Q=K,X="breadcrumbs_EqqV",q="item_U93n",G="divider_e5y_",H="divider_child_jasW",J="link_Mfuz",U="last_visible_EQmH",Y="last_inactive_e_0M",$={divider:"/",showLastDivider:!0,lastActive:!1,children:null},ee=function(e){void 0===e&&(e=$);const t={...e.style},n={...e};return delete n.style,delete n.divider,delete n.showLastDivider,delete n.className,delete n.lastActive,(0,i.jsx)("nav",{...n,className:(0,A.A)({"mtui-breadcrumbs":!0,[X]:!0,[U]:e.showLastDivider,[Y]:!e.lastActive,[e.className]:!!e.className}),style:t,children:s.Children.map(e.children,(t=>s.cloneElement(t,{divider:e.divider,...t.props})))})},te=e=>e.divider?(0,i.jsx)("div",{className:`${G} ${H}`,children:e.divider}):(0,i.jsx)("div",{className:G,children:"/"}),ne=e=>(0,i.jsxs)("div",{className:q,children:[(0,i.jsx)("span",{className:J,children:e.children}),(0,i.jsx)(te,{divider:e.divider})]}),le={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function se(e){let{name:t,value:n,onChange:l,disabled:o,checked:c,toggle:a,linear:d,...u}=e;const[p,h]=s.useState(!1),[m,_]=s.useState(n||c),x={type:"checkbox",className:le.input,checked:m,onChange:e=>{if(!o){let t=e.target.checked;_(t),"function"==typeof l&&l(e)}},name:t};return s.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,i.jsxs)("label",{className:(0,r.A)(["mtui-checkbox",le.parent,{[le.disabled]:o,[le.toggle]:a,[le.linear]:d}]),style:u.style,children:[(0,i.jsx)("input",{...x}),(0,i.jsx)("span",{className:le.checkbox,children:m&&!a?(0,i.jsx)("svg",{className:le.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,i.jsx)("polyline",{children:(0,i.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,i.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,i.jsx)("span",{className:le.label,children:u.children}):""]})}se.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const oe={parent:"parent_ZnxF",radio:"radio_pI4X",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},ie={name:"",onChange:()=>{},value:!1,disabled:!1},ce=function(e){void 0===e&&(e=ie);const{name:t,value:n,disabled:l}=e;return(0,i.jsxs)("label",{className:(0,A.A)({"mtui-radioitem":!0,[oe.parent]:!0,[oe.disabled]:l}),children:[(0,i.jsx)("input",{type:"radio",checked:n===e.childProps.value,className:oe.input,onChange:l?()=>{}:t=>e.onChange(e.childProps.value),name:t}),(0,i.jsx)("span",{className:oe.checkbox}),e.children?(0,i.jsx)("span",{className:oe.label,children:e.children}):""]})},re={value:"",onChange:()=>{}},ae=function(e){void 0===e&&(e=re);const{onChange:t,value:n}=e,l=n||e.defaultValue||"",[o,c]=s.useState(l),r={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,i.jsx)("div",{className:(0,A.A)({"mtui-radiogroup":!0,[oe.radio]:!0,[oe["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:t?l:o,onChange:t??c})))})},de={value:!1,disabled:!1},ue=function(e){void 0===e&&(e=de);const{value:t,disabled:n,defaultValue:l}=e;if(e.children)return(0,i.jsx)("option",{value:t,disabled:n,checked:t===l,children:e.children})},pe="parent_AxwE",he="select_WxMX",me="icon_l9F_",_e={value:"",onChange:()=>{}},xe=function(e){void 0===e&&(e=_e);const{onChange:t,value:n}=e,l=n||e.defaultValue||"",[o,c]=s.useState(l),r={...e.style};if(e.children)return(0,i.jsxs)("label",{className:(0,A.A)({"mtui-selectgroup":!0,[pe]:!0,[e.className]:!!e.className}),style:r,children:[(0,i.jsx)("select",{className:he,onChange:e=>{t?t(e.target.value):c(e.target.value)},value:t?l:o,children:e.children}),(0,i.jsx)("i",{className:me,children:(0,i.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},ve="key_uKP6",ge=e=>e.children?(0,i.jsx)("div",{className:ve,children:e.children}):"",be={act:"act_TEYv",kf_load:"kf_load_XZCU",text:"text_l7Qz"},je=e=>(0,i.jsxs)("div",{className:(0,A.A)({"mtui-spinner":!0,[be.parent]:!0,[e.className]:!!e.className}),style:e.styles,children:[(0,i.jsx)("span",{className:be.act}),(0,i.jsx)("span",{className:be.text,children:"Loading..."})]}),Ne="parent_qZrO",fe="vis_kwFj",ye="text_Z_cA",ke=e=>{const{value:t,stripe:n,colorScheme:l,height:s,isIndeterminate:o,className:c}=e,r={"--hue":d.Z[l]?d.Z[l]:e.hue?e.hue:160,height:-1!==s.indexOf("px")?s:s+"px",...e.style};return(0,i.jsxs)("div",{className:(0,A.A)({"mtui-progressbar":!0,[Ne]:!0,[e.className]:!!e.className}),style:r,children:[(0,i.jsx)("span",{className:fe,style:{width:(t||0)+"%"}}),(0,i.jsxs)("span",{className:ye,children:["Progress: ",t||0,"%"]})]})}},403:(e,t,n)=>{"use strict";function l(e){return Object.keys(e).filter((t=>e[t])).join(" ")}n.d(t,{A:()=>l})}}]);