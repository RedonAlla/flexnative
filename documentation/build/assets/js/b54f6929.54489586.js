(self.webpackChunk_flexnative_framework_docks_3=self.webpackChunk_flexnative_framework_docks_3||[]).push([[4554],{5124:(e,r,s)=>{"use strict";s.r(r),s.d(r,{assets:()=>j,contentTitle:()=>h,default:()=>m,frontMatter:()=>x,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"components/avatar/single/index","title":"Single Avatar","description":"API","source":"@site/docs/components/avatar/single/index.mdx","sourceDirName":"components/avatar/single","slug":"/components/avatar/single/","permalink":"/flexnative/docs/components/avatar/single/","draft":false,"unlisted":false,"editUrl":"https://github.com/RedonAlla/flexnative/edit/main/documentation/docs/components/avatar/single/index.mdx","tags":[{"inline":false,"label":"React","permalink":"/flexnative/docs/tags/react","description":"The library for web and native user interfaces."},{"inline":false,"label":"React Native","permalink":"/flexnative/docs/tags/react-native","description":"Create native apps for Android, iOS, and more using React"},{"inline":false,"label":"Expo","permalink":"/flexnative/docs/tags/expo","description":"Create universal native apps with React that run on Android, iOS, and the web. Iterate with confidence."},{"inline":false,"label":"Framework","permalink":"/flexnative/docs/tags/framework","description":"FlexNative is a component library that enables developers to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web."},{"inline":false,"label":"Component","permalink":"/flexnative/docs/tags/component","description":"Create user interfaces from components."},{"inline":false,"label":"Avatar","permalink":"/flexnative/docs/tags/avatars","description":"Avatars can be used to represent people or objects. It supports images, Icons, or letters."}],"version":"current","lastUpdatedAt":1727136000000,"sidebarPosition":1,"frontMatter":{"title":"Single Avatar","sidebar_position":1,"last_update":{"date":"2024-09-24T00:00:00.000Z","author":"Redon Alla"},"tags":["react","react-native","expo","framework","component","avatar"]},"sidebar":"componentsSidebar","previous":{"title":"Avatar","permalink":"/flexnative/docs/components/avatar/"},"next":{"title":"Icon Type","permalink":"/flexnative/docs/components/avatar/single/icon-type"}}');var t=s(74848),d=s(28453),i=s(54182),l=s(57300),c=s(1886),o=s(51128),a=s(93935);const x={title:"Single Avatar",sidebar_position:1,last_update:{date:new Date("2024-09-24T00:00:00.000Z"),author:"Redon Alla"},tags:["react","react-native","expo","framework","component","avatar"]},h=void 0,j={},p=[{value:"API",id:"api",level:2},{value:"Component",id:"component",level:2},{value:"Props",id:"props",level:2},{value:"AvatarProps",id:"avatarprops",level:3},{value:"Type",id:"type",level:3},{value:"FillMode",id:"fillmode",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Usecase Examples",id:"usecase-examples",level:2},{value:"Image Type",id:"image-type",level:3},{value:"Icon Type",id:"icon-type",level:3},{value:"Text Type",id:"text-type",level:3},{value:"Playground",id:"playground",level:2}];function v(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"import Avatar from '@flexnative/avatar';\n"})}),"\n",(0,t.jsx)(r.h2,{id:"component",children:"Component"}),"\n",(0,t.jsx)(r.p,{children:"A React PureComponent that renders an avatar component with various customization options."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Avatar"})}),"\n",(0,t.jsxs)(r.p,{children:["Type: ",(0,t.jsx)(r.code,{children:"React.PureComponent<AvatarProps>"})]}),"\n",(0,t.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,t.jsx)(r.p,{children:"Properties for the Avatar component."}),"\n",(0,t.jsx)(r.h3,{id:"avatarprops",children:"AvatarProps"}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"AvatarProps"})," of ",(0,t.jsx)(r.code,{children:"@flexnative/avatar"})," package extends\n",(0,t.jsx)(r.a,{href:"https://docs.expo.dev/versions/latest/sdk/image/#imageprops",children:(0,t.jsx)(r.code,{children:"ImageProps"})})," | ",(0,t.jsx)(r.a,{href:"https://reactnative.dev/docs/text#props",children:(0,t.jsx)(r.code,{children:"TextProps"})}),"."]})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"type"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#type",children:(0,t.jsx)(r.code,{children:"Type"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"true"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"image"})}),(0,t.jsxs)(r.td,{children:["Defines the type of avatar to be displayed. ",(0,t.jsx)(r.code,{children:"image"}),", ",(0,t.jsx)(r.code,{children:"icon"})," and ",(0,t.jsx)(r.code,{children:"text"})," are supported."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fillMode"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#fillmode",children:(0,t.jsx)(r.code,{children:"FillMode"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"solid"})}),(0,t.jsx)(r.td,{children:"Represents the fill mode for an avatar component."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"radius"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../theme/default-theme#borderradius",children:(0,t.jsx)(r.code,{children:"BorderRadius"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"full"})}),(0,t.jsx)(r.td,{children:"Avatar border radius."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"size"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../theme/default-theme#sizes",children:(0,t.jsx)(r.code,{children:"Sizes"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"medium"})}),(0,t.jsx)(r.td,{children:"Avatar Size."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"backgroundColor"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://reactnative.dev/docs/colors",children:(0,t.jsx)(r.code,{children:"ColorValue"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Background color according ",(0,t.jsx)(r.code,{children:"react-native"})," ColorValue."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"borderColor"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://reactnative.dev/docs/colors",children:(0,t.jsx)(r.code,{children:"ColorValue"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Borders color according ",(0,t.jsx)(r.code,{children:"react-native"})," ColorValue."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"color"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://reactnative.dev/docs/colors",children:(0,t.jsx)(r.code,{children:"ColorValue"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"default"})}),(0,t.jsxs)(r.td,{children:["Color by theme or a custom color according ",(0,t.jsx)(r.code,{children:"react-native"})," ColorValue."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"borderWidth"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../../../theme/default-theme#borderwidth",children:(0,t.jsx)(r.code,{children:"BorderWidth"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"none"})}),(0,t.jsx)(r.td,{children:"Optional avatar borders width."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"text"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Text to display on avatar for type ",(0,t.jsx)(r.code,{children:"Type = 'text'"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"textColor"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://reactnative.dev/docs/colors",children:(0,t.jsx)(r.code,{children:"ColorValue"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Text color according ",(0,t.jsx)(r.code,{children:"react-native"})," ColorValue. Available for ",(0,t.jsx)(r.code,{children:"Type = 'text'"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"icon"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/components/icons/@flexnative/icons-basic-usage#iconname",children:(0,t.jsx)(r.code,{children:"IconName"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Name of icon. Icon props for ",(0,t.jsx)(r.code,{children:"Avatar Type = 'icon'"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"iconColor"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://reactnative.dev/docs/colors",children:(0,t.jsx)(r.code,{children:"ColorValue"})})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"false"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Icon color according ",(0,t.jsx)(r.code,{children:"react-native"})," ColorValue. Available for ",(0,t.jsx)(r.code,{children:"Type = 'icon'"})]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(r.p,{children:["Defines the type of avatar to be displayed.\nOne of ",(0,t.jsx)(r.code,{children:"'image' | 'icon' | 'text'"})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"image"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{children:"An avatar that displays an image."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"icon"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{children:"An avatar that displays an icon."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"text"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{children:"An avatar that displays text."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"fillmode",children:"FillMode"}),"\n",(0,t.jsxs)(r.p,{children:["Represents the fill mode for an avatar component.\nOne of ",(0,t.jsx)(r.code,{children:"'solid' | 'none' | 'ghost'"})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"solid"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{children:"The avatar will have a solid fill."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"none"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"none"})}),(0,t.jsx)(r.td,{children:"The avatar will have no fill."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ghost"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"ghost"})}),(0,t.jsxs)(r.td,{children:["The avatar will have a ghost fill. ",(0,t.jsxs)(i.A,{type:"warning",children:["To have good appearance for ",(0,t.jsx)("code",{children:"'ghost'"}),", with custom color you should use hex colors."]})]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"sizes",children:"Sizes"}),"\n",(0,t.jsxs)(r.p,{children:["One of ",(0,t.jsx)(r.code,{children:"'small' | 'medium' | 'large' | number"})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"small"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"number"})}),(0,t.jsx)(r.td,{children:"24"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"medium"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"number"})}),(0,t.jsx)(r.td,{children:"40"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"large"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"number"})}),(0,t.jsx)(r.td,{children:"64"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"number"})}),(0,t.jsx)(r.td,{children:"Any number value"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"usecase-examples",children:"Usecase Examples"}),"\n",(0,t.jsx)(r.p,{children:"The following example demonstrates the different types of Avatar in action."}),"\n",(0,t.jsx)(r.h3,{id:"image-type",children:"Image Type"}),"\n",(0,t.jsx)(l.A,{}),"\n",(0,t.jsx)(r.h3,{id:"icon-type",children:"Icon Type"}),"\n",(0,t.jsx)(c.A,{}),"\n",(0,t.jsx)(r.h3,{id:"text-type",children:"Text Type"}),"\n",(0,t.jsx)(o.A,{}),"\n",(0,t.jsx)(r.h2,{id:"playground",children:"Playground"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:"//Play with props to see live changes;\n\nrender(<Avatar source={LOGO} size={120} color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>);\n"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n","\n",(0,t.jsx)(a.A,{})]})}function m(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},1886:(e,r,s)=>{"use strict";s.d(r,{A:()=>i});var n=s(96540),t=s(64444),d=s(74848);const i=class extends n.PureComponent{render(){return(0,d.jsxs)("div",{className:"example-block",children:[(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"primary"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"secondary"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"success"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"info"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"warning"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"error"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"default"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"dark"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"light"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"crimson"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"#ed143d"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"rgb(237, 20, 61)"}),(0,d.jsx)(t.Ay,{icon:"avatar",type:"icon",color:"rgba(237, 20, 61, 0.5)"})]})}}},57300:(e,r,s)=>{"use strict";s.d(r,{A:()=>l});var n=s(96540),t=s(64444),d=s(35013),i=s(74848);const l=class extends n.PureComponent{render(){return(0,i.jsxs)("div",{className:"example-block",children:[(0,i.jsx)(t.Ay,{source:d.K,color:"primary"}),(0,i.jsx)(t.Ay,{source:d.K,color:"secondary"}),(0,i.jsx)(t.Ay,{source:d.K,color:"success"}),(0,i.jsx)(t.Ay,{source:d.K,color:"info"}),(0,i.jsx)(t.Ay,{source:d.K,color:"warning"}),(0,i.jsx)(t.Ay,{source:d.K,color:"error"}),(0,i.jsx)(t.Ay,{source:d.K,color:"default"}),(0,i.jsx)(t.Ay,{source:d.K,color:"dark"}),(0,i.jsx)(t.Ay,{source:d.K,color:"light"}),(0,i.jsx)(t.Ay,{source:d.K,color:"crimson"}),(0,i.jsx)(t.Ay,{source:d.K,color:"#ed143d"}),(0,i.jsx)(t.Ay,{source:d.K,color:"rgb(237, 20, 61)"}),(0,i.jsx)(t.Ay,{source:d.K,color:"rgba(237, 20, 61, 0.5)"})]})}}},51128:(e,r,s)=>{"use strict";s.d(r,{A:()=>i});var n=s(96540),t=s(64444),d=s(74848);const i=class extends n.PureComponent{render(){return(0,d.jsxs)("div",{className:"example-block",children:[(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"primary"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"secondary"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"success"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"info"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"warning"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"error"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"default"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"dark"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"light"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"crimson"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"#ed143d"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"rgb(237, 20, 61)"}),(0,d.jsx)(t.Ay,{text:"R A",type:"text",color:"rgba(237, 20, 61, 0.5)"})]})}}},35013:(e,r,s)=>{"use strict";s.d(r,{K:()=>t,q:()=>n});const n=13,t="/flexnative/img/logo.svg"},78982:()=>{},47790:()=>{},73776:()=>{},77965:()=>{},66089:()=>{},79368:()=>{},64688:()=>{},51069:()=>{},15340:()=>{},79838:()=>{},63779:()=>{},77199:()=>{}}]);