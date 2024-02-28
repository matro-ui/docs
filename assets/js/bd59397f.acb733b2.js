"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[1800],{546:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>_,contentTitle:()=>m,default:()=>v,frontMatter:()=>x,metadata:()=>b,toc:()=>k});var c=l(4848),s=l(8453),t=l(1470),o=l(9365),r=l(2136);l(6540);const a="sources_cKg5";var i=l(7874),d=l(8027);const h=e=>{let{git:n,npmjs:l,name:s}=e;return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)(i.A,{leftIcon:(0,c.jsx)(d.hL4,{}),as:(0,c.jsx)("a",{href:n,target:"_blank"}),children:"Source"}),(0,c.jsxs)(i.A,{leftIcon:(0,c.jsx)(d.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,c.jsx)("a",{href:l,target:"_blank"}),children:["@matro-ui/",s]})]})},u="marker_ejtM",p=e=>{let{children:n}=e;return(0,c.jsx)("span",{className:u,children:n})};l(1929);const x={sidebar_position:1,title:"<Checkbox/>"},m="Checkbox",b={id:"compontents/inputs/checkbox",title:"<Checkbox/>",description:"The `` component allows to select or deselect options in a form. It provides a customizable checkbox input with various options.",source:"@site/docs/compontents/inputs/checkbox.mdx",sourceDirName:"compontents/inputs",slug:"/compontents/inputs/checkbox",permalink:"/docs/compontents/inputs/checkbox",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<Checkbox/>"},sidebar:"tutorialSidebar",previous:{title:"Inputs"},next:{title:"<InputNumber/>",permalink:"/docs/compontents/inputs/input-number"}},_={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Disabled Checkbox",id:"disabled-checkbox",level:2},{value:"Checkbox sizes",id:"checkbox-sizes",level:2},{value:"Checkbox with custom color",id:"checkbox-with-custom-color",level:2},{value:"Props",id:"props",level:2},{value:"Example Usage",id:"example-usage",level:2}];function g(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"<Checkbox/>"})," component allows to select or deselect options in a form. It provides a customizable checkbox input with various options."]}),"\n",(0,c.jsx)(h,{git:"https://github.com/matro-ui/matro-ui/tree/main/dist/inputs/Checkbox",npmjs:"https://www.npmjs.com/package/matro-ui",name:"checkbox"}),"\n",(0,c.jsx)("div",{className:r.A.tabs,children:(0,c.jsxs)(t.A,{className:r.A.parent,children:[(0,c.jsxs)(o.A,{value:"usage",label:"Usage",attributes:{className:[r.A.item,r.A.usage]},children:[(0,c.jsx)(n.h2,{id:"import",children:"Import"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:'import { Checkbox } from "matro-ui";\n'})}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Checkbox"}),": Checkbox element"]}),"\n"]}),(0,c.jsx)(n.h2,{id:"usage",children:"Usage"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:"  <Checkbox>Checkbox</Checkbox>\n"})}),(0,c.jsx)(n.h2,{id:"disabled-checkbox",children:"Disabled Checkbox"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:"<Stack style={{gap: 20}}>\n <Checkbox disabled>\n   Checkbox\n </Checkbox>\n <Checkbox disabled checked>\n   Checkbox\n </Checkbox>\n </Stack>\n"})}),(0,c.jsx)(n.h2,{id:"checkbox-sizes",children:"Checkbox sizes"}),(0,c.jsxs)(n.p,{children:["Pass the ",(0,c.jsx)(p,{children:"font-size"})," to change the size of the Checkbox. Values can be either ",(0,c.jsx)(p,{children:"px"}),", ",(0,c.jsx)(p,{children:"em"}),", ",(0,c.jsx)(p,{children:"rem"})," or ",(0,c.jsx)(p,{children:"%"}),"."]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<Stack style={{gap: 20, alignItems: "flex-end"}}>\n  <Checkbox style={{fontSize: "14px"}} checked>\n   Checkbox\n </Checkbox>\n <Checkbox style={{fontSize: "16px"}} checked>\n   Checkbox\n </Checkbox>\n <Checkbox style={{fontSize: "1.2rem"}} checked>\n   Checkbox\n </Checkbox>\n </Stack>\n'})}),(0,c.jsx)(n.h2,{id:"checkbox-with-custom-color",children:"Checkbox with custom color"}),(0,c.jsxs)(n.p,{children:["You can override the color scheme of the ",(0,c.jsx)(p,{children:"Checkbox"})," to any color by providing the css variable ",(0,c.jsx)(p,{children:"--bg"}),"."]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<Stack style={{gap: 20, alignItems: "flex-end"}}>\n <Checkbox style={{"--bg": "red"}} checked>\n   Checkbox\n </Checkbox>\n <Checkbox style={{"--bg": "#48b048"}} checked>\n   Checkbox\n </Checkbox>\n <Checkbox style={{"--bg": "#4848d7"}} checked>\n   Checkbox\n </Checkbox>\n </Stack>\n'})})]}),(0,c.jsxs)(o.A,{value:"props",label:"Props",attributes:{className:[r.A.item,r.A.props]},children:[(0,c.jsx)(n.h2,{id:"props",children:"Props"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"value"}),": (boolean) The value of the checkbox."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"onChange"}),": (function) Callback function triggered when the checkbox value changes."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"}),": (string) The name attribute of the checkbox."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"checked"}),": (boolean) Indicates whether the checkbox is checked."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"toggle"}),": (boolean) Indicates whether the checkbox is in toggle mode."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"linear"}),": (boolean) Indicates whether the checkbox has a linear style."]}),"\n"]})]}),(0,c.jsxs)(o.A,{value:"extra",label:"Extra Features",attributes:{className:[r.A.item,r.A.extra]},children:[(0,c.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport {Checkbox} from 'matro-iu';\n\nfunction App() {\n  const handleCheckboxChange = (isChecked) => {\n    console.log('Checkbox checked state:', isChecked);\n  };\n\n  return (\n    <div>\n      <Checkbox\n        value={true}\n        onChange={handleCheckboxChange}\n        name=\"exampleCheckbox\"\n        checked={false}\n        toggle={false}\n        linear={true}\n      >\n        Example Checkbox\n      </Checkbox>\n    </div>\n  );\n}\n"})})]})]})})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},7617:(e,n,l)=>{l.d(n,{Z:()=>c});const c={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,l)=>{l.d(n,{A:()=>p});var c=l(6540),s=l(403),t=l(7617);const o="mtui_button_xmEf",r="content_JZQn",a="default_QvER",i="mtui_button__icon_kEuk",d="glossy_1pgh";var h=l(4848);const u={hue:0,isIcon:!1,glossy:!1,leftIcon:c.Component,rightIcon:c.Component,as:(0,h.jsx)("button",{})},p=function(e){void 0===e&&(e=u);const n={"--hue":t.Z[e.color]?t.Z[e.color]:e.hue?e.hue:100,...e.style},l={...e};Object.keys(u).forEach((e=>delete l[e]));const p=(0,s.A)({"mtui-button":!0,[o]:!0,[a]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[i]:e.isIcon,[e.className]:!!e.className}),x=(0,h.jsxs)(c.Fragment,{children:[e.leftIcon??"",(0,h.jsx)("span",{className:r,children:e?.children}),e.rightIcon??""]});return c.cloneElement(e.as,{...l,children:x,style:n,className:p})}},7874:(e,n,l)=>{l.d(n,{A:()=>c.A});var c=l(9427)},1929:(e,n,l)=>{l.r(n),l.d(n,{Accordion:()=>O,AccordionButton:()=>V,AccordionItem:()=>F,Breadcrumbs:()=>M,BreadcrumbsItem:()=>$,Button:()=>c.A,ButtonIcon:()=>r,Checkbox:()=>ce,Code:()=>w,InputChild:()=>v,InputChildButton:()=>j,InputChildIcon:()=>C,InputChildPrefix:()=>k,InputChildSelect:()=>g,InputDecrementStepper:()=>x,InputIncrementStepper:()=>m,InputNumber:()=>h,InputNumberField:()=>u,InputNumberStepper:()=>p,InputText:()=>b,InputTextField:()=>_,Kley:()=>_e,LabelText:()=>f,Progress:()=>Ne,Radio:()=>oe,RadioGroup:()=>ae,Select:()=>de,SelectGroup:()=>me,Spinner:()=>ge,Stack:()=>E});var c=l(7874),s=l(6540),t=l(9427),o=l(4848);const r=e=>(0,o.jsx)(t.A,{...e,isIcon:!0});var a=l(403);const i={mtui_inputtype:"mtui_inputtype_ql8R","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var d=l(7617);const h=e=>{const n={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,o.jsx)("div",{className:(0,a.A)({"mtui-inputnum":!0,[i.mtui_inputtype]:!0,[i["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:n,children:s.Children.map(e.children,(n=>s.cloneElement(n,{childProps:n.props,onChange:e.onChange,value:e.value,placeholder:e.placeholder,name:e.name})))})},u=e=>{const n={onChange:n=>e.onChange(n.target.value),value:e.value,placeholder:e.placeholder,name:e.name};return(0,o.jsx)("input",{type:"number",...n,children:e?.children})},p=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},l=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,o.jsx)("div",{className:i.stepper,children:s.Children.map(e.children,(e=>s.cloneElement(e,{onDecrement:l,onIncrement:n})))})},x=e=>{let{onDecrement:n}=e;return(0,o.jsx)("button",{onClick:n,children:(0,o.jsx)("span",{children:"\u25bc"})})},m=e=>(0,o.jsx)("button",{onClick:e.onIncrement,children:(0,o.jsx)("span",{children:"\u25b2"})}),b=e=>{const n={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,o.jsx)("div",{className:(0,a.A)({"mtui-inputtext":!0,[i.mtui_inputtype]:!0,[i["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:n,children:s.Children.map(e.children,(n=>s.cloneElement(n,{childProps:n.props,onChange:e.onChange,value:e.value,placeholder:e.placeholder,name:e.name})))})},_=e=>{const n={onChange:n=>e.onChange(n.target.value),value:e.value,placeholder:e.placeholder,name:e.name};return(0,o.jsx)("input",{type:"text",...n,children:e?.children})},k=e=>{let{childProps:n}=e;return n.value?(0,o.jsx)("div",{className:i.inputPrefix,children:n.value}):""},g=e=>e.children?(0,o.jsx)("select",{className:i.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",v=e=>{const n={...e};return delete n.children,e.children?(0,o.jsx)("div",{...n,className:i.inputChild,children:s.Children.map(e.children,(e=>{const l={...n,...e.props};return e.props.onClick&&(l.onClick=n=>e.props.onClick(n,l)),s.cloneElement(e,l)}))}):""},j=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,o.jsx)("button",{...n,className:i.inputChildButton,children:e.children}):""},C=e=>{const n={...e};return delete n.children,e.children?(0,o.jsx)("div",{...n,className:i.inputChildIcon,children:e.children}):""},N="label_khEV",f=e=>{let{children:n}=e;return(0,o.jsx)("div",{className:N,children:n})},y={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"},w=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,o.jsx)("span",{className:(0,a.A)({"mtui-codeblock":!0,[y.code]:!0,[y["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},I="stack_VFNJ",A="column_UECP",S="stretch_wfbw",E=e=>{const n={gap:e.gap,flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style},l={...e};return delete l.children,delete l.wrap,delete l.column,e.children?(0,o.jsx)("div",{...l,className:(0,a.A)({stack:!0,[I]:!0,[A]:e.column,[S]:e.stretch,[l.className]:l.className}),style:n,children:e.children}):""},P="accordion_JXnx",z="button_KX5s",B="contentitem_Ypfv",Z="visible_Rwwh",L="hidden_GCVw",D="icon_Tmaf",T="children_fxDu",R="button_opened_GUD0",O=e=>{const n={...e.style},l={...e,style:n};return(0,o.jsx)("section",{...l,className:(0,a.A)({"mtui-accordion":!0,[P]:P,...l.className?.map((e=>({[e]:e})))}),children:l.children})},F=e=>{const[n,l]=(0,s.useState)(e.isOpened||!1),c=()=>{l(!n)};return(0,o.jsx)("article",{children:s.Children.map(e.children,((e,l)=>{const t={...e.props};return"AccordionButton"===e.type.displayName?(t.onClick=c,s.cloneElement(e,{...t,isOpened:n})):(t["data-visible"]=n,t.className=`mtui-accordion__item ${B} ${n?Z:L}`,s.cloneElement(e,t))}))})},U=e=>(0,o.jsxs)("button",{onClick:e.onClick,className:(0,a.A)({[z]:!0,[R]:e.isOpened}),children:[(0,o.jsx)("span",{className:T,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,o.jsx)("i",{className:D,children:(0,o.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});U.displayName="AccordionButton";const V=U,W="breadcrumbs_EqqV",q="item_U93n",K="divider_e5y_",Q="divider_child_jasW",X="link_Mfuz",G="last_visible_EQmH",H="last_inactive_e_0M",J={divider:"/",showLastDivider:!0,lastActive:!1,children:null},M=function(e){void 0===e&&(e=J);const n={...e.style},l={...e};return delete l.style,delete l.divider,delete l.showLastDivider,delete l.className,delete l.lastActive,(0,o.jsx)("nav",{...l,className:(0,a.A)({"mtui-breadcrumbs":!0,[W]:!0,[G]:e.showLastDivider,[H]:!e.lastActive,[e.className]:!!e.className}),style:n,children:s.Children.map(e.children,(n=>s.cloneElement(n,{divider:e.divider,...n.props})))})},Y=e=>e.divider?(0,o.jsx)("div",{className:`${K} ${Q}`,children:e.divider}):(0,o.jsx)("div",{className:K,children:"/"}),$=e=>(0,o.jsxs)("div",{className:q,children:[(0,o.jsx)("span",{className:X,children:e.children}),(0,o.jsx)(Y,{divider:e.divider})]}),ee={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};var ne=l(6268);const le={value:!1,onChange:()=>{},name:"",checked:!1,toggle:!1,linear:!1};function ce(e){void 0===e&&(e=le);const{name:n,value:l,disabled:c,checked:t,toggle:r,linear:a}=e,i=l||t||"",[d,h]=s.useState(!1),[u,p]=s.useState(i);return s.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,o.jsxs)("label",{className:(0,ne.A)(["mtui-checkbox",ee.parent,{[ee.disabled]:c,[ee.toggle]:r,[ee.linear]:a}]),style:e.style,children:[(0,o.jsx)("input",{type:"checkbox",checked:e.onChange?i:u,className:ee.input,onChange:n=>{c||(e.onChange?e.onChange(!!n.target.checked):p(!!n.target.checked))},name:n}),(0,o.jsx)("span",{className:ee.checkbox,children:(e.onChange?i:u)&&!r?(0,o.jsx)("svg",{className:ee.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:d?(0,o.jsx)("polyline",{children:(0,o.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,o.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),e.children?(0,o.jsx)("span",{className:ee.label,children:e.children}):""]})}const se={parent:"parent_ZnxF",radio:"radio_pI4X",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},te={name:"",onChange:()=>{},value:!1,disabled:!1},oe=function(e){void 0===e&&(e=te);const{name:n,value:l,disabled:c}=e;return(0,o.jsxs)("label",{className:(0,a.A)({"mtui-radioitem":!0,[se.parent]:!0,[se.disabled]:c}),children:[(0,o.jsx)("input",{type:"radio",checked:l===e.childProps.value,className:se.input,onChange:c?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,o.jsx)("span",{className:se.checkbox}),e.children?(0,o.jsx)("span",{className:se.label,children:e.children}):""]})},re={value:"",onChange:()=>{}},ae=function(e){void 0===e&&(e=re);const{onChange:n,value:l}=e,c=l||e.defaultValue||"",[t,r]=s.useState(c),i={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,o.jsx)("div",{className:(0,a.A)({"mtui-radiogroup":!0,[se.radio]:!0,[se["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:i,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:n?c:t,onChange:n??r})))})},ie={value:!1,disabled:!1},de=function(e){void 0===e&&(e=ie);const{value:n,disabled:l,defaultValue:c}=e;if(e.children)return(0,o.jsx)("option",{value:n,disabled:l,checked:n===c,children:e.children})},he="parent_AxwE",ue="select_WxMX",pe="icon_l9F_",xe={value:"",onChange:()=>{}},me=function(e){void 0===e&&(e=xe);const{onChange:n,value:l}=e,c=l||e.defaultValue||"",[t,r]=s.useState(c),i={...e.style};if(e.children)return(0,o.jsxs)("label",{className:(0,a.A)({"mtui-selectgroup":!0,[he]:!0,[e.className]:!!e.className}),style:i,children:[(0,o.jsx)("select",{className:ue,onChange:e=>{n?n(e.target.value):r(e.target.value)},value:n?c:t,children:e.children}),(0,o.jsx)("i",{className:pe,children:(0,o.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},be="key_uKP6",_e=e=>e.children?(0,o.jsx)("div",{className:be,children:e.children}):"",ke={act:"act_TEYv",kf_load:"kf_load_XZCU",text:"text_l7Qz"},ge=e=>(0,o.jsxs)("div",{className:(0,a.A)({"mtui-spinner":!0,[ke.parent]:!0,[e.className]:!!e.className}),style:e.styles,children:[(0,o.jsx)("span",{className:ke.act}),(0,o.jsx)("span",{className:ke.text,children:"Loading..."})]}),ve="parent_qZrO",je="vis_kwFj",Ce="text_Z_cA",Ne=e=>{const{value:n,stripe:l,colorScheme:c,height:s,isIndeterminate:t,className:r}=e,i={"--hue":d.Z[c]?d.Z[c]:e.hue?e.hue:160,height:-1!==s.indexOf("px")?s:s+"px",...e.style};return(0,o.jsxs)("div",{className:(0,a.A)({"mtui-progressbar":!0,[ve]:!0,[e.className]:!!e.className}),style:i,children:[(0,o.jsx)("span",{className:je,style:{width:(n||0)+"%"}}),(0,o.jsxs)("span",{className:Ce,children:["Progress: ",n||0,"%"]})]})}},403:(e,n,l)=>{function c(e){return Object.keys(e).filter((n=>e[n])).join(" ")}l.d(n,{A:()=>c})},2136:(e,n,l)=>{l.d(n,{A:()=>c});const c={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}}}]);