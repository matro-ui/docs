"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[3105],{6492:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>_});var s=l(4848),t=l(8453),r=l(1470),i=l(9365),c=l(2136),o=l(2293),a=l(4440),d=l(2383);l(3730);const p={sidebar_position:1,title:"<Spinner/>"},h="Spinner",u={id:"compontents/progress/spinner",title:"<Spinner/>",description:"The `` component visually indicate that a process is underway and awaiting a change or outcome.",source:"@site/docs/compontents/progress/spinner.mdx",sourceDirName:"compontents/progress",slug:"/compontents/progress/spinner",permalink:"/docs/compontents/progress/spinner",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<Spinner/>"},sidebar:"tutorialSidebar",previous:{title:"<Progress/>",permalink:"/docs/compontents/progress/"},next:{title:"Other"}},m={},_=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Spinner Size",id:"spinner-size",level:2},{value:"Color Scheme",id:"color-scheme",level:2},{value:"Conditional Rendering",id:"conditional-rendering",level:2}];function x(e){const n={code:"code",div:"div",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"spinner",children:"Spinner"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<Spinner/>"})," component visually indicate that a process is underway and awaiting a change or outcome."]}),"\n",(0,s.jsx)(o.A,{git:"https://github.com/matro-ui/matro-ui/tree/main/dist/progress/Spinner",npmjs:"https://www.npmjs.com/package/matro-ui",name:"Spinner"}),"\n",(0,s.jsx)("div",{className:c.A.tabs,children:(0,s.jsxs)(r.A,{className:c.A.parent,children:[(0,s.jsxs)(i.A,{value:"usage",label:"Usage",attributes:{className:[c.A.item,c.A.usage]},children:[(0,s.jsx)(n.h2,{id:"import",children:"Import"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import { Spinner } from "matro-ui";\n'})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Spinner"}),": Spinner component by itself."]}),"\n"]}),(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:" <Spinner />\n"})}),(0,s.jsx)(n.h2,{id:"spinner-size",children:"Spinner Size"}),(0,s.jsxs)(n.p,{children:["To change the size of ",(0,s.jsx)(n.code,{children:"<Spinner/>"}),", simply set the ",(0,s.jsx)(n.code,{children:"size"})," prop (val.",(0,s.jsx)(d.A,{children:'"S"'})," | ",(0,s.jsx)(d.A,{children:'"M"'})," | ",(0,s.jsx)(d.A,{children:'"L"'})," | ",(0,s.jsx)(d.A,{children:'"XL"'}),"):"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Spinner size="XL" />\n'})}),(0,s.jsx)(n.h2,{id:"color-scheme",children:"Color Scheme"}),(0,s.jsxs)(n.p,{children:["To change the color of ",(0,s.jsx)(n.code,{children:"<Spinner/>"}),", set the ",(0,s.jsx)(n.code,{children:"colorScheme"})," prop (val. ",(0,s.jsx)(d.A,{children:'"red"'})," | ",(0,s.jsx)(d.A,{children:'"orange"'})," | ",(0,s.jsx)(d.A,{children:'"yellow"'})," | ",(0,s.jsx)(d.A,{children:'"green"'})," | ",(0,s.jsx)(d.A,{children:'"cyangreen"'})," | ",(0,s.jsx)(d.A,{children:'"cyanblue"'})," | ",(0,s.jsx)(d.A,{children:'"blue"'})," | ",(0,s.jsx)(d.A,{children:'"purple"'})," | ",(0,s.jsx)(d.A,{children:'"pink"'}),"):"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<Stack>\n <Spinner size="M" colorScheme="pink" />\n <Spinner size="M" colorScheme="orange" />\n <Spinner size="M" colorScheme="cyanblue" />\n</Stack>\n'})}),(0,s.jsx)(n.h2,{id:"conditional-rendering",children:"Conditional Rendering"}),(0,s.jsxs)(n.p,{children:["If you need to hide the ",(0,s.jsx)(n.code,{children:"<Spinner/>"}),", you can set the ",(0,s.jsx)(n.code,{children:"hidden"})," prop to ",(0,s.jsx)(d.A,{children:"true"}),", or use a ternary JSX statement:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live ",live:!0,children:'function demo() {\n  const [visible, setVisible] = React.useState(true);\n  return (\n    <Stack column>\n\n\n    <LabelText>Example of hiding with prop\u3164<I>"hidden"</I></LabelText>\n    <Spinner hidden={!visible} />\n\n    <LabelText>Example of conditional rendering</LabelText>\n    {visible ? <Spinner /> : ""}\n\n      \n      <Button \n        onClick={() => setVisible(!visible)} \n        rightIcon="\u2699\ufe0f">\n        toggle visibility\n      </Button>\n    </Stack>\n  );\n}\n'})})]}),(0,s.jsx)(i.A,{value:"props",label:"Props",attributes:{className:[c.A.item,c.A.props]},children:(0,s.jsx)(a.A,{title:(0,s.jsxs)(n.div,{children:["Props of ",(0,s.jsx)(n.code,{children:"<Spinner/>"}),":"]}),payload:[{title:"size",type:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{children:'"S"'})," | ",(0,s.jsx)(d.A,{children:'"M"'})," | ",(0,s.jsx)(d.A,{children:'"L"'})," | ",(0,s.jsx)(d.A,{children:'"XL"'})]}),desc:(0,s.jsxs)(s.Fragment,{children:["size of the ",(0,s.jsx)(n.code,{children:"<Spinner/>"}),"."]}),def:'"S"'},{title:"colorScheme",type:'"red" | "orange" | "yellow" | "green" | "cyangreen" | "cyanblue" | "blue" | "purple" | "pink"',desc:"Shows last divider if set to true."},{title:"hidden",type:"boolean",desc:"Hidden if set to true."}]})})]})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},2383:(e,n,l)=>{l.d(n,{A:()=>r});l(6540);const s="marker_ejtM";var t=l(4848);const r=e=>{let{children:n}=e;return(0,t.jsx)("span",{className:s,children:n})}},4440:(e,n,l)=>{l.d(n,{A:()=>i});l(6540);const s={title:"title_XigD",content:"content_htMh",act_color:"act_color_knPL"};var t=l(2302),r=l(4848);const i=e=>{let{payload:n,title:l}=e;if(n&&n.length)return(0,r.jsxs)(r.Fragment,{children:[l?(0,r.jsx)("h2",{children:l}):"",n.map((e=>(0,r.jsx)(c,{...e},(0,t.A)())))]})},c=e=>{let{title:n,type:l,desc:t,def:i}=e;return(0,r.jsxs)("div",{className:s.item,children:[(0,r.jsx)("span",{className:s.title,children:n}),(0,r.jsxs)("div",{className:s.content,children:[t?(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Description"}),(0,r.jsx)("span",{children:t})]}):"",l?(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Type"}),(0,r.jsx)("span",{className:s.act_color,children:l})]}):"",i?(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Default"}),(0,r.jsx)("span",{className:s.act_color,children:i})]}):""]})]})}},2293:(e,n,l)=>{l.d(n,{A:()=>c});l(6540);const s="sources_cKg5";var t=l(7874),r=l(8027),i=l(4848);const c=e=>{let{git:n,npmjs:l,name:c}=e;return(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)(t.A,{leftIcon:(0,i.jsx)(r.hL4,{}),as:(0,i.jsx)("a",{href:n,target:"_blank"}),children:"Source"}),(0,i.jsxs)(t.A,{leftIcon:(0,i.jsx)(r.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,i.jsx)("a",{href:l,target:"_blank"}),children:["@matro-ui/",c]})]})}},7617:(e,n,l)=>{l.d(n,{Z:()=>s});const s={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,n,l)=>{l.d(n,{A:()=>m});var s=l(6540),t=l(403),r=l(7617);const i="mtui_button_xmEf",c="content_JZQn",o="default_QvER",a="mtui_button__icon_kEuk",d="glossy_1pgh";var p=l(4848);const h={hue:0,isIcon:!1,glossy:!1,leftIcon:null,rightIcon:null,as:(0,p.jsx)("button",{})},u=e=>{const n={"--hue":r.Z[e.color]?r.Z[e.color]:e.hue?e.hue:100,...e.style},l={...e};Object.keys(h).forEach((e=>delete l[e]));const u=(0,t.A)({"mtui-button":!0,[i]:!0,[o]:!e.hue&&!e?.styles?.color,[d]:e.glossy,[a]:e.isIcon,[e.className]:!!e.className}),m=(0,p.jsxs)(s.Fragment,{children:[e.leftIcon??"",(0,p.jsx)("span",{className:c,children:e?.children}),e.rightIcon??""]});return s.cloneElement(e.as,{...l,children:m,style:n,className:u})};u.defaultProps=h;const m=u},7874:(e,n,l)=>{l.d(n,{A:()=>s.A});var s=l(9427)},3730:(e,n,l)=>{l.r(n),l.d(n,{Accordion:()=>ne,AccordionButton:()=>te,AccordionItem:()=>le,Breadcrumbs:()=>me,BreadcrumbsItem:()=>xe,Button:()=>s.A,ButtonIcon:()=>o,Checkbox:()=>je,Code:()=>P,InputChild:()=>N,InputChildButton:()=>k,InputChildIcon:()=>A,InputChildPrefix:()=>f,InputChildSelect:()=>y,InputDecrementStepper:()=>x,InputIncrementStepper:()=>g,InputNumber:()=>u,InputNumberField:()=>m,InputNumberStepper:()=>_,InputText:()=>v,InputTextField:()=>b,Kley:()=>ze,LabelText:()=>S,LinkButton:()=>i,Progress:()=>He,Radio:()=>fe,RadioGroup:()=>Ne,Select:()=>Ae,SelectGroup:()=>Le,Spinner:()=>Ve,Stack:()=>X,Toggle:()=>We});var s=l(7874),t=l(6540),r=l(4848);const i=e=>(0,r.jsx)(s.A,{...e});var c=l(9427);const o=e=>(0,r.jsx)(c.A,{...e,isIcon:!0});var a=l(6268);const d={mtui_inputtype:"mtui_inputtype_ql8R",disabled:"disabled_bOb0","color-red":"color-red_zLoZ","color-green":"color-green_YTkh","color-blue":"color-blue_Lekr",mtui_color_white:"mtui_color_white__6uY",stepper:"stepper_HenK",inputPrefix:"inputPrefix_h3vh",inputSelect:"inputSelect_pTGH",inputChildButton:"inputChildButton_fx5s",inputChildIcon:"inputChildIcon_e_T7"};var p=l(7617);const h=e=>{const{name:n,disabled:l,value:s,onChange:i,placeholder:c}=e,o={"--hue":p.Z[e.color]?p.Z[e.color]:e.hue?e.hue:160,...e.style};return(0,r.jsx)("div",{className:(0,a.A)("mtui-inputnum",d.mtui_inputtype,{[d["mtui_color_"+e.color]]:e.color,[d.disabled]:l,[e.className]:!!e.className}),style:o,children:t.Children.map(e.children,(e=>t.cloneElement(e,{childProps:e.props,value:s,onChange:i,placeholder:c,name:n})))})};h.defaultProps={name:"",disabled:!1,placeholder:"0"};const u=h,m=e=>{let{onChange:n,value:l,placeholder:s,name:t,disabled:i}=e;const c={placeholder:s,name:t,disabled:i};return"function"==typeof n&&(c.onChange=n),(l||""===l)&&(c.value=l),(0,r.jsx)("input",{type:"number",...c})},_=e=>{const n=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)+1)},l=()=>{e.onChange(isNaN(parseInt(e.value))?0:parseInt(e.value)-1)};return(0,r.jsx)("div",{className:d.stepper,children:t.Children.map(e.children,(e=>t.cloneElement(e,{onDecrement:l,onIncrement:n})))})},x=e=>{let{onDecrement:n}=e;return(0,r.jsx)("button",{onClick:n,children:(0,r.jsx)("span",{children:"\u25bc"})})},g=e=>(0,r.jsx)("button",{onClick:e.onIncrement,children:(0,r.jsx)("span",{children:"\u25b2"})}),j=e=>{const{onChange:n,value:l,placeholder:s,name:i,hue:c,disabled:o}=e,h={"--hue":p.Z[e.color]?p.Z[e.color]:c||160,...e.style};return(0,r.jsx)("div",{className:(0,a.A)("mtui-inputtext",d.mtui_inputtype,{[d.disabled]:o,[d["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:h,children:t.Children.map(e.children,(e=>t.cloneElement(e,{childProps:e.props,onChange:n,value:l,placeholder:s,disabled:o,name:i})))})};j.defaultProps={name:"",disabled:!1,placeholder:""};const v=j,b=e=>{let{value:n,placeholder:l,name:s,onChange:t,disabled:i}=e;const c={type:"text",placeholder:l,name:s,disabled:i};return"function"==typeof t&&(c.onChange=t),(n||""===n)&&(c.value=n),(0,r.jsx)("input",{...c})},f=e=>{let{childProps:n}=e;return n.value?(0,r.jsx)("div",{className:d.inputPrefix,children:n.value}):""},y=e=>e.children?(0,r.jsx)("select",{className:d.inputSelect,name:e.childProps.name,defaultValue:e.childProps.defaultValue,children:e.children}):"",N=e=>{const n={...e};return delete n.children,e.children?(0,r.jsx)("div",{...n,className:d.inputChild,children:t.Children.map(e.children,(e=>{const l={...n,...e.props};return e.props.onClick&&(l.onClick=n=>e.props.onClick(n,l)),t.cloneElement(e,l)}))}):""},k=e=>{const n={...e};return delete n.children,delete n.childProps,e.children?(0,r.jsx)("button",{...n,className:d.inputChildButton,children:e.children}):""},A=e=>{const n={...e};return delete n.children,e.children?(0,r.jsx)("div",{...n,className:d.inputChildIcon,children:e.children}):""},C="label_khEV",S=e=>{let{children:n}=e;return(0,r.jsx)("div",{className:C,children:n})},I={code:"code_n0Wf",code__color_gray:"code__color_gray_ROb0",code__color_black:"code__color_black_ysuY",code__color_green:"code__color_green_lvBb",code__color_purple:"code__color_purple_kCjj",code__color_red:"code__color_red_uP9R",code__color_blue:"code__color_blue_BZ2X",code__color_teal:"code__color_teal_K8eE",code__color_pink:"code__color_pink_LMiF",code__color_yellow:"code__color_yellow_IihA"};var w=l(403);const P=e=>{const n={...e};return n.color&&-1!==["red","blue","yellow","cyan","purple","teal","pink","green","black"].indexOf(n.color)||(n.color="gray"),e.children?(0,r.jsx)("span",{className:(0,w.A)({"mtui-codeblock":!0,[I.code]:!0,[I["code__color_"+n.color]]:n.color,[e.className]:!!e.className}),children:e.children}):""},L="stack_wl5C",E="column_AVcH",z="stretch_Koba",B="flex__9bI",D="js_end_cSG9",R="js_center_boE0",T="js_start_k4mk",Z="js_spaceBetween_ny_D",O="js_spaceAround_eiM1",U="al_start_euFe",M="al_end_O7Cd",V="al_center_YCq4",F="al_stretch_QfIY";var K=l(464);const X=e=>{const n="mtstack__"+(0,K.A)(),{flex:l,justify:s,align:t,margin:i,padding:c}=e,o={gap:isNaN(e.gap)?e.gap:e.gap+"px",flexWrap:"reverse"===e.wrap?"wrap-reverse":e.wrap?"wrap":"nowrap",...e.style};"string"==typeof i&&(o.margin=isNaN(i)?i:i+"px"),"string"==typeof c&&(o.padding=isNaN(c)?c:c+"px"),console.log(l);const d={...e};return delete d.children,delete d.wrap,delete d.column,delete d.justify,delete d.flex,delete d.margin,delete d.padding,e.children?(0,r.jsxs)("div",{...d,className:(0,a.A)(["mtui-stack",n,L,{[E]:e.column,[B]:"boolean"==typeof l&&l,[D]:"end"===s,[R]:"center"===s,[T]:"start"===s,[Z]:"spaceBetween"===s,[O]:"spaceAround"===s,[U]:"start"===t,[M]:"end"===t,[V]:"center"===t,[F]:"stretch"===t,[z]:e.stretch,[d.className]:d.className}]),style:o,children:[e.children,(0,r.jsx)("style",{children:`.${n} > * {\n          flex: ${"string"==typeof l?l:"0 1 auto"}\n      }`})]}):""},H="accordion_JXnx",W="button_KX5s",q="contentitem_Ypfv",Q="visible_Rwwh",Y="hidden_GCVw",G="icon_Tmaf",J="children_fxDu",$="button_opened_GUD0",ee=e=>{const n={...e.style},l={...e,style:n};return delete l.setIcon,(0,r.jsx)("section",{...l,className:(0,a.A)([H,"mtui-accordion",l.className,{[H]:H}]),children:t.Children.map(l.children,(n=>t.cloneElement(n,{setIcon:e.setIcon,...n.props})))})};ee.defaultProps={children:null,setIcon:null,className:"",style:{}};const ne=ee,le=e=>{const[n,l]=(0,t.useState)(e.isOpened||!1),s=()=>{l(!n)};return(0,r.jsx)("article",{children:t.Children.map(e.children,((l,r)=>{const i={...l.props};return"AccordionButton"===l.type.displayName?(i.onClick=s,t.cloneElement(l,{...i,isOpened:n,setIcon:e.setIcon})):(i["data-visible"]=n,i.className=`mtui-accordion__item ${q} ${n?Q:Y}`,t.cloneElement(l,i))}))})},se=e=>(0,r.jsxs)("button",{onClick:e.onClick,className:(0,w.A)({[W]:!0,[$]:e.isOpened}),children:[(0,r.jsx)("span",{className:J,children:e.children}),"function"==typeof e.setIcon?e.setIcon(e):(0,r.jsx)("i",{className:G,children:(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]});se.displayName="AccordionButton";const te=se,re="breadcrumbs_EqqV",ie="item_U93n",ce="divider_e5y_",oe="divider_child_jasW",ae="link_Mfuz",de="last_visible_EQmH",pe="last_inactive_e_0M",he={divider:"/",showLastDivider:!0,lastActive:!1,children:null,className:""},ue=function(e){void 0===e&&(e=he);const n={...e};return Object.keys(he).forEach((e=>delete n[e])),(0,r.jsx)("nav",{...n,className:(0,a.A)(["mtui-breadcrumbs",re,e.className,{[de]:e.showLastDivider,[pe]:!e.lastActive}]),children:t.Children.map(e.children,(n=>t.cloneElement(n,{divider:e?.divider,...n.props})))})};ue.defaultProps=he;const me=ue,_e=e=>e.divider?(0,r.jsx)("div",{className:`${ce} ${oe}`,children:e.divider}):(0,r.jsx)("div",{className:ce,children:"/"}),xe=e=>(0,r.jsxs)("div",{className:ie,children:[(0,r.jsx)("span",{className:ae,children:e.children}),(0,r.jsx)(_e,{divider:e.divider})]}),ge={parent:"parent_cuXV",label:"label_qpJJ",input:"input_e9DQ",checkbox:"checkbox_lJBY",svg:"svg_vaGA",disabled:"disabled_R7hA",toggle:"toggle_HK2k",linear:"linear_zDq1","toggle-active":"toggle-active_seiO","toggle-active-out":"toggle-active-out__Qzi"};function je(e){let{name:n,value:l,onChange:s,disabled:i,checked:c,toggle:o,linear:d,...p}=e;const[h,u]=t.useState(!1),[m,_]=t.useState(l||c),x={type:"checkbox",className:ge.input,checked:m,onChange:e=>{if(!i){let n=e.target.checked;_(n),"function"==typeof s&&s(e)}},name:n};return t.useEffect((()=>{setInterval((()=>u(!0)),200)})),(0,r.jsxs)("label",{className:(0,a.A)(["mtui-checkbox",ge.parent,{[ge.disabled]:i,[ge.toggle]:o,[ge.linear]:d}]),style:p.style,children:[(0,r.jsx)("input",{...x}),(0,r.jsx)("span",{className:ge.checkbox,children:m&&!o?(0,r.jsx)("svg",{className:ge.svg,viewBox:"0 0 11 11",style:{display:"inline-block",fill:"none",strokeWidth:2,stroke:"currentcolor"},children:h?(0,r.jsx)("polyline",{children:(0,r.jsx)("animate",{attributeName:"points",dur:"150ms",from:"2,4 5,7 5,7",to:"2,5 5,8 9.5,3",fill:"freeze",begin:"0ms"})}):(0,r.jsx)("polyline",{points:"2,5 5,8 9.5,3"})}):null}),p.children?(0,r.jsx)("span",{className:ge.label,children:p.children}):""]})}je.defaultProps={name:"",value:null,onChange:null,checked:!1,toggle:!1,linear:!1,disabled:!1};const ve={parent:"parent_ZnxF",label:"label_Ki1H",input:"input_ojQg",checkbox:"checkbox_nhIT","radio-appear":"radio-appear_qzOu",svg:"svg_DOdR",disabled:"disabled_xAz1"},be={name:"",onChange:()=>{},value:!1,disabled:!1},fe=function(e){void 0===e&&(e=be);const{name:n,value:l,disabled:s,styleParent:t}=e;return console.log(t),(0,r.jsxs)("label",{className:(0,a.A)(["mtui-radioitem",ve.parent,{[ve.disabled]:s}]),style:{"--bg":t["--bg"],...e.childProps.style},children:[(0,r.jsx)("input",{type:"radio",checked:l===e.childProps.value,className:ve.input,onChange:s?()=>{}:n=>e.onChange(e.childProps.value),name:n}),(0,r.jsx)("span",{className:ve.checkbox}),e.children?(0,r.jsx)("span",{className:ve.label,children:e.children}):""]})},ye={value:"",onChange:()=>{}},Ne=function(e){void 0===e&&(e=ye);const{onChange:n,value:l}=e,s=l||e.defaultValue||"",[i,c]=t.useState(s),o={"--hue":p.Z[e.color]?p.Z[e.color]:e.hue?e.hue:160,...e.style};if(e.children)return(0,r.jsx)("div",{className:(0,w.A)({"mtui-radiogroup":!0,[ve.radio]:!0,[ve["mtui_color_"+e.color]]:e.color,[e.className]:!!e.className}),style:o,children:t.Children.map(e.children,(e=>t.cloneElement(e,{childProps:e.props,value:n?s:i,onChange:n??c,styleParent:o})))})},ke={value:!1,disabled:!1},Ae=function(e){void 0===e&&(e=ke);const{value:n,disabled:l,defaultValue:s}=e;if(e.children)return(0,r.jsx)("option",{value:n,disabled:l,checked:n===s,children:e.children})},Ce="parent_AxwE",Se="fitContent_kJ4E",Ie="select_WxMX",we="icon_l9F_",Pe={value:"",onChange:()=>{}},Le=function(e){void 0===e&&(e=Pe);const{onChange:n,value:l,fitContent:s}=e,i=l||e.defaultValue||"",[c,o]=t.useState(i),d={...e.style};if(e.children)return(0,r.jsxs)("label",{className:(0,a.A)(["mtui-selectgroup",[Ce],{[e.className]:!!e.className,[Se]:!!e.fitContent}]),style:d,children:[(0,r.jsx)("select",{className:Ie,onChange:e=>{n?n(e.target.value):o(e.target.value)},value:n?i:c,children:e.children}),(0,r.jsx)("i",{className:we,children:(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"200px",width:"200px",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"})})})]})},Ee="key_uKP6",ze=e=>e.children?(0,r.jsx)("div",{className:Ee,children:e.children}):"",Be="parent_VdR2",De="act_TEYv",Re="isColor_OwMK",Te="size_s_KznB",Ze="size_m_HLKY",Oe="size_l_NawM",Ue="size_xl_rRp9",Me="text_l7Qz",Ve=e=>{const{size:n,colorScheme:l,hidden:s}=e,t={"--hue":p.Z[l]>-1?p.Z[l]:e.hue?e.hue:220,...e.style};return s?"":(0,r.jsxs)("div",{className:(0,a.A)(["mtui-spinner",Be,{[Ze]:"m"===n||"M"===n,[Te]:"s"===n||"S"===n,[Oe]:"l"===n||"L"===n,[Ue]:"xl"===n||"XL"===n,[Re]:!!e.colorScheme,[e.className]:!!e.className}]),style:{...t,...e.styles},children:[(0,r.jsx)("span",{className:De}),(0,r.jsx)("span",{className:Me,children:"Loading..."})]})},Fe="parent_qZrO",Ke="vis_kwFj",Xe="text_Z_cA",He=e=>{const{value:n,stripe:l,colorScheme:s,height:t,isIndeterminate:i,className:c}=e,o={"--hue":p.Z[s]>-1?p.Z[s]:e.hue?e.hue:220,...e.style};return t&&(o.height=-1!==t.indexOf("px")?t:t+"px"),(0,r.jsxs)("div",{className:(0,w.A)({"mtui-progressbar":!0,[Fe]:!0,[e.className]:!!e.className}),style:o,children:[(0,r.jsx)("span",{className:Ke,style:{width:(n||0)+"%"}}),(0,r.jsxs)("span",{className:Xe,children:["Progress: ",n||0,"%"]})]})},We=e=>(0,r.jsx)(je,{...e,toggle:!0})},403:(e,n,l)=>{function s(e){return Object.keys(e).filter((n=>e[n])).join(" ")}l.d(n,{A:()=>s})},2136:(e,n,l)=>{l.d(n,{A:()=>s});const s={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}},464:(e,n,l)=>{l.d(n,{A:()=>a});const s={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let t;const r=new Uint8Array(16);function i(){if(!t&&(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(r)}const c=[];for(let d=0;d<256;++d)c.push((d+256).toString(16).slice(1));function o(e,n=0){return c[e[n+0]]+c[e[n+1]]+c[e[n+2]]+c[e[n+3]]+"-"+c[e[n+4]]+c[e[n+5]]+"-"+c[e[n+6]]+c[e[n+7]]+"-"+c[e[n+8]]+c[e[n+9]]+"-"+c[e[n+10]]+c[e[n+11]]+c[e[n+12]]+c[e[n+13]]+c[e[n+14]]+c[e[n+15]]}const a=function(e,n,l){if(s.randomUUID&&!n&&!e)return s.randomUUID();const t=(e=e||{}).random||(e.rng||i)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){l=l||0;for(let e=0;e<16;++e)n[l+e]=t[e];return n}return o(t)}},6268:(e,n,l)=>{function s(e){var n,l,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(l=s(e[n]))&&(t&&(t+=" "),t+=l)}else for(l in e)e[l]&&(t&&(t+=" "),t+=l);return t}l.d(n,{A:()=>t});const t=function(){for(var e,n,l=0,t="",r=arguments.length;l<r;l++)(e=arguments[l])&&(n=s(e))&&(t&&(t+=" "),t+=n);return t}}}]);