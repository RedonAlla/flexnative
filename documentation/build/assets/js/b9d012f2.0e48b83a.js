(self.webpackChunk_flexnative_framework_docks_3=self.webpackChunk_flexnative_framework_docks_3||[]).push([[9189],{22475:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>s,RM:()=>l});var r=t(74848),i=t(28453),o=t(39498);const l=[{value:"Installation",id:"installation",level:2}];function a(e){const n={h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["You can installing ",(0,r.jsx)(n.strong,{children:e.title})," packages using npm:"]}),"\n",(0,r.jsx)(o.A,{language:"bash",children:`npm i ${e.name}`})]})}function s(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},22774:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>L,contentTitle:()=>E,default:()=>I,frontMatter:()=>C,metadata:()=>r,toc:()=>T});const r=JSON.parse('{"id":"components/skeleton-loading/index","title":"Skeleton Loading","description":"The FlexNative Skeleton Loading is part of the FlexNative and is available under the @flexnative/skeleton-loading NPM package.","source":"@site/docs/components/skeleton-loading/index.mdx","sourceDirName":"components/skeleton-loading","slug":"/components/skeleton-loading/","permalink":"/flexnative/docs/components/skeleton-loading/","draft":false,"unlisted":false,"editUrl":"https://github.com/RedonAlla/flexnative/edit/main/documentation/docs/components/skeleton-loading/index.mdx","tags":[{"inline":false,"label":"React","permalink":"/flexnative/docs/tags/react","description":"The library for web and native user interfaces."},{"inline":false,"label":"React Native","permalink":"/flexnative/docs/tags/react-native","description":"Create native apps for Android, iOS, and more using React"},{"inline":false,"label":"Expo","permalink":"/flexnative/docs/tags/expo","description":"Create universal native apps with React that run on Android, iOS, and the web. Iterate with confidence."},{"inline":false,"label":"Framework","permalink":"/flexnative/docs/tags/framework","description":"FlexNative is a component library that enables developers to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web."},{"inline":false,"label":"Component","permalink":"/flexnative/docs/tags/component","description":"Create user interfaces from components."}],"version":"current","lastUpdatedAt":1727136000000,"frontMatter":{"title":"Skeleton Loading","last_update":{"date":"2024-09-24T00:00:00.000Z","author":"Redon Alla"},"tags":["react","react-native","expo","framework","component"]},"sidebar":"componentsSidebar","previous":{"title":"Material","permalink":"/flexnative/docs/components/inputs/text-box/material"},"next":{"title":"Spinner","permalink":"/flexnative/docs/components/spinner/"}}');var i=t(74848),o=t(28453),l=t(22475),a=t(85851),s=t(96540);const d=110;var c=t(73769);const h=class extends s.PureComponent{render(){return(0,i.jsx)("div",{className:"example-block",children:(0,i.jsxs)(c.Ay,{width:"100%",height:d,children:[(0,i.jsx)(c.rw,{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"10"}),(0,i.jsx)(c.rw,{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"56",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"72",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)(c.jl,{cx:"20",cy:"20",r:"20"})]})})}},x='/**\n * @ Author: Redon Alla\n * @ Create Time: 2024-10-17 20:29:33\n * @ Modified by: Redon Alla\n * @ Modified time: 2024-10-17 20:48:57\n * @ Description: Examples of SkeletonLoader component with default settings.\n */\n\nimport React from \'react\';\nimport { SKELETON_HEIGHT } from \'./constants\';\n// highlight-next-line\nimport SkeletonLoader, { Circle, Rect } from \'@flexnative/skeleton-loading\';\n\n\nexport default class extends React.PureComponent {\n  render() {\n    return (\n      <div className=\'example-block\'>\n        <SkeletonLoader width={\'100%\'} height={SKELETON_HEIGHT}>\n          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n          <Circle cx="20" cy="20" r="20" />\n        </SkeletonLoader>\n      </div>\n    );\n  }\n}',u=class extends s.PureComponent{render(){return(0,i.jsx)("div",{className:"example-block",children:(0,i.jsxs)(c.Ay,{width:"100%",height:d,backgroundColor:"crimson",foregroundColor:"#FFC436",children:[(0,i.jsx)(c.rw,{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"10"}),(0,i.jsx)(c.rw,{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"56",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"72",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)(c.jl,{cx:"20",cy:"20",r:"20"})]})})}},m='/**\n * @ Author: Redon Alla\n * @ Create Time: 2024-10-17 20:29:33\n * @ Modified by: Redon Alla\n * @ Modified time: 2024-10-17 20:47:54\n * @ Description: Examples of SkeletonLoader component with backgroundColor and foregroundColor.\n */\n\nimport React from \'react\';\nimport { SKELETON_HEIGHT } from \'./constants\';\n// highlight-next-line\nimport SkeletonLoader, { Circle, Rect } from \'@flexnative/skeleton-loading\';\n\n\nexport default class extends React.PureComponent {\n  render() {\n    return (\n      <div className=\'example-block\'>\n        <SkeletonLoader width={\'100%\'} height={SKELETON_HEIGHT} backgroundColor=\'crimson\' foregroundColor=\'#FFC436\'>\n          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n          <Circle cx="20" cy="20" r="20" />\n        </SkeletonLoader>\n      </div>\n    );\n  }\n}',p=class extends s.PureComponent{render(){return(0,i.jsx)("div",{className:"example-block",children:(0,i.jsxs)(c.Ay,{width:"100%",height:d,speed:.5,children:[(0,i.jsx)(c.rw,{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"10"}),(0,i.jsx)(c.rw,{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"56",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"72",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)(c.jl,{cx:"20",cy:"20",r:"20"})]})})}},g='/**\n * @ Author: Redon Alla\n * @ Create Time: 2024-10-17 20:29:33\n * @ Modified by: Redon Alla\n * @ Modified time: 2024-10-17 20:51:18\n * @ Description: Examples of SkeletonLoader component with custom speed (animation speed).\n */\n\nimport React from \'react\';\nimport { SKELETON_HEIGHT } from \'./constants\';\n// highlight-next-line\nimport SkeletonLoader, { Circle, Rect } from \'@flexnative/skeleton-loading\';\n\n\nexport default class extends React.PureComponent {\n  render() {\n    return (\n      <div className=\'example-block\'>\n        <SkeletonLoader width={\'100%\'} height={SKELETON_HEIGHT} speed={0.5}>\n          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n          <Circle cx="20" cy="20" r="20" />\n        </SkeletonLoader>\n      </div>\n    );\n  }\n}',y=class extends s.PureComponent{render(){return(0,i.jsxs)("div",{className:"example-block",children:[(0,i.jsxs)(c.Ay,{width:"100%",height:d,animate:!0,children:[(0,i.jsx)(c.rw,{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"10"}),(0,i.jsx)(c.rw,{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"56",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"72",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)(c.jl,{cx:"20",cy:"20",r:"20"})]}),(0,i.jsxs)(c.Ay,{width:"100%",height:d,animate:!1,children:[(0,i.jsx)(c.rw,{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"10"}),(0,i.jsx)(c.rw,{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"56",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"72",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)(c.jl,{cx:"20",cy:"20",r:"20"})]})]})}},j='/**\n * @ Author: Redon Alla\n * @ Create Time: 2024-10-17 20:29:33\n * @ Modified by: Redon Alla\n * @ Modified time: 2024-10-17 21:27:04\n * @ Description: Examples of SkeletonLoader component with animation.\n */\n\nimport React from \'react\';\nimport { SKELETON_HEIGHT } from \'./constants\';\n// highlight-next-line\nimport SkeletonLoader, { Circle, Rect } from \'@flexnative/skeleton-loading\';\n\n\nexport default class extends React.PureComponent {\n  render() {\n    return (\n      <div className=\'example-block\'>\n        <SkeletonLoader width={\'100%\'} height={SKELETON_HEIGHT} animate={true} >\n          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n          <Circle cx="20" cy="20" r="20" />\n        </SkeletonLoader>\n\n        <SkeletonLoader width={\'100%\'}  height={SKELETON_HEIGHT} animate={false}>\n          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n          <Circle cx="20" cy="20" r="20" />\n        </SkeletonLoader>\n      </div>\n    );\n  }\n}',f=class extends s.PureComponent{render(){return(0,i.jsx)("div",{className:"example-block",children:(0,i.jsxs)(c.Ay,{width:"100%",height:d,interval:2,children:[(0,i.jsx)(c.rw,{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"10"}),(0,i.jsx)(c.rw,{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"56",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"72",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)(c.jl,{cx:"20",cy:"20",r:"20"})]})})}},v='/**\n * @ Author: Redon Alla\n * @ Create Time: 2024-10-17 20:29:33\n * @ Modified by: Redon Alla\n * @ Modified time: 2024-10-17 21:29:48\n * @ Description: Examples of SkeletonLoader component with animation interval.\n */\n\nimport React from \'react\';\nimport { SKELETON_HEIGHT } from \'./constants\';\n// highlight-next-line\nimport SkeletonLoader, { Circle, Rect } from \'@flexnative/skeleton-loading\';\n\n\nexport default class extends React.PureComponent {\n  render() {\n    return (\n      <div className=\'example-block\'>\n        <SkeletonLoader width={\'100%\'} height={SKELETON_HEIGHT} interval={2}>\n          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n          <Circle cx="20" cy="20" r="20" />\n        </SkeletonLoader>\n      </div>\n    );\n  }\n}';var w=t(71582),b=t(32533);const k=class extends s.PureComponent{render(){return(0,i.jsx)("div",{className:"example-block",children:(0,i.jsxs)(c.Ay,{width:"100%",height:d,beforeMask:(0,i.jsx)(R,{}),children:[(0,i.jsx)(c.rw,{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"10"}),(0,i.jsx)(c.rw,{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"56",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"72",rx:"3",ry:"3",width:"100%",height:"6"}),(0,i.jsx)(c.rw,{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)(c.jl,{cx:"20",cy:"20",r:"20"})]})})}};function R(){return(0,i.jsxs)(w.EY,{style:S.label,children:["Mask Before ",(0,i.jsx)(b.default,{name:"avatar",size:65,onPress:()=>console.log("BeforeMask clicked")})]})}const S=w.vv.create({label:{fontSize:65,color:"crimson"}}),A='/**\n * @ Author: Redon Alla\n * @ Create Time: 2024-10-17 20:29:33\n * @ Modified by: Redon Alla\n * @ Modified time: 2024-10-17 21:34:23\n * @ Description: Examples of SkeletonLoader component with Mask.\n */\n\nimport React from \'react\';\nimport { Text, StyleSheet } from \'react-native\';\nimport Icon from \'@flexnative/icons\';\nimport { SKELETON_HEIGHT } from \'./constants\';\n// highlight-next-line\nimport SkeletonLoader, { Circle, Rect } from \'@flexnative/skeleton-loading\';\n\n\nexport default class extends React.PureComponent {\n  render() {\n    return (\n      <div className=\'example-block\'>\n        <SkeletonLoader width={\'100%\'} height={SKELETON_HEIGHT} beforeMask={<BeforeMask />}>\n          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n          <Circle cx="20" cy="20" r="20" />\n        </SkeletonLoader>\n      </div>\n    );\n  }\n}\n\nfunction BeforeMask() {\n  const openAlert = () => console.log(\'BeforeMask clicked\');\n    \n  return <Text style={styles.label}>\n    Mask Before <Icon name="avatar" size={65} onPress={openAlert} />\n  </Text>;\n}\n\nconst styles = StyleSheet.create({\n  label: {\n    fontSize: 65,\n    color: \'crimson\'\n  }\n});',C={title:"Skeleton Loading",last_update:{date:new Date("2024-09-24T00:00:00.000Z"),author:"Redon Alla"},tags:["react","react-native","expo","framework","component"]},E=void 0,L={},T=[{value:"Dependencies",id:"dependencies",level:2},...l.RM,{value:"API",id:"api",level:2},{value:"Component",id:"component",level:2},{value:"Properties",id:"properties",level:2},{value:"Usecase Examples",id:"usecase-examples",level:2},{value:"Default",id:"default",level:3},{value:"Colors",id:"colors",level:3},{value:"Animation Speed",id:"animation-speed",level:3},{value:"Animation",id:"animation",level:3},{value:"Animation Interval",id:"animation-interval",level:3},{value:"Mask",id:"mask",level:3},{value:"Playground",id:"playground",level:2}];function N(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"FlexNative Skeleton Loading"})," is part of the ",(0,i.jsx)(n.code,{children:"FlexNative"})," and is available under the ",(0,i.jsx)(n.code,{children:"@flexnative/skeleton-loading"})," NPM package."]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/flexnative/docs/theme/",children:(0,i.jsx)(n.code,{children:"@flexnative/theme-context"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-svg",children:(0,i.jsx)(n.code,{children:"react-native-svg"})})}),"\n"]}),"\n",(0,i.jsx)(l.Ay,{title:"FlexNative Skeleton Loading",name:"@flexnative/skeleton-loading"}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import SkeletonLoader from '@flexnative/skeleton-loading';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"SkeletonLoader"})}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsxs)("code",{children:["React.Component<",(0,i.jsx)(n.a,{href:"#properties",children:"IContentLoaderProps<T>"}),">"]})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"IContentLoaderProps"})})," props extends ",(0,i.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-svg",children:(0,i.jsx)(n.code,{children:"SvgProps"})}),"\nso any ",(0,i.jsx)(n.a,{href:"https://github.com/software-mansion/react-native-svg",children:(0,i.jsx)(n.code,{children:"SvgProps"})})," propertie it is applicable also in ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"IContentLoaderProps"})})]})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"animate"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{children:"Boolean indicator whether to animate skeleton loading or not."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"backgroundColor"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/colors",children:(0,i.jsx)(n.code,{children:"ColorValue"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Background color."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"foregroundColor"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/colors",children:(0,i.jsx)(n.code,{children:"ColorValue"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:"Foreground color."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"speed"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.2"})}),(0,i.jsx)(n.td,{children:"Animation speed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"interval"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0.25"})}),(0,i.jsx)(n.td,{children:"Animation interval."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uniqueKey"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"random string"})}),(0,i.jsxs)(n.td,{children:["Used for unique key for ",(0,i.jsx)(n.code,{children:"<Rect fill='' clipPath='' />"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"beforeMask"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JSX.Element"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"random string"})}),(0,i.jsx)(n.td,{children:"Costum JSX.Element to render before loading mask."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"usecase-examples",children:"Usecase Examples"}),"\n",(0,i.jsxs)(n.p,{children:["The following example demonstrates the ",(0,i.jsx)(n.strong,{children:"FlexNative Skeleton Loading"})," in action."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"In documentation apprence of components may not be in correct way.\nTo view the component in exact design please view the demo app."})}),"\n",(0,i.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,i.jsx)(a.A,{codeExample:x,children:(0,i.jsx)(h,{})}),"\n",(0,i.jsx)(n.h3,{id:"colors",children:"Colors"}),"\n",(0,i.jsx)(a.A,{codeExample:m,children:(0,i.jsx)(u,{})}),"\n",(0,i.jsx)(n.h3,{id:"animation-speed",children:"Animation Speed"}),"\n",(0,i.jsx)(a.A,{codeExample:g,children:(0,i.jsx)(p,{})}),"\n",(0,i.jsx)(n.h3,{id:"animation",children:"Animation"}),"\n",(0,i.jsx)(a.A,{codeExample:j,children:(0,i.jsx)(y,{})}),"\n",(0,i.jsx)(n.h3,{id:"animation-interval",children:"Animation Interval"}),"\n",(0,i.jsx)(a.A,{codeExample:v,children:(0,i.jsx)(f,{})}),"\n",(0,i.jsx)(n.h3,{id:"mask",children:"Mask"}),"\n",(0,i.jsx)(a.A,{codeExample:A,children:(0,i.jsx)(k,{})}),"\n",(0,i.jsx)(n.h2,{id:"playground",children:"Playground"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'//Play with props to see live changes;\n\nrender(\n  <SkeletonLoader width={\'100%\'} height={110} animate={true} backgroundColor=\'crimson\' foregroundColor=\'#FFC436\'>\n    <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />\n    <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n    <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />\n    <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />\n    <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n    <Circle cx="20" cy="20" r="20" />\n  </SkeletonLoader>\n);\n'})})]})}function I(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}},7227:(e,n,t)=>{"use strict";t.d(n,{A:()=>l});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var o=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:t,children:n})}},49489:(e,n,t)=>{"use strict";t.d(n,{A:()=>b});var r=t(96540),i=t(34164),o=t(24245),l=t(56347),a=t(36494),s=t(62814),d=t(45167),c=t(69900);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=x(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[d,h]=m({queryString:t,groupId:i}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),y=(()=>{const e=d??p;return u({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),g(e)}),[h,g,o]),tabValues:o}}var g=t(11062);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),i=a[t].value;i!==r&&(d(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:h,onClick:c,...o,className:(0,i.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function b(e){const n=(0,g.A)();return(0,j.jsx)(w,{...e,children:h(e.children)},String(n))}},85851:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var r=t(96540),i=t(49489),o=t(7227),l=t(39498),a=t(74848);const s=class extends r.PureComponent{render(){return(0,a.jsxs)(i.A,{className:"demo-tabs",children:[(0,a.jsx)(o.A,{value:"preview",label:"Preview",default:!0,children:this.props.children}),(0,a.jsx)(o.A,{value:"code",label:"Code",children:(0,a.jsx)(l.A,{showLineNumbers:!0,language:"jsx",children:this.props.codeExample})})]})}}},35013:(e,n,t)=>{"use strict";t.d(n,{K:()=>i,q:()=>r});const r=13,i="/flexnative/img/logo.svg"},42480:(e,n,t)=>{"use strict";t.d(n,{A:()=>u});var r=t(96540),i=t(35013),o=t(64444),l=t(86884),a=t(32533),s=t(17120),d=t(49030),c=t(58424),h=t(73769),x=t(75117);const u={React:r,...r,Avatar:o.Ay,AvatarGroup:o.Z7,Button:l.A,Icon:a.default,Spinner:a.Spinner,BottomSheet:s.A,Tag:d.A,Badge:c.A,SkeletonLoader:h.Ay,Circle:h.jl,Rect:h.rw,TextBox:x.fI,NumericTextBox:x.uI,Check:x.Jl,CheckList:x.Pg,LOGO:i.K}},78982:()=>{},47790:()=>{},73776:()=>{},77965:()=>{},66089:()=>{},79368:()=>{},64688:()=>{},51069:()=>{},15340:()=>{},79838:()=>{},63779:()=>{},77199:()=>{}}]);