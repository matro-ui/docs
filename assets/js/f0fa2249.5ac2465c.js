"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[3607],{4656:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>x,metadata:()=>v,toc:()=>u});var n=s(4848),l=s(8453),i=s(1470),t=s(9365),c=s(2136),d=s(2293),r=s(4440),o=s(2383),m=s(8882);const x={sidebar_position:1,title:"<Stack/>"},p="Stack",v={id:"compontents/layout/stack",title:"<Stack/>",description:"The `` is a layout component that allows to group components together and create a space between them.",source:"@site/docs/compontents/layout/stack.mdx",sourceDirName:"compontents/layout",slug:"/compontents/layout/stack",permalink:"/docs/compontents/layout/stack",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"<Stack/>"},sidebar:"tutorialSidebar",previous:{title:"Layout"},next:{title:"Media"}},h={},u=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Direction",id:"direction",level:2},{value:"Flex",id:"flex",level:2},{value:"Wrap",id:"wrap",level:2},{value:"Justify &amp; Align",id:"justify--align",level:2},{value:"Justify by main axis:",id:"justify-by-main-axis",level:3},{value:"Align by cross axis, using <I>align</I> prop (val: <code>start</code>, <code>end</code>, <code>center</code>, <code>stretch</code>):",id:"align-by-cross-axis-using-align-prop-val-start-end-center-stretch",level:3},{value:"Advanced examples",id:"advanced-examples",level:2},{value:"Props",id:"props",level:2}];function j(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"stack",children:"Stack"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"<Stack/>"})," is a layout component that allows to group components together and create a space between them."]}),"\n",(0,n.jsx)(d.A,{git:"https://github.com/matro-ui/matro-ui/tree/main/dist/layout/Stack",npmjs:"https://www.npmjs.com/package/matro-ui",name:"stack"}),"\n",(0,n.jsx)("div",{className:c.A.tabs,children:(0,n.jsxs)(i.A,{className:c.A.parent,children:[(0,n.jsxs)(t.A,{value:"usage",label:"Usage",attributes:{className:[c.A.item,c.A.usage]},children:[(0,n.jsx)(a.h2,{id:"import",children:"Import"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:'import { Stack } from "matro-ui";\n'})}),(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Stack"}),": The ",(0,n.jsx)(o.A,{children:"stack"})," layout component itself."]}),"\n"]}),(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),(0,n.jsxs)(a.p,{children:["Here's simple exaple of ",(0,n.jsx)(a.code,{children:"<Stack/>"})," component with ",(0,n.jsx)(o.A,{children:"gap"})," 10px:"]}),(0,m.O)([1]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack gap="10">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,n.jsx)(a.h2,{id:"direction",children:"Direction"}),(0,n.jsxs)(a.p,{children:["If you want to use column dimension, simply add ",(0,n.jsx)(o.A,{children:"column"})," prop:"]}),(0,m.O)([1]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack column>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,n.jsx)(a.h2,{id:"flex",children:"Flex"}),(0,n.jsxs)(a.p,{children:["By default, ",(0,n.jsx)(a.code,{children:"<Stack/>"})," items has width set to ",(0,n.jsx)(o.A,{children:"fit-content"}),". If you want to change it, add ",(0,n.jsx)(o.A,{children:"flex"})," prop:"]}),(0,m.O)([1]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack flex>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,n.jsx)("br",{}),(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["Alternatively, you can use combined ",(0,n.jsx)(o.A,{children:"flex"})," property (will be passed to children):"]})}),(0,m.O)([1]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack flex="0 1 150px">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n'})}),(0,n.jsx)(a.h2,{id:"wrap",children:"Wrap"}),(0,n.jsxs)(a.p,{children:["By default, ",(0,n.jsx)(a.code,{children:"<Stack/>"})," items is not wrap when overfow of parent is happen. To change that behaviour, simply add ",(0,n.jsx)(o.A,{children:"wrap"})," prop:"]}),(0,m.O)([1]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:' <Stack flex="1 1 300px" gap="2" wrap>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n   <div className="example">4</div>\n   <div className="example">5</div>\n </Stack>\n'})}),(0,n.jsx)(a.h2,{id:"justify--align",children:"Justify & Align"}),(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"<Stack/>"})," has two axis - main and cross (",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_main_axis",target:"_blank",children:"MDN: learn more"}),").\nTo align items by the ",(0,n.jsx)("i",{children:"main axis"})," ",(0,n.jsx)("br",{})," use ",(0,n.jsx)(o.A,{children:"justify"})," prop (val: ",(0,n.jsx)(a.code,{children:"start"}),", ",(0,n.jsx)(a.code,{children:"end"}),", ",(0,n.jsx)(a.code,{children:"center"}),", ",(0,n.jsx)(a.code,{children:"spaceBetween"}),", ",(0,n.jsx)(a.code,{children:"spaceAround"}),"):"]}),(0,n.jsx)(a.h3,{id:"justify-by-main-axis",children:"Justify by main axis:"}),(0,m.O)([3,9,15,21,27]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small">\n <LabelText>justify="start" (default)</LabelText>\n <Stack>\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n<LabelText>justify="end"</LabelText>\n <Stack justify="end">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n <LabelText>justify="center"</LabelText>\n <Stack justify="center">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n <LabelText>justify="spaceBetween"</LabelText>\n <Stack justify="spaceBetween">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n\n <LabelText>justify="spaceAround"</LabelText>\n <Stack justify="spaceAround">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n</div>\n'})}),(0,n.jsx)("br",{}),(0,n.jsxs)(a.h3,{id:"align-by-cross-axis-using-align-prop-val-start-end-center-stretch",children:["Align by cross axis, using ",(0,n.jsx)(o.A,{children:"align"})," prop (val: ",(0,n.jsx)(a.code,{children:"start"}),", ",(0,n.jsx)(a.code,{children:"end"}),", ",(0,n.jsx)(a.code,{children:"center"}),", ",(0,n.jsx)(a.code,{children:"stretch"}),"):"]}),(0,m.O)([3,10,17,24]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n\n <LabelText>align="start" (default)</LabelText>\n <Stack>\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n <LabelText>align="stretch" </LabelText>\n <Stack align="stretch">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n<LabelText>align="end"</LabelText>\n <Stack align="end">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n <LabelText>align="center"</LabelText>\n <Stack align="center">\n   <div className="example">1</div>\n   <div className="example">2</div>\n   <div className="example">3</div>\n </Stack>\n\n</div>\n'})}),(0,n.jsx)(a.h2,{id:"advanced-examples",children:"Advanced examples"}),(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["Here's more advanced examples of how ",(0,n.jsx)(a.code,{children:"<Stack/>"})," can be used:"]})}),(0,m.O)([4]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n <LabelText>row with stretch, flex 1</LabelText>\n\n <Stack flex align="stretch">\n   <div className="example">1</div>\n   <div className="example">2</div>\n </Stack>\n</div>\n'})}),(0,m.O)([4]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>flex 0, align end, justify end</LabelText>\n\n  <Stack align="end" justify="end">\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([5]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n    align center, justify center, flexGrow 0 flexShrink 0, base 200px</LabelText>\n\n  <Stack flex="0 0 100px" align="center" justify="center">\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([5]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n    align stretch, justify center, flexGrow 0 flexShrink 0, base 200px</LabelText>\n\n  <Stack flex="0 0 100px" align="stretch" justify="center">\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([6,7,8,9]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n   column align center, justify center, flexGrow 0 flexShrink 0, \n   minWidth 100px base 50px (in column base sets minHeight)</LabelText>\n\n  <Stack column flex="0 0 50px" align="center" justify="center">\n    <div className="example" style={{minWidth: 100}}>1</div>\n    <div className="example" style={{minWidth: 100}}>2</div>\n    <div className="example" style={{minWidth: 100}}>3</div>\n  </Stack>\n</div>\n'})}),(0,m.O)([7,8,9,10,11,12]),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live ",live:!0,children:'<div className="small align-example">\n  <LabelText>\n   column align stretch, justify center, flexGrow 0 flexShrink 0, \n   base 60px padding 20px gap 10px</LabelText>\n\n  <Stack \n    column \n    flex="0 0 60px" \n    align="stretch" \n    justify="center" \n    padding="20" \n    gap="10"\n  >\n    <div className="example">1</div>\n    <div className="example">2</div>\n    <div className="example">3</div>\n  </Stack>\n</div>\n'})})]}),(0,n.jsxs)(t.A,{value:"props",label:"Props",attributes:{className:[c.A.item,c.A.props]},children:[(0,n.jsx)(a.h2,{id:"props",children:"Props"}),(0,n.jsx)(r.A,{payload:[{title:"children",type:"any",desc:"The children/s of the Stack."},{title:"wrap",type:"boolean",desc:"Indicates whether the Stack has to wrap the overflow items / or shrink the existing ones."},{title:"column",type:"boolean",desc:"Set Stack direction to column if true.",def:"bool:false"},{title:"justify",type:'"start" | "end" | "center" | "spaceBetween" | "spaceAround"',desc:"Set Stack items justify option.",def:'"start"'},{title:"align",type:'"start" | "end" | "center" | "stretch"',desc:"Set Stack items align option.",def:'"start"'},{title:"padding",type:"string | number",desc:"Set Stack padding (inner spacing)"},{title:"margin",type:"string | number",desc:"Set Stack margin (outside spacing)"},{title:"gap",type:"string | number",desc:"Stack items gap (spacing between items)",def:"5px"}]})]})]})})]})}function g(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},2383:(e,a,s)=>{s.d(a,{A:()=>i});s(6540);const n="marker_ejtM";var l=s(4848);const i=e=>{let{children:a}=e;return(0,l.jsx)("span",{className:n,children:a})}},4440:(e,a,s)=>{s.d(a,{A:()=>t});s(6540);const n={title:"title_XigD",content:"content_htMh",act_color:"act_color_knPL"};var l=s(2302),i=s(4848);const t=e=>{let{payload:a,title:s}=e;if(a&&a.length)return(0,i.jsxs)(i.Fragment,{children:[s?(0,i.jsx)("h2",{children:s}):"",a.map((e=>(0,i.jsx)(c,{...e},(0,l.A)())))]})},c=e=>{let{title:a,type:s,desc:l,def:t}=e;return(0,i.jsxs)("div",{className:n.item,children:[(0,i.jsx)("span",{className:n.title,children:a}),(0,i.jsxs)("div",{className:n.content,children:[l?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Description"}),(0,i.jsx)("span",{children:l})]}):"",s?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Type"}),(0,i.jsx)("span",{className:n.act_color,children:s})]}):"",t?(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Default"}),(0,i.jsx)("span",{className:n.act_color,children:t})]}):""]})]})}},2293:(e,a,s)=>{s.d(a,{A:()=>c});s(6540);const n="sources_cKg5";var l=s(7874),i=s(8027),t=s(4848);const c=e=>{let{git:a,npmjs:s,name:c}=e;return(0,t.jsxs)("div",{className:n,children:[(0,t.jsx)(l.A,{leftIcon:(0,t.jsx)(i.hL4,{}),as:(0,t.jsx)("a",{href:a,target:"_blank"}),children:"Source"}),(0,t.jsxs)(l.A,{leftIcon:(0,t.jsx)(i.JyX,{color:"#e24141",style:{fontSize:"2em"}}),as:(0,t.jsx)("a",{href:s,target:"_blank"}),children:["@matro-ui/",c]})]})}},8882:(e,a,s)=>{s.d(a,{O:()=>i});s(6540);var n=s(2302),l=s(4848);function i(e){void 0===e&&(e=[]);const a="a"+(0,n.A)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("style",{children:e?.map((e=>`.${a} + div .token-line:nth-child(${e}) { \n          background-color: var(--docusaurus-highlighted-code-line-bg);\n          display: inline-block;\n          width: 100%;\n        }\n        `)).join(" ")}),(0,l.jsx)("div",{className:a})]})}},7617:(e,a,s)=>{s.d(a,{Z:()=>n});const n={red:0,orange:30,yellow:50,green:120,cyangreen:160,cyanblue:180,blue:210,purple:250,pink:290}},9427:(e,a,s)=>{s.d(a,{A:()=>p});var n=s(6540),l=s(403),i=s(7617);const t="mtui_button_xmEf",c="content_JZQn",d="default_QvER",r="mtui_button__icon_kEuk",o="glossy_1pgh";var m=s(4848);const x={hue:0,isIcon:!1,glossy:!1,leftIcon:n.Component,rightIcon:n.Component,as:(0,m.jsx)("button",{})},p=function(e){void 0===e&&(e=x);const a={"--hue":i.Z[e.color]?i.Z[e.color]:e.hue?e.hue:100,...e.style},s={...e};Object.keys(x).forEach((e=>delete s[e]));const p=(0,l.A)({"mtui-button":!0,[t]:!0,[d]:!e.hue&&!e?.styles?.color,[o]:e.glossy,[r]:e.isIcon,[e.className]:!!e.className}),v=(0,m.jsxs)(n.Fragment,{children:[e.leftIcon??"",(0,m.jsx)("span",{className:c,children:e?.children}),e.rightIcon??""]});return n.cloneElement(e.as,{...s,children:v,style:a,className:p})}},7874:(e,a,s)=>{s.d(a,{A:()=>n.A});var n=s(9427)},403:(e,a,s)=>{function n(e){return Object.keys(e).filter((a=>e[a])).join(" ")}s.d(a,{A:()=>n})},2136:(e,a,s)=>{s.d(a,{A:()=>n});const n={item:"item_mgdD",preview_box:"preview_box_nOEL",parent:"parent_TUDu",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL",tabs:"tabs_WUFR",usage:"usage_QP_2",props:"props_cScu",extra:"extra_hHdy"}}}]);