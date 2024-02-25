"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[6903],{2260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>V,default:()=>q,frontMatter:()=>_,metadata:()=>C,toc:()=>A});var r=n(3274),a=n(2476),o=n(9474),s=n(8923),l=n(9379),i=n(241),u=n(1123),c=n(4244),d=n(2893),p=n(1911);function m(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,c]=f({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,p.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=i??d;return b({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,a]),tabValues:a}}var v=n(4353);const x={tabList:"tabList_WWLk",tabItem:"tabItem_YDWk"};function y(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:p,onClick:d,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=g(e);return(0,r.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,r.jsx)(y,{...e,...t}),(0,r.jsx)(j,{...e,...t})]})}function I(e){const t=(0,v.A)();return(0,r.jsx)(w,{...e,children:m(e.children)},String(t))}const k={tabItem:"tabItem_zeOZ"};function S(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(k.tabItem,a),hidden:n,children:t})}const N={tabs:"tabs_WUFR",tabs_ic:"tabs_ic_Gtqw",npm:"npm_BRjH",yarn:"yarn_xpLp",pnpm:"pnpm_jLsy",bun:"bun_ukbL"},_={sidebar_position:1,title:"Getting Started"},V="Getting Started",C={id:"intro",title:"Getting Started",description:"Step 1: Installation",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/matro-ui/docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Components",permalink:"/docs/category/components"}},T={},A=[{value:"Step 1: Installation",id:"step-1-installation",level:2},{value:"Step 2: Add your first Component",id:"step-2-add-your-first-component",level:2},{value:"Conclusion",id:"conclusion",level:2}];function E(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.h2,{id:"step-1-installation",children:"Step 1: Installation"}),"\n",(0,r.jsx)(t.p,{children:"To use Matro UI in your project, run one of the following commands in your terminal:"}),"\n",(0,r.jsx)("div",{className:N.tabs+" "+N.tabs_ic,children:(0,r.jsxs)(I,{children:[(0,r.jsx)(S,{value:"pnm",label:"npm",attributes:{className:N.npm},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install matro-ui\n"})})}),(0,r.jsx)(S,{value:"yarn",label:"yarn",attributes:{className:N.yarn},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add matro-ui\n"})})}),(0,r.jsx)(S,{value:"pnpm",label:"pnpm",attributes:{className:N.pnpm},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add matro-ui\n"})})}),(0,r.jsx)(S,{value:"bun",label:"bun",attributes:{className:N.bun},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"bun add matro-ui\n"})})})]})}),"\n",(0,r.jsx)(t.p,{children:'After installing Matra UI, no further actions are required. By design, we decided not to overload Matra with Context Providers and other "heavy" things. However, this may change in the future.'}),"\n",(0,r.jsx)(t.h2,{id:"step-2-add-your-first-component",children:"Step 2: Add your first Component"}),"\n",(0,r.jsx)(t.p,{children:"Here's a quick example of how you can do it using something like Create React App:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import React from "react";\nimport * as ReactDOM from \'react-dom\';\nimport { Button } from "matro-ui";\n \nReactDOM.render(\n  <Button>This button looks great.</Button>,\n  document.getElementById("root")\n);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"Congratulations! You've successfully installed Matro UI and added your first component to your project. Now, you're ready to dive deeper and explore the full range of components and features Matro UI has to offer. Whether you're building a simple website or a complex web application, Matro UI provides you with the tools you need to create beautiful and functional user interfaces."}),"\n",(0,r.jsxs)(t.p,{children:["To explore more components, check out the ",(0,r.jsx)("a",{href:"/docs/category/components",children:"components page"}),". Happy coding!"]})]})}function q(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}},2476:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(9474);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);