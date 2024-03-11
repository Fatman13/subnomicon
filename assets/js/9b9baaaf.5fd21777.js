"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[668],{7268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(7624),a=n(2172);const i={title:"Proof-of-Time",sidebar_position:5,description:"Proof-of-Time consensus component",keywords:["Consensus","randomness","challenge"]},s="Design challenges",r={id:"consensus/pot",title:"Proof-of-Time",description:"Proof-of-Time consensus component",source:"@site/docs/consensus/pot.md",sourceDirName:"consensus",slug:"/consensus/pot",permalink:"/docs/consensus/pot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Proof-of-Time",sidebar_position:5,description:"Proof-of-Time consensus component",keywords:["Consensus","randomness","challenge"]},sidebar:"tutorialSidebar",previous:{title:"Farming",permalink:"/docs/consensus/consensus/farming"},next:{title:"Security",permalink:"/docs/consensus/security"}},l={},c=[{value:"Long-range attack",id:"long-range-attack",level:2},{value:"Availability and Unpredictability",id:"availability-and-unpredictability",level:2},{value:"Timekeeping",id:"timekeeping",level:2},{value:"Randomness Beacon",id:"randomness-beacon",level:2},{value:"Delay Function Choice",id:"delay-function-choice",level:2},{value:"Security Considerations",id:"security-considerations",level:2}];function h(e){const t={a:"a",annotation:"annotation",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In addition to the Proof-of-Space component described in the previous section, Dilithium is secured by a Proof-of-Time (PoT) component. The chosen PoT algorithm is sequential AES, tuned for 1 second per proof. PoT is a measure against long-range attacks, and addresses unpredictability and dynamic availability issues."}),"\n",(0,o.jsx)(t.p,{children:"The permissionless Proof-of-Work (PoW) used by Bitcoin remains the most robust consensus method in decentralized systems. However, mining requires massive energy expenditure to brute-force hash solutions, which has led to the introduction of various alternative consensus mechanisms. When transitioning to energy-efficient proof systems, like Proof-of-Stake and Proof-of-Space, however, several issues arise."}),"\n",(0,o.jsx)(t.h1,{id:"design-challenges",children:"Design challenges"}),"\n",(0,o.jsx)(t.h2,{id:"long-range-attack",children:"Long-range attack"}),"\n",(0,o.jsxs)(t.p,{children:["Unlike in Proof-of-Work, the process of block production in Proof-of-Stake and Proof-of-Space-based\nblockchains is not physically constrained. This makes such protocols vulnerable to a ",(0,o.jsx)(t.em,{children:"long-range attack"}),', where an attacker can produce, very quickly, an alternative chain all the way to the current time, and this chain can potentially be heavier than the current "canonical" chain.']}),"\n",(0,o.jsxs)("div",{align:"center",children:[(0,o.jsx)("img",{src:"/img/Long_Range_Attack-light.svg#gh-light-mode-only",alt:"Long_Range_Attack"}),(0,o.jsx)("img",{src:"/img/Long_Range_Attack-dark.svg#gh-dark-mode-only",alt:"Long_Range_Attack"})]}),"\n",(0,o.jsx)(t.p,{children:"To perfrm a long-range attack, an adversary needs to control enough resources at some point of chain life to rewrite a significant portion of the chain history. In PoW protocols like Bitcoin, this requires controlling over 50% of the total network hashrate for a sustained period of time which is infeasible in practice. However, long-range attacks remain a serious threat in alternative consensus protocols that do not rely on Proof-of-Work."}),"\n",(0,o.jsx)(t.p,{children:"Let's show how a Proof-of-Space blockchain can be vulnerable to long-range attacks. Similar attack applies to Proof-of-Stake.\nSuppose in the first year of the blockchain's operation, all farmers were honest and have collectively pledged 100TB of storage. Now, suppose by the second year the total storage pledged reached 1PB, out of which an adversary has dedicated 200TB worth of storage. At no point does an adversary control more than 20% of storage, which is way less than a majority. However, using his 200TB, an adversary could rewrite the past year's history by participating in all past lotteries to win blocks back to the genesis and then grow a chain instantaneously from the genesis to surpass the current longest chain. This is possible because the adversary's resources are enough to win a disproportionately large number of past lotteries compared to his share of total storage. Such a long-range rewrite seriously threatens the security and immutability of blockchain history."}),"\n",(0,o.jsx)(t.p,{children:"On the other hand, in PoW this attack is prevented as it takes a long time to mine an alternative chain from the past. Thus, PoW enforces an arrow of time, where it is not practical to \u201cgo back in time\u201d (unless the attacker has more than 50% of the current hashrate). This property is key to tolerating a fully dynamic honest and adversarial participation."}),"\n",(0,o.jsx)(t.h2,{id:"availability-and-unpredictability",children:"Availability and Unpredictability"}),"\n",(0,o.jsx)(t.p,{children:"Alternative proof systems, including Proof-of-Stake and Proof-of-Space, strive for certain important features of PoW, like dynamic availability and unpredictability."}),"\n",(0,o.jsx)(t.p,{children:"Dynamic availability in blockchains refers to the capacity of the system to maintain robust operation in environments where nodes may join or leave dynamically. The permissionless PoW remains the most robust method for achieving consistent availability and unpredictability in a decentralized system. Bitcoin has been continuously available for over a decade despite an always varying hashrate due to miners joining and leaving the network."}),"\n",(0,o.jsx)(t.p,{children:"In this setting, unpredictability refers to the inability to predict who will get to propose the next block. Unpredictability of block proposers is important for the security and liveness of the network. However, protocols using generic verifiable random functions to elect block proposers usually do not achieve this property at the same level as in PoW, and may suffer from a long predictability window of block challenges."}),"\n",(0,o.jsx)(t.h1,{id:"subspace-approach",children:"Subspace Approach"}),"\n",(0,o.jsx)(t.p,{children:"Subspace uses Proof-of-Time to a form a separate Proof-of-Time chain. The Proof-of-Space and Proof-of-Time chains are inter-connected, preventing long-range attacks. Additionally, challenges for block farming are based on the PoT outputs, which guarantee that the challenges, hence the block proposers, are not predictable."}),"\n",(0,o.jsxs)(t.p,{children:['Subspace\'s Proof-of-Time component addresses long-range attacks by enforcing an arrow of time similar to PoW. PoT guarantees that a certain amount of wall-clock time must elapse between block proposals, preventing an adversary from rewriting history by "going back in time". Similar to PoW, Proof-of-Time is constrained physically, however it is not parallelizable (technically, it is proof of ',(0,o.jsx)(t.em,{children:"sequential"})," work). We prevent the aforementioned attack by integrating the blockchain with a Proof-of-Time process. The attacker can not immediately generate a years-long fork on the spot even with faster hardware."]}),"\n",(0,o.jsxs)(t.p,{children:["Subspace's consensus obtains a farming dynamic that mimics the random nature of Bitcoin's mining dynamic while only expending a small constant amount of electricity. This is achieved through a Proof-of-Time-based block challenges for the block proposal lottery, based on the paper ",(0,o.jsx)(t.a,{href:"https://arxiv.org/abs/2010.08154",children:"PoSAT: Proof-of-Work Availability and Unpredictability, without the Work"})," by Soubhik Deb, Sreeram Kannan and David Tse. It ensures the fairness of the farming process to all participants through complete unpredictability of who will get to propose a block next. This unpredictability is at the same level as PoW protocols and is stronger than in the protocols using verifiable random functions."]}),"\n",(0,o.jsx)(t.p,{children:"The elapsed time guarantee is achieved by iterative evaluation of an inherently sequential function. The output of such a function is unpredictable and is used to build a randomness beacon for block challenges."}),"\n",(0,o.jsx)(t.h2,{id:"timekeeping",children:"Timekeeping"}),"\n",(0,o.jsx)(t.p,{children:"For the task of running the time-chain, Subspace introduces a new role for nodes called Timekeepers. Timekeepers are responsible for evaluating the delay function and announcing the outputs to other nodes. Anyone can become a Timekeeper as long as they have a powerful CPU of last generation that is able to evaluate the delay function within the target time slot duration of 1 second."}),"\n",(0,o.jsx)(t.p,{children:"A single honest timekeeper is sufficient for the security of the protocol, but for robustness and decentralization there should be multiple timekeepers running concurrently. We encourage interested participants to run the timekeeper component on their nodes to ensure the security and decentralization of the protocol. There is no explicit economic incentive to running a timekeeper, however, independent timekeeping contributes to stable block production, which benefits every participant of the network."}),"\n",(0,o.jsx)(t.p,{children:"While a timekeeper can also be a farmer and participate in block production or an operator executing computation on a domain, operators are likely more suited for the task since they already have powerful hardware. Timekeeping will fully consume a dedicated CPU core. Ideally, it should be run on a separate last generation machine with no other processes interfering with the timekeeping. This setup will allow best performance and security of the protocol against malicious timekeepers."}),"\n",(0,o.jsx)(t.p,{children:"The Proof-of-Time chain starts at the genesis time of the Subspace consensus chain. The input to the first slot is a random seed which will be publicly announced at launch to ensure equal opportunity. For each subsequent slot, the output of the previous slot serves as the input. By chaining the outputs, the timekeepers enforce sequentiality and prevent skipping ahead in time."}),"\n",(0,o.jsx)(t.h2,{id:"randomness-beacon",children:"Randomness Beacon"}),"\n",(0,o.jsx)(t.p,{children:"The fact that we have a sequence of random values coming from the Proof-of-Time evaluation allows us to use it\nas a source of randomness for block challenges. This is an additional advantage of our Proof-of-Time design, as other non-PoW protocols without Proof-of-Time suffer from predictability of the block challenge. Since we target a block challenge every second, we can set the delay function evaluation to output a proof every second. Then for every time slot, timekeepers will evaluate the delay function for a set number of iterations to generate fresh global randomness. They then announce the output to the network, which is used by farmers to determine the next block proposer."}),"\n",(0,o.jsxs)("div",{align:"center",children:[(0,o.jsx)("img",{src:"/img/PoT_Challenges-light.svg#gh-light-mode-only",alt:"Proof_of_Time_Challenges"}),(0,o.jsx)("img",{src:"/img/PoT_Challenges-dark.svg#gh-dark-mode-only",alt:"Proof_of_Time_Challenges"})]}),"\n",(0,o.jsx)(t.p,{children:"Farmers receive fresh randomness from timekeepers, verify it and scan their plots to see if they contain any chunks of history close enough to the challenge threshold to claim the block. Farmers with the correct chunks provide a proof-of-space for those, propose a block and earn rewards. The randomness is revealed a few slots in advance to ensure every farmer on the network has had enough time to receive it, scan their plots and submit the proof-of-space if they win. The farmers include PoT outputs in the block header, and the PoT chain is persisted in the consensus chain in this way."}),"\n",(0,o.jsx)(t.p,{children:"Every 50 blocks, entropy from the consensus chain is injected back into the PoT chain. The injection takes the farming solution and PoT output from a deep consensus block header as the new input for the delay function. Injection also prevents an adversary from simulating a consensus chain fork without also having to simulate a PoT chain fork. Forks in the consensus chain will result in a different sequence of PoT outputs. Hence, an attacker that forks the chain in some historical point, will have to physically run the PoT algorithm."}),"\n",(0,o.jsx)(t.h2,{id:"delay-function-choice",children:"Delay Function Choice"}),"\n",(0,o.jsx)(t.p,{children:"Subspace uses repeated AES-128 encryption as an alternative to existing Verifiable Delay Functions (VDFs), such as repeated squaring in groups of unknown order. AES fulfills the requirements of being iterative, non-parallelizable and producing a short, random and verifiable output."}),"\n",(0,o.jsx)(t.p,{children:"Following an extensive study of existing VDF constructions, we chose AES for the iterated function. AES has an advantage of research maturity compared to relatively new VDFs and an extremely efficient hardware and software implementation using hardware acceleration instructions. Based on a joint study with Supranational, we don't expect a significant speedup over the best AES implementation, even with an ASIC."}),"\n",(0,o.jsx)(t.p,{children:"To achieve asymmetric verification time for the AES-based delay function timekeepers publish a set of intermediate checkpoints alongside the output, currently 8, spaced uniformly. Farmers can validate each checkpoint independently and in parallel to reduce overall verification time. Including checkpoints allows other nodes to validate the output ~7 times faster and use ~4x less power than evaluation by leveraging instruction-level parallelism."}),"\n",(0,o.jsxs)("div",{align:"center",children:[(0,o.jsx)("img",{src:"/img/Proof_of_Time-light.svg#gh-light-mode-only",alt:"Proof_of_Time"}),(0,o.jsx)("img",{src:"/img/Proof_of_Time-dark.svg#gh-dark-mode-only",alt:"Proof_of_Time"})]}),"\n",(0,o.jsx)(t.p,{children:"The target number of iterations is currently set to ~183 million to achieve approximately 1 second per time slot on high-end CPUs. We will continuosly monitor hardware capabilities and will be adjusting the target to maintain approximately 1 second slots as needed. It is crucial to benchmark the delay function on best available hardware to ensure no one can gain an advantage by evaluating the delay function faster than others to predict future randomness outputs."}),"\n",(0,o.jsx)(t.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,o.jsx)(t.p,{children:"There are several security considerations to take into account when designing a randomness beacon in a decentralized protocol. The security claim for Subspace PoT is the following:"}),"\n",(0,o.jsx)(t.p,{children:"As long as there is at least one honest timekeeper online at all times, and network delay is bounded, all honest nodes can determine the correct PoT output, and hence the correct slot challenge."}),"\n",(0,o.jsx)(t.p,{children:"It is achieved by carefully taking care of the following aspects:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Sequentiality"}),": Subspace PoT beacon achieves sequentiality by chaining the slot outputs. Each output is used as an input to the delay function for the next slot."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Network delay"}),": When a farmer receives a PoT output for the challenge, they immediately start auditing the plot and proving if they have a winning solution. However, they are only allowed to submit the solution after ",(0,o.jsxs)(t.span,{className:"katex",children:[(0,o.jsx)(t.span,{className:"katex-mathml",children:(0,o.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,o.jsxs)(t.semantics,{children:[(0,o.jsx)(t.mrow,{children:(0,o.jsx)(t.mi,{children:"r"})}),(0,o.jsx)(t.annotation,{encoding:"application/x-tex",children:"r"})]})})}),(0,o.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,o.jsxs)(t.span,{className:"base",children:[(0,o.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,o.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})})]})," slots. This lag parameter is currently set to 4 slots, and can be tuned so that there is enough time to propagate, verify the PoT output and prove a solution on common farmer hardware. Increasing ",(0,o.jsxs)(t.span,{className:"katex",children:[(0,o.jsx)(t.span,{className:"katex-mathml",children:(0,o.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,o.jsxs)(t.semantics,{children:[(0,o.jsx)(t.mrow,{children:(0,o.jsx)(t.mi,{children:"r"})}),(0,o.jsx)(t.annotation,{encoding:"application/x-tex",children:"r"})]})})}),(0,o.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,o.jsxs)(t.span,{className:"base",children:[(0,o.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,o.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})})]})," allows an honest node more time to solve for a challenge, but also gives a malicious node more time to attempt to plot on-the-fly."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Faster timekeeper"}),": An attacker who has access to a timekeeper hardware that is able to run PoT faster then any other timekeeper on the network presents several security risks and Subspace addresses them via a few mechanisms. First, the speed gains are not cumulative over time: because of entropy injection every 50 blocks (~5 min) the attackers advantage is reset. Second, if a faster timekeeper gossips their PoT to the network, other timekeepers will continuously sync up and catch up to them. If a faster timekeeper withholds PoT and only uses it to produce blocks on their own, they do have some prediction window (depending how much faster they are), but nevertheless they either need significant percentage of network's disk storage or attempt on-the-fly plotting, which is also hard, as described on the ",(0,o.jsx)(t.a,{href:"/docs/consensus/security#on-the-fly-plot-creation",children:"Security"})," page. A faster PoT also makes a long-range attack more feasible, but the attacker still requires as much storage as the average honest storage to pull it off as described above."]}),"\n",(0,o.jsx)(t.p,{children:"The network will continuosly monitor the rate of PoT progression in comparison to real wall-clock time to detect the possibility of a faster timekeeper existence."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Difficulty adjustment"}),": The iteration count for the PoT delay function is benchmarked to be as close to the real wall-clock time as possible. With improvements in hardware, faster honest timekeepers can be deployed onto the network and iteration count increased to match the real wall-clock time."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Predictability"}),": Slot challenges can only be predicted in advance if the attacker has a faster timekeeper and even then it only lasts until the next injection."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Biasing randomness"}),": Subspace PoT does not allows the attacker to control the slot challenges of the next time interval by releasing/withholding their blocks from the current interval via the injection mechanism. See, ",(0,o.jsx)(t.a,{href:"https://eprint.iacr.org/2017/573.pdf",children:"Ouroboros Praos"})," for a security proof."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>s});var o=n(1504);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);