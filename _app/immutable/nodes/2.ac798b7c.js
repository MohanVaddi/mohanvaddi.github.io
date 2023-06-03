import{S as ul,i as vl,s as fl,J as pl,K as _l,m as h,h as i,n as r,b as F,L as ve,H as ae,M as gl,N as qt,O as Rt,k as u,q as j,a as E,y as Ge,l as v,r as P,c as I,z as Ue,P as He,G as s,A as We,g as ue,f as wl,d as Ce,B as Fe,Q as le,o as bl,v as kl}from"../chunks/index.df21106d.js";function yl(o){let e,t=o[4].svg+"",n,c,_,p;return{c(){e=pl("svg"),this.h()},l(g){e=_l(g,"svg",{"data-type":!0,class:!0,width:!0,height:!0,viewBox:!0});var y=h(e);y.forEach(i),this.h()},h(){r(e,"data-type",n=o[2]?o[2]:o[4].type),r(e,"class",c=`${o[5].class} inline align-middle data-[type=solid]:dark:fill-primary data-[type=outlined]:stroke-primary`),r(e,"width",o[0]),r(e,"height",o[1]),r(e,"viewBox","0 0 "+o[4].box+" "+o[4].box)},m(g,y){F(g,e,y),e.innerHTML=t,_||(p=[ve(e,"click",o[7]),ve(e,"keydown",o[8])],_=!0)},p(g,[y]){y&4&&n!==(n=g[2]?g[2]:g[4].type)&&r(e,"data-type",n),y&32&&c!==(c=`${g[5].class} inline align-middle data-[type=solid]:dark:fill-primary data-[type=outlined]:stroke-primary`)&&r(e,"class",c),y&1&&r(e,"width",g[0]),y&2&&r(e,"height",g[1])},i:ae,o:ae,d(g){g&&i(e),_=!1,gl(p)}}}function xl(o,e,t){let{icon:n}=e,{width:c="24px"}=e,{height:_="24px"}=e,{type:p=void 0}=e,{click:g=()=>{}}=e;const k={"doc-download":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',box:24,type:"solid"},"doc-download-solid":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>',box:24,type:"solid"},download:{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>',box:24,type:"outlined"},"volume-on":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>',box:24,type:"outlined"},"volume-off":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>',box:24,type:"outlined"},moon:{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>',box:24,type:"outlined"},"moon-solid":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>',box:24,type:"solid"},sun:{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',box:24,type:"outlined"},"user-cicle-solid":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>',box:24,type:"solid"},"user-cicle-outline":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',box:24,type:"outlined"},github:{svg:`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
				<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
			`,box:32,type:"solid"},linkedIn:{svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>',box:32,type:"solid"},twitter:{svg:`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg>
			`,box:32,type:"solid"},email:{svg:`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
			`,box:32,type:"solid"},"paper-airplane":{svg:`
			<svg xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`,box:32,type:"outlined"}}[n],x=w=>g(w),A=w=>g(w);return o.$$set=w=>{t(5,e=qt(qt({},e),Rt(w))),"icon"in w&&t(6,n=w.icon),"width"in w&&t(0,c=w.width),"height"in w&&t(1,_=w.height),"type"in w&&t(2,p=w.type),"click"in w&&t(3,g=w.click)},e=Rt(e),[c,_,p,g,k,e,n,x,A]}class Ke extends ul{constructor(e){super(),vl(this,e,xl,yl,fl,{icon:6,width:0,height:1,type:2,click:3})}}const Jt=[{name:"github",link:"https://github.com/mohanvaddi"},{name:"linkedIn",link:"https://www.linkedin.com/in/mohanvaddi"},{name:"twitter",link:"https://twitter.com/immohanvaddi"}],Ot=[{name:"Sound Health",description:"A product that leverages motion-capture technology to analyze user's adherence and cognition by incorporating games and music to improve quality of life.",links:[{name:"demo",link:"https://pointmotion.us/sound-health/"}]},{name:"Arbeit Web",description:"Designed and implemented a platform for daily-wage workers, which aimed to streamline the process of finding workers in a given area and making work arrangements quickly and easily.",links:[{name:"github",link:"https://github.com/mohanvaddi/arbeit-web"}]},{name:"Pocket OCR",description:"Developed a web-based OCR application that extracts text from images, while also generating searchable and copyable PDFs.",links:[{name:"github",link:"https://github.com/mohanvaddi/Pocket-Ocr-Client"}]},{name:"Gmeet AMS",description:"A web-based attendance management tool for Google Meet. Tracks user attendance, exports data in Excel format. Ideal for online classes, student attendance.",links:[{name:"github",link:"https://github.com/mohanvaddi/gmeet-ams"}]},{name:"Java Pad",description:"Lightweight Java-based text editor with auto-completions, auto-save, and recovery. Built using JavaFX, awt, and Swing. Ideal for Java programming with efficient performance on older laptops.",links:[{name:"github",link:"https://github.com/mohanvaddi/JavaPad"}]}],Gt=[{companyName:"PointMotion Inc.",roles:[{role:"Software Development Engineer",period:"Aug 2022 - Present"},{role:"SDE Intern",period:"Apr 2022 - Jul 2022"}],description:[`Developing "[Sound Health](https://pointmotion.us/sound-health/)", a product that leverages motion-capture technology to analyze user's adherence and cognition by incorporating games and music to improve quality of life.`,"Responsible for building and maintaining APIs for Object overlay games, including APIs for Animations, Game logic, Collision detection and Music, contributing to seamless game-play experiences.","Designed and developed a user-friendly mobile application that can be used as a remote control to manipulate the games, which helped in improving the efficiency and effectiveness of testing processes.","Contributed to the development of a chrome extension for user testers to easily record and share videos.","Contributed to the development of a desktop application to automate system accuracy testing and eliminated the need for manual testing efforts.","Worked on planning and Implementation of the back-end infrastructure for Stripe payment systems for the entire platform that encompass various functionalities such as subscription plans, automated payments, and coupon systems.","Worked on the back-end implementation of diverse systems, including authentication, analytics, and rewards systems.","Translated various product designs to responsive UI using Angular, Bootstrap, and SCSS on the front-end.","Created comprehensive technical documentation and videos outlining the functionality of select features.","Extensively collaborated with design, product, and business teams to understand their needs and develop successful features.","Skills: Angular, Bootstrap, Phaser3, PostgreSQL, GraphQL, Hasura, NestJS, Ionic, Tauri, Rust, AWS Cloud Services (S3, SNS, Pinpoint), Novu, Stripe, Google Analytics, Mediapipe."]},{companyName:"CodeTantra",roles:[{role:"Intern",period:"May 2021 - Aug 2021"}],description:["Contributed to the development of a platform that helped various educational institutions across India in facilitating online classes, exams, courses, and performance reports.","Contributed to the development of automated and manual proctoring systems.","Translated various product designs to responsive UI.","Skills: ReactJs, Spring Boot, Java, MongoDB, Docker"]}],Ut=[{universityName:"RGUKT-IIIT, Srikakulam",qualification:"B.Tech",stream:"Computer Science and Engineering",period:"Jun 2018 - May 2022",description:["Relevant Coursework: Data Structures and Algorithms, Structured Programming Approach, Database Management System, Computer Networks, Software Engineering, Compiler Design, DAA."]}],Ae={name:"Mohan Vaddi",subHead:"SDE @ PointMotion Inc.",desc:"I build accessible, inclusive products and digital experiences for the web. If you're interested in learning more about me, check out my LinkedIn Profile and feel free to connect with me there.",about:"As an SDE working in an early-stage startup, I possess a broad skill set that allows me to contribute to all aspects of product development. My commitment to ongoing learning enables me to remain up-to-date with emerging industry trends and advancements. I am a dedicated team player who is always willing to take on new challenges and adapt to evolving project requirements.",resumeHref:"assets/Mohan Vaddi - SDE.pdf",email:"mohan.vsnvm@gmail.com"};function Wt(o,e,t){const n=o.slice();return n[11]=e[t].name,n[12]=e[t].route,n}function Ft(o,e,t){const n=o.slice();return n[11]=e[t].name,n[15]=e[t].description,n[16]=e[t].links,n[18]=t,n}function Kt(o,e,t){const n=o.slice();return n[11]=e[t].name,n[19]=e[t].link,n}function Qt(o,e,t){const n=o.slice();return n[22]=e[t].universityName,n[23]=e[t].qualification,n[24]=e[t].stream,n[25]=e[t].period,n[15]=e[t].description,n}function Xt(o,e,t){const n=o.slice();return n[28]=e[t],n}function Yt(o,e,t){const n=o.slice();return n[31]=e[t].companyName,n[32]=e[t].roles,n[15]=e[t].description,n}function Zt(o,e,t){const n=o.slice();return n[28]=e[t],n}function $t(o,e,t){const n=o.slice();return n[37]=e[t].role,n[25]=e[t].period,n}function el(o,e,t){const n=o.slice();return n[11]=e[t].name,n[19]=e[t].link,n}function tl(o,e,t){const n=o.slice();return n[11]=e[t].name,n[12]=e[t].route,n}function ll(o){let e,t,n=o[11]+"",c,_;return{c(){e=u("li"),t=u("a"),c=j(n),_=E(),this.h()},l(p){e=v(p,"LI",{class:!0});var g=h(e);t=v(g,"A",{class:!0,href:!0});var y=h(t);c=P(y,n),y.forEach(i),_=I(g),g.forEach(i),this.h()},h(){r(t,"class","custom-underline-effect svelte-1cn9nzo"),r(t,"href",o[12]),r(e,"class","svelte-1cn9nzo")},m(p,g){F(p,e,g),s(e,t),s(t,c),s(e,_)},p:ae,d(p){p&&i(e)}}}function nl(o){let e,t,n;return t=new Ke({props:{class:"mr-3 hover:scale-[1.1] active:scale-[0.95]",type:"solid",icon:o[11],height:"32px",width:"32px"}}),{c(){e=u("a"),Ge(t.$$.fragment),this.h()},l(c){e=v(c,"A",{target:!0,rel:!0,"data-sound-hover":!0,"data-sound-click":!0,href:!0,class:!0});var _=h(e);Ue(t.$$.fragment,_),_.forEach(i),this.h()},h(){r(e,"target","_blank"),r(e,"rel","noreferrer"),r(e,"data-sound-hover","pop"),r(e,"data-sound-click","click"),r(e,"href",o[19]),r(e,"class","svelte-1cn9nzo")},m(c,_){F(c,e,_),We(t,e,null),n=!0},p:ae,i(c){n||(ue(t.$$.fragment,c),n=!0)},o(c){Ce(t.$$.fragment,c),n=!1},d(c){c&&i(e),Fe(t)}}}function sl(o){let e,t,n=o[37]+"",c,_,p,g=o[25]+"",y;return{c(){e=u("div"),t=u("div"),c=j(n),_=E(),p=u("div"),y=j(g),this.h()},l(k){e=v(k,"DIV",{class:!0});var x=h(e);t=v(x,"DIV",{class:!0});var A=h(t);c=P(A,n),A.forEach(i),_=I(x),p=v(x,"DIV",{class:!0});var w=h(p);y=P(w,g),w.forEach(i),x.forEach(i),this.h()},h(){r(t,"class","text-lg text-gray-200 svelte-1cn9nzo"),r(p,"class","text-md font-bold text-right date px-4 text-gray-200 svelte-1cn9nzo"),r(e,"class","grid grid-rows-1 grid-flow-col svelte-1cn9nzo")},m(k,x){F(k,e,x),s(e,t),s(t,c),s(e,_),s(e,p),s(p,y)},p:ae,d(k){k&&i(e)}}}function al(o){let e,t=o[4](o[28])+"";return{c(){e=u("li"),this.h()},l(n){e=v(n,"LI",{class:!0});var c=h(e);c.forEach(i),this.h()},h(){r(e,"class","svelte-1cn9nzo")},m(n,c){F(n,e,c),e.innerHTML=t},p:ae,d(n){n&&i(e)}}}function ol(o){let e,t,n=o[31]+"",c,_,p,g,y,k,x,A=o[32],w=[];for(let m=0;m<A.length;m+=1)w[m]=sl($t(o,A,m));let z=o[15],f=[];for(let m=0;m<z.length;m+=1)f[m]=al(Zt(o,z,m));return{c(){e=u("div"),t=u("div"),c=j(n),_=E();for(let m=0;m<w.length;m+=1)w[m].c();p=E(),g=u("div"),y=u("div"),k=u("ul");for(let m=0;m<f.length;m+=1)f[m].c();x=E(),this.h()},l(m){e=v(m,"DIV",{class:!0});var b=h(e);t=v(b,"DIV",{class:!0});var d=h(t);c=P(d,n),d.forEach(i),_=I(b);for(let D=0;D<w.length;D+=1)w[D].l(b);p=I(b),g=v(b,"DIV",{class:!0});var M=h(g);y=v(M,"DIV",{class:!0});var B=h(y);k=v(B,"UL",{class:!0});var H=h(k);for(let D=0;D<f.length;D+=1)f[D].l(H);H.forEach(i),B.forEach(i),M.forEach(i),x=I(b),b.forEach(i),this.h()},h(){r(t,"class","text-xl text-primary svelte-1cn9nzo"),r(k,"class","text-gray-400 text-md svelte-1cn9nzo"),r(y,"class","job-responsibilities mt-2 px-2 svelte-1cn9nzo"),r(g,"class","description svelte-1cn9nzo"),r(e,"class","mt-4 svelte-1cn9nzo")},m(m,b){F(m,e,b),s(e,t),s(t,c),s(e,_);for(let d=0;d<w.length;d+=1)w[d]&&w[d].m(e,null);s(e,p),s(e,g),s(g,y),s(y,k);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(k,null);s(e,x)},p(m,b){if(b&0){A=m[32];let d;for(d=0;d<A.length;d+=1){const M=$t(m,A,d);w[d]?w[d].p(M,b):(w[d]=sl(M),w[d].c(),w[d].m(e,p))}for(;d<w.length;d+=1)w[d].d(1);w.length=A.length}if(b[0]&16){z=m[15];let d;for(d=0;d<z.length;d+=1){const M=Zt(m,z,d);f[d]?f[d].p(M,b):(f[d]=al(M),f[d].c(),f[d].m(k,null))}for(;d<f.length;d+=1)f[d].d(1);f.length=z.length}},d(m){m&&i(e),le(w,m),le(f,m)}}}function rl(o){let e,t,n,c,_=o[4](o[28])+"";return{c(){e=u("div"),t=u("div"),n=u("ul"),c=u("li"),this.h()},l(p){e=v(p,"DIV",{class:!0});var g=h(e);t=v(g,"DIV",{class:!0});var y=h(t);n=v(y,"UL",{class:!0});var k=h(n);c=v(k,"LI",{class:!0});var x=h(c);x.forEach(i),k.forEach(i),y.forEach(i),g.forEach(i),this.h()},h(){r(c,"class","svelte-1cn9nzo"),r(n,"class","text-gray-400 svelte-1cn9nzo"),r(t,"class","job-responsibilities mt-2 px-2 svelte-1cn9nzo"),r(e,"class","description svelte-1cn9nzo")},m(p,g){F(p,e,g),s(e,t),s(t,n),s(n,c),c.innerHTML=_},p:ae,d(p){p&&i(e)}}}function il(o){let e,t,n=o[22]+"",c,_,p,g,y=o[23]+"",k,x,A=o[24]+"",w,z,f,m=o[25]+"",b,d,M,B=o[15],H=[];for(let D=0;D<B.length;D+=1)H[D]=rl(Xt(o,B,D));return{c(){e=u("div"),t=u("div"),c=j(n),_=E(),p=u("div"),g=u("div"),k=j(y),x=j(" in "),w=j(A),z=E(),f=u("div"),b=j(m),d=E();for(let D=0;D<H.length;D+=1)H[D].c();M=E(),this.h()},l(D){e=v(D,"DIV",{class:!0});var q=h(e);t=v(q,"DIV",{class:!0});var S=h(t);c=P(S,n),S.forEach(i),_=I(q),p=v(q,"DIV",{class:!0});var Q=h(p);g=v(Q,"DIV",{class:!0});var X=h(g);k=P(X,y),x=P(X," in "),w=P(X,A),X.forEach(i),z=I(Q),f=v(Q,"DIV",{class:!0});var Z=h(f);b=P(Z,m),Z.forEach(i),Q.forEach(i),d=I(q);for(let oe=0;oe<H.length;oe+=1)H[oe].l(q);M=I(q),q.forEach(i),this.h()},h(){r(t,"class","text-xl text-primary svelte-1cn9nzo"),r(g,"class","text-lg text-gray-200 svelte-1cn9nzo"),r(f,"class","text-md font-bold text-right date px-4 text-gray-200 svelte-1cn9nzo"),r(p,"class","grid grid-rows-1 grid-flow-col svelte-1cn9nzo"),r(e,"class","mt-4 svelte-1cn9nzo")},m(D,q){F(D,e,q),s(e,t),s(t,c),s(e,_),s(e,p),s(p,g),s(g,k),s(g,x),s(g,w),s(p,z),s(p,f),s(f,b),s(e,d);for(let S=0;S<H.length;S+=1)H[S]&&H[S].m(e,null);s(e,M)},p(D,q){if(q[0]&16){B=D[15];let S;for(S=0;S<B.length;S+=1){const Q=Xt(D,B,S);H[S]?H[S].p(Q,q):(H[S]=rl(Q),H[S].c(),H[S].m(e,M))}for(;S<H.length;S+=1)H[S].d(1);H.length=B.length}},d(D){D&&i(e),le(H,D)}}}function cl(o){let e,t=o[11]+"",n;return{c(){e=u("a"),n=j(t),this.h()},l(c){e=v(c,"A",{class:!0,href:!0,target:!0,rel:!0});var _=h(e);n=P(_,t),_.forEach(i),this.h()},h(){r(e,"class","primary-outline button !px-[0.4rem] !py-[0.3rem] !bg-gray-800 capitalize svelte-1cn9nzo"),r(e,"href",o[19]),r(e,"target","_blank"),r(e,"rel","noopener noreferrer")},m(c,_){F(c,e,_),s(e,n)},p:ae,d(c){c&&i(e)}}}function dl(o){let e,t,n=o[11]+"",c,_,p,g=o[15]+"",y,k,x,A,w=o[16],z=[];for(let f=0;f<w.length;f+=1)z[f]=cl(Kt(o,w,f));return{c(){e=u("div"),t=u("h3"),c=j(n),_=E(),p=u("p"),y=j(g),k=E(),x=u("div");for(let f=0;f<z.length;f+=1)z[f].c();A=E(),this.h()},l(f){e=v(f,"DIV",{class:!0});var m=h(e);t=v(m,"H3",{class:!0});var b=h(t);c=P(b,n),b.forEach(i),_=I(m),p=v(m,"P",{class:!0});var d=h(p);y=P(d,g),d.forEach(i),k=I(m),x=v(m,"DIV",{class:!0});var M=h(x);for(let B=0;B<z.length;B+=1)z[B].l(M);M.forEach(i),A=I(m),m.forEach(i),this.h()},h(){r(t,"class","project-title svelte-1cn9nzo"),r(p,"class","project-description text-gray-400 svelte-1cn9nzo"),r(x,"class","project-links svelte-1cn9nzo"),r(e,"class","project-card bg-gray-800 svelte-1cn9nzo")},m(f,m){F(f,e,m),s(e,t),s(t,c),s(e,_),s(e,p),s(p,y),s(e,k),s(e,x);for(let b=0;b<z.length;b+=1)z[b]&&z[b].m(x,null);s(e,A)},p(f,m){if(m&0){w=f[16];let b;for(b=0;b<w.length;b+=1){const d=Kt(f,w,b);z[b]?z[b].p(d,m):(z[b]=cl(d),z[b].c(),z[b].m(x,null))}for(;b<z.length;b+=1)z[b].d(1);z.length=w.length}},d(f){f&&i(e),le(z,f)}}}function hl(o){let e,t,n=o[11]+"",c,_,p,g;function y(...k){return o[6](o[12],...k)}return{c(){e=u("a"),t=u("div"),c=j(n),_=E(),this.h()},l(k){e=v(k,"A",{href:!0,class:!0});var x=h(e);t=v(x,"DIV",{class:!0});var A=h(t);c=P(A,n),A.forEach(i),_=I(x),x.forEach(i),this.h()},h(){r(t,"class","btn-text svelte-1cn9nzo"),He(t,"hidden",!o[0]),r(e,"href",o[12]),r(e,"class","sub-button shadow fab-opt svelte-1cn9nzo")},m(k,x){F(k,e,x),s(e,t),s(t,c),s(e,_),p||(g=ve(e,"click",y),p=!0)},p(k,x){o=k,x[0]&1&&He(t,"hidden",!o[0])},d(k){k&&i(e),p=!1,g()}}}function zl(o){let e,t,n,c,_,p=Ae.name+"",g,y,k,x=Ae.subHead+"",A,w,z,f=Ae.desc+"",m,b,d,M,B,H,D,q,S,Q,X,Z,oe,N,re,fe,wt=Ae.about+"",Qe,Xe,Le,Ye,$,ge,Ze,$e,et,je,tt,ee,me,lt,nt,st,Pe,at,ne,pe,ot,rt,ie,it,Te,ct,Y,_e,dt,ht,we,ut,vt,be,se,ce,ft,Ne,K,ke,ye,de,gt,Be,te,xe,mt,bt;B=new Ke({props:{icon:"doc-download-solid",type:"solid"}});let ze=o[2],J=[];for(let a=0;a<ze.length;a+=1)J[a]=ll(tl(o,ze,a));let he=Jt,L=[];for(let a=0;a<he.length;a+=1)L[a]=nl(el(o,he,a));const ml=a=>Ce(L[a],1,1,()=>{L[a]=null});let Ee=Gt,O=[];for(let a=0;a<Ee.length;a+=1)O[a]=ol(Yt(o,Ee,a));let Ie=Ut,G=[];for(let a=0;a<Ie.length;a+=1)G[a]=il(Qt(o,Ie,a));let Ve=Ot,U=[];for(let a=0;a<Ve.length;a+=1)U[a]=dl(Ft(o,Ve,a));ce=new Ke({props:{icon:"user-cicle-solid",type:"solid"}}),de=new Ke({props:{class:"icon absolute left-[25%] top-[25%]",icon:"paper-airplane",height:"32px",width:"32px",type:"solid"}});let De=o[3],W=[];for(let a=0;a<De.length;a+=1)W[a]=hl(Wt(o,De,a));return{c(){e=u("div"),t=u("div"),n=u("div"),c=u("div"),_=u("p"),g=j(p),y=E(),k=u("p"),A=j(x),w=E(),z=u("p"),m=j(f),b=E(),d=u("div"),M=u("a"),Ge(B.$$.fragment),H=j(`
					Resume`),D=E(),q=u("nav"),S=u("ul");for(let a=0;a<J.length;a+=1)J[a].c();Q=E(),X=u("div"),Z=u("div");for(let a=0;a<L.length;a+=1)L[a].c();oe=E(),N=u("div"),re=u("section"),fe=u("p"),Qe=j(wt),Xe=E(),Le=u("div"),Ye=E(),$=u("section"),ge=u("h2"),Ze=j("Experience"),$e=E();for(let a=0;a<O.length;a+=1)O[a].c();et=E(),je=u("div"),tt=E(),ee=u("section"),me=u("h2"),lt=j("Education"),nt=E();for(let a=0;a<G.length;a+=1)G[a].c();st=E(),Pe=u("div"),at=E(),ne=u("section"),pe=u("h2"),ot=j("Projects"),rt=E(),ie=u("div");for(let a=0;a<U.length;a+=1)U[a].c();it=E(),Te=u("div"),ct=E(),Y=u("section"),_e=u("h2"),dt=j("Get In Touch"),ht=E(),we=u("p"),ut=j(`My inbox is always open. Whether you have a question or just want to say hi, I’ll try my
					best to get back to you!`),vt=E(),be=u("div"),se=u("a"),Ge(ce.$$.fragment),ft=j(`
						Say Hello`),Ne=E(),K=u("div"),ke=u("div"),ye=u("div"),Ge(de.$$.fragment),gt=E();for(let a=0;a<W.length;a+=1)W[a].c();Be=E(),te=u("div"),this.h()},l(a){e=v(a,"DIV",{class:!0});var V=h(e);t=v(V,"DIV",{class:!0});var l=h(t);n=v(l,"DIV",{class:!0});var C=h(n);c=v(C,"DIV",{class:!0});var Me=h(c);_=v(Me,"P",{class:!0});var kt=h(_);g=P(kt,p),kt.forEach(i),y=I(Me),k=v(Me,"P",{class:!0});var yt=h(k);A=P(yt,x),yt.forEach(i),w=I(Me),z=v(Me,"P",{class:!0});var xt=h(z);m=P(xt,f),xt.forEach(i),Me.forEach(i),b=I(C),d=v(C,"DIV",{class:!0});var zt=h(d);M=v(zt,"A",{href:!0,class:!0,target:!0});var pt=h(M);Ue(B.$$.fragment,pt),H=P(pt,`
					Resume`),pt.forEach(i),zt.forEach(i),D=I(C),q=v(C,"NAV",{class:!0});var Et=h(q);S=v(Et,"UL",{class:!0});var It=h(S);for(let T=0;T<J.length;T+=1)J[T].l(It);It.forEach(i),Et.forEach(i),Q=I(C),X=v(C,"DIV",{class:!0});var Vt=h(X);Z=v(Vt,"DIV",{class:!0});var Dt=h(Z);for(let T=0;T<L.length;T+=1)L[T].l(Dt);Dt.forEach(i),Vt.forEach(i),C.forEach(i),oe=I(l),N=v(l,"DIV",{class:!0});var R=h(N);re=v(R,"SECTION",{id:!0,class:!0});var Mt=h(re);fe=v(Mt,"P",{class:!0});var St=h(fe);Qe=P(St,wt),St.forEach(i),Mt.forEach(i),Xe=I(R),Le=v(R,"DIV",{class:!0}),h(Le).forEach(i),Ye=I(R),$=v(R,"SECTION",{id:!0,class:!0});var qe=h($);ge=v(qe,"H2",{class:!0});var At=h(ge);Ze=P(At,"Experience"),At.forEach(i),$e=I(qe);for(let T=0;T<O.length;T+=1)O[T].l(qe);qe.forEach(i),et=I(R),je=v(R,"DIV",{class:!0}),h(je).forEach(i),tt=I(R),ee=v(R,"SECTION",{id:!0,class:!0});var Re=h(ee);me=v(Re,"H2",{class:!0});var Ct=h(me);lt=P(Ct,"Education"),Ct.forEach(i),nt=I(Re);for(let T=0;T<G.length;T+=1)G[T].l(Re);Re.forEach(i),st=I(R),Pe=v(R,"DIV",{class:!0}),h(Pe).forEach(i),at=I(R),ne=v(R,"SECTION",{id:!0,class:!0});var Je=h(ne);pe=v(Je,"H2",{class:!0});var Ht=h(pe);ot=P(Ht,"Projects"),Ht.forEach(i),rt=I(Je),ie=v(Je,"DIV",{class:!0});var Lt=h(ie);for(let T=0;T<U.length;T+=1)U[T].l(Lt);Lt.forEach(i),Je.forEach(i),it=I(R),Te=v(R,"DIV",{class:!0}),h(Te).forEach(i),ct=I(R),Y=v(R,"SECTION",{id:!0,class:!0});var Se=h(Y);_e=v(Se,"H2",{class:!0});var jt=h(_e);dt=P(jt,"Get In Touch"),jt.forEach(i),ht=I(Se),we=v(Se,"P",{class:!0});var Pt=h(we);ut=P(Pt,`My inbox is always open. Whether you have a question or just want to say hi, I’ll try my
					best to get back to you!`),Pt.forEach(i),vt=I(Se),be=v(Se,"DIV",{class:!0});var Tt=h(be);se=v(Tt,"A",{href:!0,class:!0});var _t=h(se);Ue(ce.$$.fragment,_t),ft=P(_t,`
						Say Hello`),_t.forEach(i),Tt.forEach(i),Se.forEach(i),R.forEach(i),l.forEach(i),V.forEach(i),Ne=I(a),K=v(a,"DIV",{class:!0});var Oe=h(K);ke=v(Oe,"DIV",{class:!0});var Nt=h(ke);ye=v(Nt,"DIV",{class:!0});var Bt=h(ye);Ue(de.$$.fragment,Bt),Bt.forEach(i),Nt.forEach(i),gt=I(Oe);for(let T=0;T<W.length;T+=1)W[T].l(Oe);Oe.forEach(i),Be=I(a),te=v(a,"DIV",{class:!0}),h(te).forEach(i),this.h()},h(){r(_,"class","text-4xl lg:text-4xl font-montserrat mt-2 mb-0 uppercase name svelte-1cn9nzo"),r(k,"class","text-lg font-montserrat dark:text-white mt-1 mb-2 text-gray-300 svelte-1cn9nzo"),r(z,"class","text-lg font-inter text-gray-300 w-4/5 svelte-1cn9nzo"),r(c,"class","container lg:mx-auto lg:mt-20 mt-14 svelte-1cn9nzo"),r(M,"href",Ae.resumeHref),r(M,"class","button primary-outline !px-[0.4rem] !py-[0.3rem] fill-down svelte-1cn9nzo"),r(M,"target","_blank"),r(d,"class","mt-6 lg:mt-8 svelte-1cn9nzo"),r(S,"class","svelte-1cn9nzo"),r(q,"class","mt-8 hidden lg:block svelte-1cn9nzo"),r(Z,"class","grid grid-cols-3 svelte-1cn9nzo"),r(X,"class","absolute bottom-12 hidden lg:block svelte-1cn9nzo"),r(n,"class","left px-4 md:px-8 lg:px-8 svelte-1cn9nzo"),r(fe,"class","text-lg text-gray-400 svelte-1cn9nzo"),r(re,"id","about"),r(re,"class","mt-2 py-8 svelte-1cn9nzo"),r(Le,"class","separator svelte-1cn9nzo"),r(ge,"class","text-2xl font-bold text-primary uppercase svelte-1cn9nzo"),r($,"id","experience"),r($,"class","py-8 svelte-1cn9nzo"),r(je,"class","separator svelte-1cn9nzo"),r(me,"class","text-2xl font-bold text-primary uppercase svelte-1cn9nzo"),r(ee,"id","education"),r(ee,"class","py-8 svelte-1cn9nzo"),r(Pe,"class","separator svelte-1cn9nzo"),r(pe,"class","text-2xl font-bold text-primary mb-6 uppercase svelte-1cn9nzo"),r(ie,"class","project-list text-gray-300 svelte-1cn9nzo"),r(ne,"id","projects"),r(ne,"class","py-8 svelte-1cn9nzo"),r(Te,"class","separator svelte-1cn9nzo"),r(_e,"class","text-2xl font-bold text-primary uppercase svelte-1cn9nzo"),r(we,"class","mt-4 text-md text-gray-400 svelte-1cn9nzo"),r(se,"href","mailto:"+Ae.email),r(se,"class","button primary-outline !px-[0.4rem] !py-[0.3rem] fill-down svelte-1cn9nzo"),r(be,"class","mt-8 svelte-1cn9nzo"),r(Y,"id","contact-me"),r(Y,"class","py-8 mb-8 lg:mb-12 svelte-1cn9nzo"),r(N,"class","right text-black d-flex px-4 md:px-8 lg:mt-12 svelte-1cn9nzo"),r(t,"class","cust-container mx-auto svelte-1cn9nzo"),r(e,"class","flex-grow p-0 m-0 text-white bg-dark svelte-1cn9nzo"),r(ye,"class","fab-content svelte-1cn9nzo"),r(ke,"class","fab shadow svelte-1cn9nzo"),r(K,"class","fab-container svelte-1cn9nzo"),He(K,"active",o[0]),r(te,"class","overlay svelte-1cn9nzo"),He(te,"active",o[0])},m(a,V){F(a,e,V),s(e,t),s(t,n),s(n,c),s(c,_),s(_,g),s(c,y),s(c,k),s(k,A),s(c,w),s(c,z),s(z,m),s(n,b),s(n,d),s(d,M),We(B,M,null),s(M,H),s(n,D),s(n,q),s(q,S);for(let l=0;l<J.length;l+=1)J[l]&&J[l].m(S,null);s(n,Q),s(n,X),s(X,Z);for(let l=0;l<L.length;l+=1)L[l]&&L[l].m(Z,null);s(t,oe),s(t,N),s(N,re),s(re,fe),s(fe,Qe),s(N,Xe),s(N,Le),s(N,Ye),s(N,$),s($,ge),s(ge,Ze),s($,$e);for(let l=0;l<O.length;l+=1)O[l]&&O[l].m($,null);s(N,et),s(N,je),s(N,tt),s(N,ee),s(ee,me),s(me,lt),s(ee,nt);for(let l=0;l<G.length;l+=1)G[l]&&G[l].m(ee,null);s(N,st),s(N,Pe),s(N,at),s(N,ne),s(ne,pe),s(pe,ot),s(ne,rt),s(ne,ie);for(let l=0;l<U.length;l+=1)U[l]&&U[l].m(ie,null);s(N,it),s(N,Te),s(N,ct),s(N,Y),s(Y,_e),s(_e,dt),s(Y,ht),s(Y,we),s(we,ut),s(Y,vt),s(Y,be),s(be,se),We(ce,se,null),s(se,ft),F(a,Ne,V),F(a,K,V),s(K,ke),s(ke,ye),We(de,ye,null),s(K,gt);for(let l=0;l<W.length;l+=1)W[l]&&W[l].m(K,null);F(a,Be,V),F(a,te,V),xe=!0,mt||(bt=[ve(K,"click",o[7]),ve(K,"keydown",o[8]),ve(te,"click",o[9]),ve(te,"keydown",o[10])],mt=!0)},p(a,V){if(V[0]&4){ze=a[2];let l;for(l=0;l<ze.length;l+=1){const C=tl(a,ze,l);J[l]?J[l].p(C,V):(J[l]=ll(C),J[l].c(),J[l].m(S,null))}for(;l<J.length;l+=1)J[l].d(1);J.length=ze.length}if(V&0){he=Jt;let l;for(l=0;l<he.length;l+=1){const C=el(a,he,l);L[l]?(L[l].p(C,V),ue(L[l],1)):(L[l]=nl(C),L[l].c(),ue(L[l],1),L[l].m(Z,null))}for(kl(),l=he.length;l<L.length;l+=1)ml(l);wl()}if(V[0]&16){Ee=Gt;let l;for(l=0;l<Ee.length;l+=1){const C=Yt(a,Ee,l);O[l]?O[l].p(C,V):(O[l]=ol(C),O[l].c(),O[l].m($,null))}for(;l<O.length;l+=1)O[l].d(1);O.length=Ee.length}if(V[0]&16){Ie=Ut;let l;for(l=0;l<Ie.length;l+=1){const C=Qt(a,Ie,l);G[l]?G[l].p(C,V):(G[l]=il(C),G[l].c(),G[l].m(ee,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=Ie.length}if(V&0){Ve=Ot;let l;for(l=0;l<Ve.length;l+=1){const C=Ft(a,Ve,l);U[l]?U[l].p(C,V):(U[l]=dl(C),U[l].c(),U[l].m(ie,null))}for(;l<U.length;l+=1)U[l].d(1);U.length=Ve.length}if(V[0]&11){De=a[3];let l;for(l=0;l<De.length;l+=1){const C=Wt(a,De,l);W[l]?W[l].p(C,V):(W[l]=hl(C),W[l].c(),W[l].m(K,null))}for(;l<W.length;l+=1)W[l].d(1);W.length=De.length}(!xe||V[0]&1)&&He(K,"active",a[0]),(!xe||V[0]&1)&&He(te,"active",a[0])},i(a){if(!xe){ue(B.$$.fragment,a);for(let V=0;V<he.length;V+=1)ue(L[V]);ue(ce.$$.fragment,a),ue(de.$$.fragment,a),xe=!0}},o(a){Ce(B.$$.fragment,a),L=L.filter(Boolean);for(let V=0;V<L.length;V+=1)Ce(L[V]);Ce(ce.$$.fragment,a),Ce(de.$$.fragment,a),xe=!1},d(a){a&&i(e),Fe(B),le(J,a),le(L,a),le(O,a),le(G,a),le(U,a),Fe(ce),a&&i(Ne),a&&i(K),Fe(de),le(W,a),a&&i(Be),a&&i(te),mt=!1,gl(bt)}}}function El(o,e,t){let n=!1,{data:c}=e;console.log(c.likedSongs);const _=f=>{const m=document.getElementById(f);m&&m.scrollIntoView({behavior:"smooth"})};bl(()=>{const f=d=>{d.preventDefault();const M=d.target.getAttribute("href").substring(1);_(M)};document.querySelectorAll("nav ul li a").forEach(d=>{d.addEventListener("click",f)}),document.querySelectorAll(".fab-container a").forEach(d=>{d.addEventListener("click",f)}),document.addEventListener("keydown",d=>{d.code==="KeyF"&&t(0,n=!n)})});const p=[{name:"About",route:"#about"},{name:"Experience",route:"#experience"},{name:"Education",route:"#education"},{name:"Projects",route:"#projects"},{name:"Contact Me",route:"#contact-me"}],g=p.slice().reverse(),y=f=>{const m=/\*(.*?)\*/g,b=/\[(.*?)\]\((.*?)\)/g;return f.replace(m,'<span class="text-white">$1</span>').replace(b,'<a class="custom-underline-effect" href="$2" target="_blank"><span class="text-white">$1</span></a>')},k=(f,m)=>{_(f.substring(1))},x=()=>{t(0,n=!n)},A=f=>{f.key==="Escape"&&t(0,n=!1)},w=()=>{t(0,n=!1)},z=f=>{f.key==="Escape"&&t(0,n=!1)};return o.$$set=f=>{"data"in f&&t(5,c=f.data)},[n,_,p,g,y,c,k,x,A,w,z]}class Vl extends ul{constructor(e){super(),vl(this,e,El,zl,fl,{data:5},null,[-1,-1])}}export{Vl as component};
