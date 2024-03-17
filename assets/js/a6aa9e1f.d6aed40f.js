"use strict";(self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[]).push([[7643],{7785:(e,n,o)=>{o.r(n),o.d(n,{default:()=>g});o(6540);var t=o(4164),s=o(4586),c=o(1003),a=o(7559),r=o(6535),i=o(7713),l=o(1463),d=o(3892),u=o(4848);function p(e){const{metadata:n}=e,{siteConfig:{title:o}}=(0,s.A)(),{blogDescription:t,blogTitle:a,permalink:r}=n,i="/"===r?o:a;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.be,{title:i,description:t}),(0,u.jsx)(l.A,{tag:"blog_posts_list"})]})}function m(e){const{metadata:n,items:o,sidebar:t}=e;return(0,u.jsxs)(r.A,{sidebar:t,children:[(0,u.jsx)(d.A,{items:o}),(0,u.jsx)(i.A,{metadata:n})]})}function g(e){return(0,u.jsxs)(c.e3,{className:(0,t.A)(a.G.wrapper.blogPages,a.G.page.blogListPage),children:[(0,u.jsx)(p,{...e}),(0,u.jsx)(m,{...e})]})}},7713:(e,n,o)=>{o.d(n,{A:()=>a});o(6540);var t=o(1312),s=o(9022),c=o(4848);function a(e){const{metadata:n}=e,{previousPage:o,nextPage:a}=n;return(0,c.jsxs)("nav",{className:"pagination-nav","aria-label":(0,t.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[o&&(0,c.jsx)(s.A,{permalink:o,title:(0,c.jsx)(t.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),a&&(0,c.jsx)(s.A,{permalink:a,title:(0,c.jsx)(t.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,n,o)=>{o.d(n,{A:()=>a});o(6540);var t=o(7131),s=o(8258),c=o(4848);function a(e){let{items:n,component:o=s.A}=e;return(0,c.jsx)(c.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,c.jsx)(t.i,{content:n,children:(0,c.jsx)(o,{children:(0,c.jsx)(n,{})})},n.metadata.permalink)}))})}},356:(e,n,o)=>{o.d(n,{A:()=>l});o(6540);var t=o(4164),s=o(6058),c=o(7559),a=o(4291);const r={codeBlockContainer:"codeBlockContainer_APcc"};var i=o(4848);function l(e){let{as:n,...o}=e;const l=(0,s.A)(),d=(0,a.M$)(l);return(0,i.jsx)(n,{...o,style:d,className:(0,t.A)(o.className,r.codeBlockContainer,c.G.common.codeBlock)})}},5822:(e,n,o)=>{o.d(n,{A:()=>r});o(6540);var t=o(4164),s=o(356),c=o(2626),a=o(4848);function r(e){let{children:n,className:o}=e;return(0,a.jsx)(s.A,{as:"pre",tabIndex:0,className:(0,t.A)(c.A.codeBlockStandalone,"thin-scrollbar",o),children:(0,a.jsx)("code",{className:c.A.codeBlockLines,children:n})})}},8336:(e,n,o)=>{o.d(n,{A:()=>A});o(6540);var t=o(4164),s=o(6342),c=o(6058),a=o(4291),r=o(6591),i=o(1765);const l={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};var d=o(4848);function u(e){let{line:n,classNames:o,showLineNumbers:s,getLineProps:c,getTokenProps:a}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");const r=c({line:n,className:(0,t.A)(o,s&&l.codeLine)}),i=n.map(((e,n)=>(0,d.jsx)("span",{...a({token:e,key:n})},n)));return(0,d.jsxs)("span",{...r,children:[s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:l.codeLineNumber}),(0,d.jsx)("span",{className:l.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var p=o(2092),m=o(1312),g=o(5048);const h={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function x(e){let{className:n,onClick:o,isEnabled:s}=e;const c=(0,m.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:o,className:(0,t.A)("clean-btn",n,s&&h.wordWrapButtonEnabled),"aria-label":c,title:c,children:(0,d.jsx)(g.A,{className:h.wordWrapButtonIcon,"aria-hidden":"true"})})}var b=o(356),j=o(2626);function A(e){let{children:n,className:o="",metastring:l,title:m,showLineNumbers:g,language:h}=e;const{prism:{defaultLanguage:A,magicComments:k}}=(0,s.p)(),B=function(e){return e?.toLowerCase()}(h??(0,a.Op)(o)??A),N=(0,c.A)(),y=(0,r.f)(),f=(0,a.wt)(l)||m,{lineClassNames:v,code:C}=(0,a.Li)(n,{metastring:l,language:B,magicComments:k}),w=g??(0,a._u)(l);return(0,d.jsxs)(b.A,{as:"div",className:(0,t.A)(o,B&&!o.includes(`language-${B}`)&&`language-${B}`),children:[f&&(0,d.jsx)("div",{className:j.A.codeBlockTitle,children:f}),(0,d.jsxs)("div",{className:j.A.codeBlockContent,children:[(0,d.jsx)(i.f4,{theme:N,code:C,language:B??"text",children:e=>{let{className:n,style:o,tokens:s,getLineProps:c,getTokenProps:a}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,t.A)(n,j.A.codeBlock,"thin-scrollbar"),style:o,children:(0,d.jsx)("code",{className:(0,t.A)(j.A.codeBlockLines,w&&j.A.codeBlockLinesWithNumbering),children:s.map(((e,n)=>(0,d.jsx)(u,{line:e,getLineProps:c,getTokenProps:a,classNames:v[n],showLineNumbers:w},n)))})})}}),(0,d.jsxs)("div",{className:j.A.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,d.jsx)(x,{className:j.A.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),(0,d.jsx)(p.A,{className:j.A.codeButton,code:C})]})]})]})}},2092:(e,n,o)=>{o.d(n,{A:()=>u});var t=o(6540),s=o(4164),c=o(6861),a=o(1312),r=o(1473),i=o(4115);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR",copyButtonText:"copyButtonText_xXQF"};var d=o(4848);function u(e){let{code:n,className:o}=e;const[u,p]=(0,t.useState)(!1),m=(0,t.useRef)(void 0),g=(0,t.useCallback)((()=>{(0,c.A)(n),p(!0),m.current=window.setTimeout((()=>{p(!1)}),1e3)}),[n]);return(0,t.useEffect)((()=>()=>window.clearTimeout(m.current)),[]),(0,d.jsxs)("button",{type:"button","aria-label":u?(0,a.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,a.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,a.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",o,l.copyButton,u&&l.copyButtonCopied),onClick:g,children:[(0,d.jsx)("span",{className:l.copyButtonText,children:u?(0,a.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,a.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"})}),(0,d.jsxs)("span",{className:l.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(r.A,{className:l.copyButtonIcon}),(0,d.jsx)(i.A,{className:l.copyButtonSuccessIcon})]})]})}},224:(e,n,o)=>{o.d(n,{A:()=>G});var t=o(6540),s=o(4164),c=o(2303),a=o(6850),r=o(1312),i=o(4586),l=o(8478),d=o(2181),u=o(6058),p=o(7489);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"},g={codeParent:"codeParent_GSj2",codeButton:"codeButton_bR3a"};var h=o(2092),x=o(4848);function b(e){let{children:n}=e;return(0,x.jsx)("div",{className:(0,s.A)(m.playgroundHeader),children:n})}function j(){return(0,x.jsx)("div",{children:"Loading..."})}function A(){return(0,x.jsx)(l.A,{fallback:(0,x.jsx)(j,{}),children:()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.A,{fallback:e=>(0,x.jsx)(d.MN,{...e}),children:(0,x.jsx)(a.pA,{})}),(0,x.jsx)(a.p1,{})]})})}function k(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:m.playgroundPreview,children:(0,x.jsx)(A,{})})})}function B(){const e=(0,c.A)();return(0,x.jsx)(a.w,{className:m.playgroundEditor},String(e))}function N(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b,{children:(0,x.jsx)(r.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,x.jsx)(B,{})]})}const y=e=>`${e};`;function f(e){let{children:n,transformCode:o,...t}=e;const{siteConfig:{themeConfig:s}}=(0,i.A)(),{liveCodeBlock:{playgroundPosition:c}}=s,r=(0,u.A)(),l=t.metastring?.includes("noInline")??!1;return(0,x.jsx)("div",{className:m.playgroundContainer,children:(0,x.jsx)(a.Q,{code:n?.replace(/\n$/,""),noInline:l,transformCode:o??y,theme:r,...t,children:"top"===c?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k,{}),(0,x.jsxs)("div",{className:g.codeParent,children:[(0,x.jsx)(h.A,{className:g.codeButton,code:n?.replace(/\n$/,"")||""}),(0,x.jsx)(N,{})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(N,{}),(0,x.jsx)(k,{})]})})})}var v=o(960),C=o(9644);const w=(T=C.A,function(e){return e.live?(0,x.jsx)(f,{scope:v.A,...e,className:(0,s.A)(e.className,g.playground)}):(0,x.jsx)(T,{...e})});var T,_=o(3230),L=o(7431),P=o(1351),I=o(7613),E=o(6512),F=o(8774),S=o(6874),W=o(2302);function G(e){return function(e){return void 0!==e.children&&t.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,x.jsx)(_.A,{...e}):(0,x.jsx)(w,{...e,scope:{...L,...P,...I,IoIosArrowForward:E.OQo,Link:F.A,I:S.A,uuid:W.A}})}},2626:(e,n,o)=>{o.d(n,{A:()=>t});const t={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);