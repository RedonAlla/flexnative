(self.webpackChunk_flexnative_framework_docks_3=self.webpackChunk_flexnative_framework_docks_3||[]).push([[2888],{65043:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"components/icons/custom-icons","title":"Custom Icons","description":"@flexnative/icons package uses custom icon fonts created based on a IcoMoon.","source":"@site/docs/components/icons/custom-icons.mdx","sourceDirName":"components/icons","slug":"/components/icons/custom-icons","permalink":"/flexnative/docs/components/icons/custom-icons","draft":false,"unlisted":false,"editUrl":"https://github.com/RedonAlla/flexnative/edit/main/documentation/docs/components/icons/custom-icons.mdx","tags":[{"inline":false,"label":"React","permalink":"/flexnative/docs/tags/react","description":"The library for web and native user interfaces."},{"inline":false,"label":"React Native","permalink":"/flexnative/docs/tags/react-native","description":"Create native apps for Android, iOS, and more using React"},{"inline":false,"label":"Expo","permalink":"/flexnative/docs/tags/expo","description":"Create universal native apps with React that run on Android, iOS, and the web. Iterate with confidence."},{"inline":false,"label":"Framework","permalink":"/flexnative/docs/tags/framework","description":"FlexNative is a component library that enables developers to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web."},{"inline":false,"label":"Component","permalink":"/flexnative/docs/tags/component","description":"Create user interfaces from components."}],"version":"current","lastUpdatedAt":1727136000000,"sidebarPosition":2,"frontMatter":{"title":"Custom Icons","sidebar_position":2,"last_update":{"date":"2024-09-24T00:00:00.000Z","author":"Redon Alla"},"tags":["react","react-native","expo","framework","component"]},"sidebar":"componentsSidebar","previous":{"title":"Basic Usage","permalink":"/flexnative/docs/components/icons/basic-usage"},"next":{"title":"Usecase Examples","permalink":"/flexnative/docs/components/icons/examples"}}');var s=t(74848),r=t(28453),a=t(96540),i=t(39498),c=t(49489),l=t(7227),u=t(65233);const d=a.memo((()=>{const[e,n]=a.useState(""),[t,o]=a.useState(!1),[r,d]=a.useState("Javascript");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.A,{name:"language",callback:e=>d(e),controlRef:a.useRef(),segments:[{label:"Javascript",value:"Javascript",ref:a.useRef()},{label:"Typescript",value:"Typescript",ref:a.useRef()}]}),(0,s.jsxs)("label",{htmlFor:"images",className:"drop-container",children:[(0,s.jsx)("span",{className:"drop-title",children:"Drop file here"}),"or",(0,s.jsx)("input",{type:"file",id:"images",accept:".json",onChange:e=>{const t=new FileReader;t.readAsText(e.target.files[0],"UTF-8"),t.onload=e=>{n(e.target.result),o(!0)}}})]}),t&&"Javascript"===r&&(0,s.jsx)(i.A,{language:"js",title:"/app.config.js",showLineNumbers:!0,children:`/* You should remove first \\ from value ex: "sun": "\\u0053" */\nmodule.exports = {\n  extra: {\n    /** Name of the icon to use. */\n    icons: ${p(e)}\n  }\n`}),t&&"Typescript"===r&&(0,s.jsxs)(c.A,{children:[(0,s.jsx)(l.A,{value:"@flexnative/icons.d.ts",label:"@flexnative/icons.d.ts",default:!0,children:(0,s.jsx)(i.A,{language:"ts",title:"src/typings/@flexnative/icons/index.d.ts",showLineNumbers:!0,children:`/* You should remove " from "string" */\ndeclare module '@flexnative/icons' {\n\n  /** Name of the icon to use. */\n  interface IconName ${f(e)}\n\n  export interface IconProps extends TextProps {\n    name: keyof IconName;\n    size?: number;\n    color?: ColorValue;\n  }\n\n  const Icon: React.MemoExoticComponent<(props: IconProps) => JSX.Element>;\n  const Spinner: React.MemoExoticComponent<(props: IconProps) => JSX.Element>;\n\n  export { Spinner };\n  export default Icon;\n}\n`})}),(0,s.jsx)(l.A,{value:"app.config.ts",label:"app.config.ts",children:(0,s.jsx)(i.A,{language:"ts",title:"/app.config.ts",showLineNumbers:!0,children:`/* You should remove first \\ from value ex: "sun": "\\u0053" */\nimport { ExpoConfig, ConfigContext } from 'expo/config';\n\nexport default ({ config }: ConfigContext): ExpoConfig => ({\n  ...config,\n  extra: {\n    icons: ${p(e)}\n  },\n});\n`})})]})]})}));function p(e){var n=JSON.parse(e),t={};return n.icons.map((e=>{var n,o;t[e.properties.name]="\\u"+(n=e.properties.code,o=4,n.toString(16).padStart(o,"0000"))})),JSON.stringify(t,null,2)}function f(e){var n=JSON.parse(e),t={};return n.icons.map((e=>{t[e.properties.name]="string"})),JSON.stringify(t,null,2)}const m={title:"Custom Icons",sidebar_position:2,last_update:{date:new Date("2024-09-24T00:00:00.000Z"),author:"Redon Alla"},tags:["react","react-native","expo","framework","component"]},h="Custom Icons",x={},g=[{value:"Generating Icons set",id:"generating-icons-set",level:2},{value:"Using custom Icons Set",id:"using-custom-icons-set",level:2},{value:"Generate Icon object",id:"generate-icon-object",level:2}];function v(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"custom-icons",children:"Custom Icons"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@flexnative/icons"})," package uses custom icon fonts created based on a ",(0,s.jsx)(n.a,{href:"https://icomoon.io/",children:(0,s.jsx)(n.strong,{children:"IcoMoon"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can find more details about ",(0,s.jsx)(n.code,{children:"@expo/vector-icons"})," on ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/guides/icons/",children:"Expo official page"}),"\nand section ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/guides/icons/#createiconsetfromicomoon",children:"createIconSetFromIcoMoon"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"generating-icons-set",children:"Generating Icons set"}),"\n",(0,s.jsxs)(n.p,{children:["To ",(0,s.jsx)(n.em,{children:"add"}),", ",(0,s.jsx)(n.em,{children:"edit"})," or ",(0,s.jsx)(n.em,{children:"remove"})," icons from ",(0,s.jsx)(n.code,{children:"@flexnative/icons"})," package you first must extract icons form package and then uplod ",(0,s.jsx)(n.code,{children:"selection.json"}),"\nfile in ",(0,s.jsx)(n.a,{href:"https://icomoon.io/",children:(0,s.jsx)(n.strong,{children:"IcoMoon"})}),".\nFrom ",(0,s.jsx)(n.a,{href:"https://icomoon.io/",children:(0,s.jsx)(n.strong,{children:"IcoMoon"})})," you can ",(0,s.jsx)(n.em,{children:"add"}),", ",(0,s.jsx)(n.em,{children:"edit"})," or ",(0,s.jsx)(n.em,{children:"remove"})," any icon you want."]}),"\n",(0,s.jsx)(n.admonition,{title:"CAUTION",type:"danger",children:(0,s.jsxs)(n.p,{children:["Your loading icon you should remain as ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"spinner"})})," because by this name it is used by other components."]})}),"\n",(0,s.jsxs)(n.p,{children:["After selecting your icons set you must download your fonts and ",(0,s.jsx)(n.code,{children:"selection.json"})," file and load ",(0,s.jsx)(n.code,{children:".ttf"})," file on your project.\nSee section ",(0,s.jsx)(n.a,{href:"/flexnative/docs/components/icons/basic-usage",children:"Basic Usage"})," how to load your icons font."]}),"\n",(0,s.jsxs)(n.p,{children:["After loading your icons font you must override globally ",(0,s.jsx)(n.code,{children:"icon"})," object from ",(0,s.jsx)(n.code,{children:"@flexnative/icons"})," package.\nSee section ",(0,s.jsx)(n.a,{href:"#using-custom-icons-set",children:(0,s.jsx)(n.strong,{children:"Using custom Icons Set"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"using-custom-icons-set",children:"Using custom Icons Set"}),"\n",(0,s.jsx)(n.admonition,{title:"INFO",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"icon"})," object and interface you can create automaticly from section ",(0,s.jsx)(n.a,{href:"#generate-icon-object",children:"Generate Icon object"}),"\nby uploading ",(0,s.jsx)(n.a,{href:"https://icomoon.io/",children:(0,s.jsx)(n.strong,{children:"IcoMoon"})})," ",(0,s.jsx)(n.code,{children:"selection.json"})," file."]})}),"\n",(0,s.jsx)(n.h2,{id:"generate-icon-object",children:"Generate Icon object"}),"\n",(0,s.jsxs)(n.p,{children:["Upload here your ",(0,s.jsx)(n.code,{children:"selection.json"})," file downloaded from ",(0,s.jsx)(n.a,{href:"https://icomoon.io/",children:(0,s.jsx)(n.strong,{children:"IcoMoon"})})," to generate code for icons\nand file to globaly override ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"IconName"})})," interface, for ",(0,s.jsx)(n.code,{children:"@flexnative/icons"})," package."]}),"\n",(0,s.jsx)(d,{})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},7227:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});t(96540);var o=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,a),hidden:t,children:n})}},49489:(e,n,t)=>{"use strict";t.d(n,{A:()=>I});var o=t(96540),s=t(34164),r=t(24245),a=t(56347),i=t(36494),c=t(62814),l=t(45167),u=t(69900);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[a,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,d]=m({queryString:t,groupId:s}),[h,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),g=(()=>{const e=l??h;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=t(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==o&&(l(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function I(e){const n=(0,x.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},65233:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var o=t(96540),s=t(34164),r=t(74848);const a=e=>{let{name:n,segments:t,callback:a,defaultIndex:i=0,controlRef:c}=e;const[l,u]=o.useState(i),d=o.useRef();o.useEffect((()=>{d.current=!0}),[]),o.useEffect((()=>{const e=t[l].ref,{offsetWidth:n,offsetLeft:o}=e.current,{style:s}=c.current;s.setProperty("--highlight-width",`${n}px`),s.setProperty("--highlight-x-pos",`${o}px`)}),[l,a,c,t]);return(0,r.jsx)("div",{className:"segmented-control",ref:c,children:(0,r.jsx)("div",{className:(0,s.A)("controls",d.current?"ready":"idle"),children:t?.map(((e,t)=>(0,r.jsxs)("div",{className:(0,s.A)("segment",t===l?"active":"inactive"),ref:e.ref,children:[(0,r.jsx)("input",{type:"radio",value:e.value,id:e.label,name:n,onChange:()=>{return n=e.value,u(o=t),void a(n,o);var n,o},checked:t===l}),(0,r.jsx)("label",{htmlFor:e.label,children:e.label})]},e.value)))})})}},35013:(e,n,t)=>{"use strict";t.d(n,{K:()=>s,q:()=>o});const o=13,s="/flexnative/img/logo.svg"},42480:(e,n,t)=>{"use strict";t.d(n,{A:()=>f});var o=t(96540),s=t(35013),r=t(64444),a=t(86884),i=t(32533),c=t(17120),l=t(49030),u=t(58424),d=t(73769),p=t(75117);const f={React:o,...o,Avatar:r.Ay,AvatarGroup:r.Z7,Button:a.A,Icon:i.default,Spinner:i.Spinner,BottomSheet:c.A,Tag:l.A,Badge:u.A,SkeletonLoader:d.Ay,Circle:d.jl,Rect:d.rw,TextBox:p.fI,NumericTextBox:p.uI,Check:p.Jl,CheckList:p.Pg,LOGO:s.K}},78982:()=>{},47790:()=>{},73776:()=>{},77965:()=>{},66089:()=>{},79368:()=>{},64688:()=>{},51069:()=>{},15340:()=>{},79838:()=>{},63779:()=>{},77199:()=>{}}]);