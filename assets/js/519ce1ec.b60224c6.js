"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[8619],{9473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>x});var l=t(4848),s=t(8453),i=t(1470),a=t(9365),c=t(2136),r=t(2293),o=t(4440),d=t(2383);t(676);const u={sidebar_position:1,title:"<InputText/>"},p="Text Input",h={id:"compontents/inputs/input-text",title:"<InputText/>",description:"The `` component allows to get user input in a text field.",source:"@site/docs/compontents/inputs/input-text.mdx",sourceDirName:"compontents/inputs",slug:"/compontents/inputs/input-text",permalink:"/docs/compontents/inputs/input-text",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<InputText/>"},sidebar:"tutorialSidebar",previous:{title:"<InputNumber/>",permalink:"/docs/compontents/inputs/input-number"},next:{title:"<LabelText/>",permalink:"/docs/compontents/inputs/label-text"}},m={},x=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Disabled Input",id:"disabled-input",level:2},{value:"Combination of blocks",id:"combination-of-blocks",level:2}];function _(e){const n={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"text-input",children:"Text Input"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"<InputText/>"})," component allows to get user input in a text field."]}),"\n",(0,l.jsx)(r.A,{git:"https://github.com/matro-ui/matro-ui/tree/main/dist/inputs/Checkbox",npmjs:"https://www.npmjs.com/package/matro-ui",name:"inputtext"}),"\n",(0,l.jsx)("div",{className:c.A.tabs,children:(0,l.jsxs)(i.A,{className:c.A.parent,children:[(0,l.jsxs)(a.A,{value:"usage",label:"Usage",attributes:{className:[c.A.item,c.A.usage]},children:[(0,l.jsx)(n.h2,{id:"import",children:"Import"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'import { InputText, InputTextField } from "matro-ui";\n'})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"InputNumber"}),": The wrapper that provides context and logic to the components."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"InputNumberField"}),": The ",(0,l.jsx)(d.A,{children:"input"})," field itself."]}),"\n"]}),(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <InputText placeholder="Start typing...">\n   <InputTextField/>\n </InputText>\n'})}),(0,l.jsx)(n.h2,{id:"disabled-input",children:"Disabled Input"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <InputText disabled placeholder="Disabled">\n   <InputTextField/>\n </InputText>\n'})}),(0,l.jsx)(n.h2,{id:"combination-of-blocks",children:"Combination of blocks"}),(0,l.jsxs)(n.p,{children:["Combine ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputNumber/>"})}),", ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputText/>"})}),", ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputChildSelect/>"})}),", ",(0,l.jsx)(d.A,{children:(0,l.jsx)(n.code,{children:"<InputChildPrefix/>"})})," as you prefer to create any kind of input:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<Stack column>\n <LabelText>Example of currency-num</LabelText>\n <InputNumber placeholder="0.00">\n   <InputChildPrefix value="$"/>\n   <InputNumberField/>\n   <InputChildSelect name="select-name-prop" defaultValue="pln">\n     <option value="eur">EUR</option>\n     <option value="usd">USD</option>\n     <option value="pln">PLN</option>\n   </InputChildSelect>\n </InputNumber>\n</Stack>\n'})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",metastring:"live ",live:!0,children:'function Search () {\n const [value, setValue] = React.useState("")\n const handleChange = (e) => {\n   setValue(e.target.value);\n } \n return(\n <Stack column>\n   <LabelText>Example of search</LabelText>\n   <InputText placeholder="Search..." value={value} onChange={handleChange}>\n     <InputTextField/>\n     <InputChildButton\n       children={<IoSearch />} \n       onClick={() => {alert("Query: " + value); setValue("");}}/>\n   </InputText>\n </Stack>\n );\n}\n'})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'  <label>\n  <LabelText>Example of link-text</LabelText>\n    <InputText\n      color="cyangreen"\n      placeholder="example.com"\n      name="input-name-prop"\n    >\n    <InputChildPrefix value="https://"/>\n    <InputTextField/>\n    <InputChildSelect/>\n  </InputText>\n  </label> \n'})})]}),(0,l.jsxs)(a.A,{value:"props",label:"Props",attributes:{className:[c.A.item,c.A.props]},children:[(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<InputText/>"})," or ",(0,l.jsx)(n.code,{children:"<InputNumber/>"}),":"]}),payload:[{title:"value",type:"boolean",desc:"The value of the input."},{title:"onChange",type:"function",desc:"Callback function triggered when the input value changes."},{title:"name",type:"string",desc:"The name attribute of the input."},{title:"placeholder",type:"string",desc:"Placeholder attribute of the input."},{title:"disabled",type:"boolean",desc:"Disables of the input."}]}),(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<InputChildPrefix/>"}),":"]}),payload:[{title:"value",type:"React.FC  |  string",desc:"Prefix value."}]}),(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<InputChildSelect/>"}),":"]}),payload:[{title:"name",type:"string",desc:"The name attribute of the input."},{title:"defaultValue",type:"boolean",desc:"The default value of the select input."},{title:"children",type:"React.FC | React.FC[]",desc:'<option> jsx tags with provided "value" attr'}]}),(0,l.jsx)(o.A,{title:(0,l.jsxs)(n.div,{children:["Props of ",(0,l.jsx)(n.code,{children:"<LabelText/>"}),":"]}),payload:[{title:"children",type:"string",desc:"The string value of the label."}]})]})]})})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(_,{...e})}):_(e)}},2383:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);const l="marker_ejtM";var s=t(4848);const i=e=>{let{children:n}=e;return(0,s.jsx)("span",{className:l,children:n})}},4440:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);const l={title:"title_XigD",content:"content_htMh",act_color:"act_color_knPL"};var s=t(2302),i=t(4848);const a=e=>{let{payload:n,title:t}=e;if(n&&n.length)return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsx)("h2",{children:t}):"",n.map((e=>(0,i.jsx)(c,{...e},(0,s.A)())))]})},c=e=>{let{title:n,type:t,desc:s,def:a}=e;return(0,i.jsxs)("div",{className:l.item,children:[(0,i.jsx)("span",{className:l.title,children:n}),(0,i.jsxs)("div",{className:l.content,children:[s?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Description"}),(0,i.jsx)("span",{children:s})]}):"",t?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Type"}),(0,i.jsx)("span",{className:l.act_color,children:t})]}):"",a?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Default"}),(0,i.jsx)("span",{children:a})]}):""]})]})}},2293:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);const l="sources_cKg5";var s=t(7874),i=t(8027),a=t(4848);const c=e=>{let{git:n,npmjs:t,name:c}=e;return(0,a.jsxs)("div",{className:l,children:[(0,a.jsx)(s.A,{leftIcon:(0,a.jsx)(i.hL4,{}),as:(0,a.jsx)("a",{href:n,target:"_blank"}),children:"Source"}),(0,a.jsxs)(s.A,{leftIcon:(0,a.jsx)(i.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,a.jsx)("a",{href:t,target:"_blank"}),children:["@matro-ui/",c]})]})}},7617:(e,n,t)=>{t.d(n,{Z:()=>l});const l={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,t)=>{t.d(n,{A:()=>h});var l=t(6540),s=t(403),i=t(7617);const a="mtui_button_xmEf",c="content_JZQn",r="default_QvER",o="mtui_button__icon_kEuk",d="glossy_1pgh";var u=t(4848);const p={hue:0,isIcon:!1,glossy:!1,leftIcon:l.Component,rightIcon:l.Component,as:(0,u.jsx)("button",{})},h=function(e){void 0===e&&(e=p);const n={"--hue":i.Z[e.color]?i.Z[e.color]:e.hue?e.hue:100,...e.style},t={...e};Object.keys(p).forEach((e=>delete t[e]));const h=(0,s.A)({"mtui-button":!0,[a]:!0,[r]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[o]:e.isIcon,[e.className]:!!e.className}),m=(0,u.jsxs)(l.Fragment,{children:[e.leftIcon??"",(0,u.jsx)("span",{className:c,children:e?.children}),e.rightIcon??""]});return l.cloneElement(e.as,{...t,children:m,style:n,className:h})}},7874:(e,n,t)=>{t.d(n,{A:()=>l.A});var l=t(9427)},676:(e,n,t)=>{t.r(n),t.d(n,{Accordion:()=>W,AccordionButton:()=>q,AccordionItem:()=>z,Breadcrumbs:()=>ee,BreadcrumbsItem:()=>te,Button:()=>l.A,ButtonIcon:()=>c,Checkbox:()=>se,Code:()=>w,InputChild:()=>N,InputChildButton:()=>y,InputChildIcon:()=>C,InputChildPrefix:()=>g,InputChildSelect:()=>f,InputDecrementStepper:()=>x,InputIncrementStepper:()=>_,InputNumber:()=>p,InputNumberField:()=>h,InputNumberStepper:()=>m,InputText:()=>b,InputTextField:()=>j,Kley:()=>je,LabelText:()=>I,Progress:()=>ke,Radio:()=>ce,RadioGroup:()=>oe,Select:()=>ue,SelectGroup:()=>ve,Spinner:()=>fe,Stack:()=>L,Toggle:()=>Ie});var l=t(7874),s=t(6540),i=t(9427),a=t(4848);const c=e=>(0,a.jsx)(i.A,{...e,isIcon:!0});var r=t(6268);const o={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var d=t(7617);const u=e=>{const{name:n,disabled:t,value:l,onChange:i,placeholder:c}=e,u={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,a.jsx)("div",{className:(0,r.A)("mtui-inputnum",o.mtui_inputtype,{[o["mtui_color_"+e.color]]:e.color,[o.disabled]:t,[e.className]:!!e.className}),style:u,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:l,onChange:i,placeholder:c,name:n})))})};u.defaultProps={name:"",disabled:!1,placeholder:"0"};const p=u,h=e=>{let{onChange:n,value:t,placeholder:l,name:s,disabled:i}=e;const c={placeholder:l,name:s,disabled:i};return"function"==typeof n&&(c.onChange=n),(t||""===t)&&(c.value=t),(0,a.jsx)("input",{type:"number",...c})},m=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},t=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,a.jsx)("div",{className:o.stepper,children:s.Children.map(e.children,(e=>s.cloneElement(e,{onDecrement:t,onIncrement:n})))})},x=e=>{let{onDecrement:n}=e;return(0,a.jsx)("button",{onClick:n,children:(0,a.jsx)("span",{children:"\u25bc"})})},_=e=>(0,a.jsx)("button",{onClick:e.onIncrement,children:(0,a.jsx)("span",{children:"\u25b2"})}),v=e=>{const{onChange:n,value:t,placeholder:l,name:i,hue:c,disabled:u}=e,p={"--hue":d.Z[e.color]?d.Z[e.color]:c||160,...e.style};return(0,a.jsx)("div",{className:(0,r.A)("mtui-inputtext",o.mtui_inputtype,{[o.disabled]:u,[o["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:p,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,onChange:n,value:t,placeholder:l,disabled:u,name:i})))})};v.defaultProps={name:"",disabled:!1,placeholder:""};const b=v,j=e=>{let{value:n,placeholder:t,name:l,onChange:s,disabled:i}=e;const c={type:"text",placeholder:t,name:l,disabled:i};return"function"==typeof s&&(c.onChange=s),(n||""===n)&&(c.value=n),(0,a.jsx)("input",{...c})},g=e=>{let{childProps:n}=e;return n.value?(0,a.jsx)("div",{className:o.inputPrefix,children:n.value}):""},f=e=>e.children?(0,a.jsx)("select",{className:o.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",N=e=>{const n={...e};return delete n.children,e.children?(0,a.jsx)("div",{...n,className:o.inputChild,children:s.Children.map(e.children,(e=>{const t={...n,...e.props};return e.props.onClick&&(t.onClick=n=>e.props.onClick(n,t)),s.cloneElement(e,t)}))}):""},y=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,a.jsx)("button",{...n,className:o.inputChildButton,children:e.children}):""},C=e=>{const n={...e};return delete n.children,e.children?(0,a.jsx)("div",{...n,className:o.inputChildIcon,children:e.children}):""},k="label_khEV",I=e=>{let{children:n}=e;return(0,a.jsx)("div",{className:k,children:n})},A={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var T=t(403);const w=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,a.jsx)("span",{className:(0,T.A)({"mtui-codeblock":!0,[A.code]:!0,[A["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},P="stack_VFNJ",S="column_UECP",E="stretch_wfbw",L=e=>{const n={gap:e.gap,flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style},t={...e};return delete t.children,delete t.wrap,delete t.column,e.children?(0,a.jsx)("div",{...t,className:(0,T.A)({stack:!0,[P]:!0,[S]:e.column,[E]:e.stretch,[t.className]:t.className}),style:n,children:e.children}):""},D="accordion_JXnx",F="button_KX5s",B="contentitem_Ypfv",R="visible_Rwwh",Z="hidden_GCVw",V="icon_Tmaf",O="children_fxDu",U="button_opened_GUD0",W=e=>{const n={...e.style},t={...e,style:n};return(0,a.jsx)("section",{...t,className:(0,T.A)({"mtui-accordion":!0,[D]:D,...t.className?.map((e=>({[e]:e})))}),children:t.children})},z=e=>{const[n,t]=(0,s.useState)(e.isOpened||!1),l=()=>{t(!n)};return(0,a.jsx)("article",{children:s.Children.map(e.children,((e,t)=>{const i={...e.props};return"AccordionButton"===e.type.displayName?(i.onClick=l,s.cloneElement(e,{...i,isOpened:n})):(i["data-visible"]=n,i.className=`mtui-accordion__item ${B} ${n?R:Z}`,s.cloneElement(e,i))}))})},Q=e=>(0,a.jsxs)("button",{onClick:e.onClick,className:(0,T.A)({[F]:!0,[U]:e.isOpened}),children:[(0,a.jsx)("span",{className:O,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,a.jsx)("i",{className:V,children:(0,a.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});Q.displayName="AccordionButton";const q=Q,J="breadcrumbs_EqqV",K="item_U93n",M="divider_e5y_",X="divider_child_jasW",G="link_Mfuz",H="last_visible_EQmH",Y="last_inactive_e_0M",$={divider:"/",showLastDivider:!0,lastActive:!1,children:null},ee=function(e){void 0===e&&(e=$);const n={...e.style},t={...e};return delete t.style,delete t.divider,delete t.showLastDivider,delete t.className,delete t.lastActive,(0,a.jsx)("nav",{...t,className:(0,T.A)({"mtui-breadcrumbs":!0,[J]:!0,[H]:e.showLastDivider,[Y]:!e.lastActive,[e.className]:!!e.className}),style:n,children:s.Children.map(e.children,(n=>s.cloneElement(n,{divider:e.divider,...n.props})))})},ne=e=>e.divider?(0,a.jsx)("div",{className:`${M} ${X}`,children:e.divider}):(0,a.jsx)("div",{className:M,children:"/"}),te=e=>(0,a.jsxs)("div",{className:K,children:[(0,a.jsx)("span",{className:G,children:e.children}),(0,a.jsx)(ne,{divider:e.divider})]}),le={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function se(e){let{name:n,value:t,onChange:l,disabled:i,checked:c,toggle:o,linear:d,...u}=e;const[p,h]=s.useState(!1),[m,x]=s.useState(t||c),_={type:"checkbox",className:le.input,checked:m,onChange:e=>{if(!i){let n=e.target.checked;x(n),"function"==typeof l&&l(e)}},name:n};return s.useEffect((()=>{setInterval((()=>h(!0)),200)})),(0,a.jsxs)("label",{className:(0,r.A)(["mtui-checkbox",le.parent,{[le.disabled]:i,[le.toggle]:o,[le.linear]:d}]),style:u.style,children:[(0,a.jsx)("input",{..._}),(0,a.jsx)("span",{className:le.checkbox,children:m&&!o?(0,a.jsx)("svg",{className:le.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:p?(0,a.jsx)("polyline",{children:(0,a.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,a.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),u.children?(0,a.jsx)("span",{className:le.label,children:u.children}):""]})}se.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const ie={parent:"parent_ZnxF",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},ae={name:"",onChange:()=>{},value:!1,disabled:!1},ce=function(e){void 0===e&&(e=ae);const{name:n,value:t,disabled:l,styleParent:s}=e;return console.log(s),(0,a.jsxs)("label",{className:(0,r.A)(["mtui-radioitem",ie.parent,{[ie.disabled]:l}]),style:{"--bg":s["--bg"],...e.childProps.style},children:[(0,a.jsx)("input",{type:"radio",checked:t===e.childProps.value,className:ie.input,onChange:l?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,a.jsx)("span",{className:ie.checkbox}),e.children?(0,a.jsx)("span",{className:ie.label,children:e.children}):""]})},re={value:"",onChange:()=>{}},oe=function(e){void 0===e&&(e=re);const{onChange:n,value:t}=e,l=t||e.defaultValue||"",[i,c]=s.useState(l),r={"--hue":d.Z[e.color]?d.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,a.jsx)("div",{className:(0,T.A)({"mtui-radiogroup":!0,[ie.radio]:!0,[ie["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:r,children:s.Children.map(e.children,(e=>s.cloneElement(e,{childProps:e.props,value:n?l:i,onChange:n??c,styleParent:r})))})},de={value:!1,disabled:!1},ue=function(e){void 0===e&&(e=de);const{value:n,disabled:t,defaultValue:l}=e;if(e.children)return(0,a.jsx)("option",{value:n,disabled:t,checked:n===l,children:e.children})},pe="parent_AxwE",he="fitContent_kJ4E",me="select_WxMX",xe="icon_l9F_",_e={value:"",onChange:()=>{}},ve=function(e){void 0===e&&(e=_e);const{onChange:n,value:t,fitContent:l}=e,i=t||e.defaultValue||"",[c,o]=s.useState(i),d={...e.style};if(e.children)return(0,a.jsxs)("label",{className:(0,r.A)(["mtui-selectgroup",[pe],{[e.className]:!!e.className,[he]:!!e.fitContent}]),style:d,children:[(0,a.jsx)("select",{className:me,onChange:e=>{n?n(e.target.value):o(e.target.value)},value:n?i:c,children:e.children}),(0,a.jsx)("i",{className:xe,children:(0,a.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},be="key_uKP6",je=e=>e.children?(0,a.jsx)("div",{className:be,children:e.children}):"",ge={act:"act_TEYv",kf_load:"kf_load_XZCU",text:"text_l7Qz"},fe=e=>(0,a.jsxs)("div",{className:(0,T.A)({"mtui-spinner":!0,[ge.parent]:!0,[e.className]:!!e.className}),style:e.styles,children:[(0,a.jsx)("span",{className:ge.act}),(0,a.jsx)("span",{className:ge.text,children:"Loading..."})]}),Ne="parent_qZrO",ye="vis_kwFj",Ce="text_Z_cA",ke=e=>{const{value:n,stripe:t,colorScheme:l,height:s,isIndeterminate:i,className:c}=e,r={"--hue":d.Z[l]?d.Z[l]:e.hue?e.hue:160,height:-1!==s.indexOf("px")?s:s+"px",...e.style};return(0,a.jsxs)("div",{className:(0,T.A)({"mtui-progressbar":!0,[Ne]:!0,[e.className]:!!e.className}),style:r,children:[(0,a.jsx)("span",{className:ye,style:{width:(n||0)+"%"}}),(0,a.jsxs)("span",{className:Ce,children:["Progress: ",n||0,"%"]})]})},Ie=e=>(0,a.jsx)(se,{...e,toggle:!0})},403:(e,n,t)=>{function l(e){return Object.keys(e).filter((n=>e[n])).join(" ")}t.d(n,{A:()=>l})},2136:(e,n,t)=>{t.d(n,{A:()=>l});const l={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}},6268:(e,n,t)=>{function l(e){var n,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=l(e[n]))&&(s&&(s+=" "),s+=t)}else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}t.d(n,{A:()=>s});const s=function(){for(var e,n,t=0,s="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=l(e))&&(s&&(s+=" "),s+=n);return s}}}]);