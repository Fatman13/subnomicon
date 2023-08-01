"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5891:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"Overview",sidebar_position:1,description:"Decoupled Execution Overview",keywords:["DecEx","Domains"]},a=void 0,c={unversionedId:"decex/overview",id:"decex/overview",title:"Overview",description:"Decoupled Execution Overview",source:"@site/docs/decex/overview.md",sourceDirName:"decex",slug:"/decex/overview",permalink:"/docs/decex/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,description:"Decoupled Execution Overview",keywords:["DecEx","Domains"]},sidebar:"tutorialSidebar",previous:{title:"Decoupled Execution",permalink:"/docs/category/decoupled-execution"},next:{title:"Domains",permalink:"/docs/category/domains"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Subspace introduces a decoupled execution framework (DecEx) to resolve the problem of state-bloat. Under this framework, farmers will only confirm the availability of transactions and provide an ordering, while a secondary network of staked operator nodes will execute the transactions and maintain the resulting chain state. DecEx separates the probabilistic process of coming to consensus over the ordering of transactions from the deterministic process of executing transactions. Since these roles are now decoupled, we can have different hardware requirements for each node type, allowing us to keep farming lightweight and open to anyone, while also providing a foundation for scaling execution both vertically, based on the hardware capabilities of operators, and horizontally, by later partitioning operators into different namespaced execution domains.\nIn this model, users submit execution transactions directly to operators, who will then pre-validate and batch these transactions into bundles through a (probabilistic) stake-weighted election process. These bundles are then submitted to farmers, who treat them as base layer transactions. Farmers will only verify the proof-of-election and ensure the data is available, before batching bundles into blocks in the usual manner. Execution transactions are then ordered deterministically, using a secure cryptographic shuffle based on the unique PoAS produced by the farmer, mitigating Miner Extractable Value (MEV). Operators then execute the transactions according to this ordering and produce a deterministic state commitment in the form of an execution receipt. These state commitments are then included in the next bundle, forming a deterministic receipt chain, tracked by all farmers within the core protocol. The initial, default implementation of DecEX employs an optimistic fraud-proof validation scheme."),(0,o.kt)("p",null,"While conceptually similar to rollups on Ethereum, such as Optimism, DecEx differs heavily in its protocol implementation. Unlike Ethereum, Subspace does not have a global smart contract execution environment within the core protocol. Instead DecEx is enshrined within the semantics of the core protocol itself. Despite being implemented at the protocol level, DecEx is still able to provide rollup protocol designers with a flexible framework, which can support any state transition integrity framework for verifying the receipt chain, including optimistic fraud proofs and zero-knowledge validity proofs. DecEx can also currently support any smart contract execution environment that can be implemented within the Substrate framework, such as the Ethereum Virtual Machine (EVM) or Web-Assembly (WASM)."))}u.isMDXComponent=!0}}]);