"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[96],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"Node Types and Roles",sidebar_position:1,description:"Participants in the Subspace Network",keywords:["Consensus","Network","Node","Peer"]},a=void 0,s={unversionedId:"network/nodes",id:"network/nodes",title:"Node Types and Roles",description:"Participants in the Subspace Network",source:"@site/docs/network/nodes.md",sourceDirName:"network",slug:"/network/nodes",permalink:"/docs/network/nodes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Node Types and Roles",sidebar_position:1,description:"Participants in the Subspace Network",keywords:["Consensus","Network","Node","Peer"]},sidebar:"tutorialSidebar",previous:{title:"Network Architecture",permalink:"/docs/category/network-architecture"},next:{title:"Distributed Storage Network",permalink:"/docs/network/dsn"}},l={},c=[{value:"Node Configurations",id:"node-configurations",level:2},{value:"Full Node",id:"full-node",level:3},{value:"Archival Node",id:"archival-node",level:3},{value:"Light Client",id:"light-client",level:3},{value:"Node Roles",id:"node-roles",level:2},{value:"Farmer",id:"farmer",level:3},{value:"Domain Operator",id:"domain-operator",level:3},{value:"Timekeeper",id:"timekeeper",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"node-configurations"},"Node Configurations"),(0,o.kt)("p",null,"A Subspace Node can run in several modes depending on configuration:"),(0,o.kt)("h3",{id:"full-node"},"Full Node"),(0,o.kt)("p",null,"Full Nodes participate fully in the network by processing all blocks and serving peers. Full nodes retain recent history and state for a configurable number of recent blocks until it is archived and pruned. A full node is a default configuration for farmers and operators."),(0,o.kt)("h3",{id:"archival-node"},"Archival Node"),(0,o.kt)("p",null,"Archival Nodes' responsibilities are a superset of those of full nodes. They retain the entire blockchain history and state and perform all the functions of full nodes. Archival nodes are helpful for block explorers and historical queries. Subspace Labs will maintain several archival nodes as a public good."),(0,o.kt)("h3",{id:"light-client"},"Light Client"),(0,o.kt)("p",null,"A Light Client node does not retain the full blockchain state. Instead, it connects to full nodes and processes block headers but doesn't run the state transitions nor retain any history. Light clients are useful for mobile or low-resource devices that need to interact with the network without running a full node. For instance, it can run in a browser with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-connect"},"Substrate Connect"),"."),(0,o.kt)("p",null,"The network's health, robustness, and resistance to censorship rely on the constant online presence of numerous full nodes independently managed and spread across different geographic locations. Each full node supports newly joined nodes by providing them with the necessary block data to start their participation. Additionally, operating a full node allows the participant to verify all blocks, ensuring an authoritative assessment independently.\nSubspace is dedicated to promoting decentralization through full nodes by keeping the hardware requirements low enough that individuals can run them from home while providing sufficient resources to support the network."),(0,o.kt)("h2",{id:"node-roles"},"Node Roles"),(0,o.kt)("p",null,"The Subspace network is made up of different types of nodes that each play a specific role:"),(0,o.kt)("h3",{id:"farmer"},"Farmer"),(0,o.kt)("p",null,"A Farmer is responsible for maintaining consensus (safety of the Consensus Chain). A Farmer plots pieces of Archival History to disk, farms the created plot for block rewards, and joins the DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients)."),(0,o.kt)("h3",{id:"domain-operator"},"Domain Operator"),(0,o.kt)("p",null,"A Domain Operator is responsible for running arbitrary computations on Domains, state transitions, and maintaining state (liveness of the Execution Chain)."),(0,o.kt)("h3",{id:"timekeeper"},"Timekeeper"),(0,o.kt)("p",null,"A Timekeeper is responsible for running the Proof-of-Time chain and maintaining the randomness beacon for the Consensus Chain."))}u.isMDXComponent=!0}}]);