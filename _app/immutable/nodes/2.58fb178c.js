import{S as ul,i as vl,s as ml,J as pl,K as _l,m as d,h as i,n as r,b as F,L as ve,H as ne,M as gl,N as qt,O as Rt,k as h,q as j,a as I,y as Ge,l as u,r as P,c as V,z as Ue,P as He,G as a,A as We,g as ue,f as bl,d as Ce,B as Fe,Q as le,o as wl,v as kl}from"../chunks/index.df21106d.js";function yl(o){let e,t=o[4].svg+"",s,c,b,g;return{c(){e=pl("svg"),this.h()},l(v){e=_l(v,"svg",{"data-type":!0,class:!0,width:!0,height:!0,viewBox:!0});var x=d(e);x.forEach(i),this.h()},h(){r(e,"data-type",s=o[2]?o[2]:o[4].type),r(e,"class",c=`${o[5].class} inline align-middle data-[type=solid]:dark:fill-primary data-[type=outlined]:stroke-primary`),r(e,"width",o[0]),r(e,"height",o[1]),r(e,"viewBox","0 0 "+o[4].box+" "+o[4].box)},m(v,x){F(v,e,x),e.innerHTML=t,b||(g=[ve(e,"click",o[7]),ve(e,"keydown",o[8])],b=!0)},p(v,[x]){x&4&&s!==(s=v[2]?v[2]:v[4].type)&&r(e,"data-type",s),x&32&&c!==(c=`${v[5].class} inline align-middle data-[type=solid]:dark:fill-primary data-[type=outlined]:stroke-primary`)&&r(e,"class",c),x&1&&r(e,"width",v[0]),x&2&&r(e,"height",v[1])},i:ne,o:ne,d(v){v&&i(e),b=!1,gl(g)}}}function xl(o,e,t){let{icon:s}=e,{width:c="24px"}=e,{height:b="24px"}=e,{type:g=void 0}=e,{click:v=()=>{}}=e;const y={"doc-download":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',box:24,type:"solid"},"doc-download-solid":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>',box:24,type:"solid"},download:{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>',box:24,type:"outlined"},"volume-on":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>',box:24,type:"outlined"},"volume-off":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>',box:24,type:"outlined"},moon:{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>',box:24,type:"outlined"},"moon-solid":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>',box:24,type:"solid"},sun:{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',box:24,type:"outlined"},"user-cicle-solid":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>',box:24,type:"solid"},"user-cicle-outline":{svg:'<svg xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',box:24,type:"outlined"},github:{svg:`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
				<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
			`,box:32,type:"solid"},linkedIn:{svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>',box:32,type:"solid"},twitter:{svg:`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg>
			`,box:32,type:"solid"},email:{svg:`
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
			`,box:32,type:"solid"},"paper-airplane":{svg:`
			<svg xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`,box:32,type:"outlined"}}[s],E=w=>v(w),A=w=>v(w);return o.$$set=w=>{t(5,e=qt(qt({},e),Rt(w))),"icon"in w&&t(6,s=w.icon),"width"in w&&t(0,c=w.width),"height"in w&&t(1,b=w.height),"type"in w&&t(2,g=w.type),"click"in w&&t(3,v=w.click)},e=Rt(e),[c,b,g,v,y,e,s,E,A]}class Ke extends ul{constructor(e){super(),vl(this,e,xl,yl,ml,{icon:6,width:0,height:1,type:2,click:3})}}const Jt=[{name:"github",link:"https://github.com/mohanvaddi"},{name:"linkedIn",link:"https://www.linkedin.com/in/mohanvaddi"},{name:"twitter",link:"https://twitter.com/immohanvaddi"}],Ot=[{name:"Sound Health",description:"A product that leverages motion-capture technology to analyze user's adherence and cognition by incorporating games and music to improve quality of life.",links:[{name:"demo",link:"https://pointmotion.us/sound-health/"}]},{name:"Arbeit Web",description:"Designed and implemented a platform for daily-wage workers, which aimed to streamline the process of finding workers in a given area and making work arrangements quickly and easily.",links:[{name:"github",link:"https://github.com/mohanvaddi/arbeit-web"}]},{name:"Pocket OCR",description:"Developed a web-based OCR application that extracts text from images, while also generating searchable and copyable PDFs.",links:[{name:"github",link:"https://github.com/mohanvaddi/Pocket-Ocr-Client"}]},{name:"Gmeet AMS",description:"A web-based attendance management tool for Google Meet. Tracks user attendance, exports data in Excel format. Ideal for online classes, student attendance.",links:[{name:"github",link:"https://github.com/mohanvaddi/gmeet-ams"}]},{name:"Java Pad",description:"Lightweight Java-based text editor with auto-completions, auto-save, and recovery. Built using JavaFX, awt, and Swing. Ideal for Java programming with efficient performance on older laptops.",links:[{name:"github",link:"https://github.com/mohanvaddi/JavaPad"}]}],Gt=[{companyName:"PointMotion Inc.",roles:[{role:"Software Development Engineer",period:"Aug 2022 - Present"},{role:"SDE Intern",period:"Apr 2022 - Jul 2022"}],description:[`Developing "[Sound Health](https://pointmotion.us/sound-health/)", a product that leverages motion-capture technology to analyze user's adherence and cognition by incorporating games and music to improve quality of life.`,"Responsible for building and maintaining APIs for Object overlay games, including APIs for Animations, Game logic, Collision detection and Music, contributing to seamless game-play experiences.","Designed and developed a user-friendly mobile application that can be used as a remote control to manipulate the games, which helped in improving the efficiency and effectiveness of testing processes.","Contributed to the development of a chrome extension for user testers to easily record and share videos.","Contributed to the development of a desktop application to automate system accuracy testing and eliminated the need for manual testing efforts.","Worked on planning and Implementation of the back-end infrastructure for Stripe payment systems for the entire platform that encompass various functionalities such as subscription plans, automated payments, and coupon systems.","Worked on the back-end implementation of diverse systems, including authentication, analytics, and rewards systems.","Translated various product designs to responsive UI using Angular, Bootstrap, and SCSS on the front-end.","Created comprehensive technical documentation and videos outlining the functionality of select features.","Extensively collaborated with design, product, and business teams to understand their needs and develop successful features.","Skills: Angular, Bootstrap, Phaser3, PostgreSQL, GraphQL, Hasura, NestJS, Ionic, Tauri, Rust, AWS Cloud Services (S3, SNS, Pinpoint), Novu, Stripe, Google Analytics, Mediapipe."]},{companyName:"CodeTantra",roles:[{role:"Intern",period:"May 2021 - Aug 2021"}],description:["Contributed to the development of a platform that helped various educational institutions across India in facilitating online classes, exams, courses, and performance reports.","Contributed to the development of automated and manual proctoring systems.","Translated various product designs to responsive UI.","Skills: ReactJs, Spring Boot, Java, MongoDB, Docker"]}],Ut=[{universityName:"RGUKT-IIIT, Srikakulam",qualification:"B.Tech",stream:"Computer Science and Engineering",period:"Jun 2018 - May 2022",description:["Relevant Coursework: Data Structures and Algorithms, Structured Programming Approach, Database Management System, Computer Networks, Software Engineering, Compiler Design, DAA."]}],ze={name:"Mohan Vaddi",subHead:"SDE @ PointMotion Inc.",desc:"I build accessible, inclusive products and digital experiences for the web. If you're interested in learning more about me, check out my LinkedIn Profile and feel free to connect with me there.",about:"As an SDE working in an early-stage startup, I possess a broad skill set that allows me to contribute to all aspects of product development. My commitment to ongoing learning enables me to remain up-to-date with emerging industry trends and advancements. I am a dedicated team player who is always willing to take on new challenges and adapt to evolving project requirements.",resumeHref:"assets/Mohan Vaddi - SDE.pdf",email:"mohan.vsnvm@gmail.com"};function Wt(o,e,t){const s=o.slice();return s[10]=e[t].name,s[11]=e[t].route,s}function Ft(o,e,t){const s=o.slice();return s[10]=e[t].name,s[14]=e[t].description,s[15]=e[t].links,s[17]=t,s}function Kt(o,e,t){const s=o.slice();return s[10]=e[t].name,s[18]=e[t].link,s}function Qt(o,e,t){const s=o.slice();return s[21]=e[t].universityName,s[22]=e[t].qualification,s[23]=e[t].stream,s[24]=e[t].period,s[14]=e[t].description,s}function Xt(o,e,t){const s=o.slice();return s[27]=e[t],s}function Yt(o,e,t){const s=o.slice();return s[30]=e[t].companyName,s[31]=e[t].roles,s[14]=e[t].description,s}function Zt(o,e,t){const s=o.slice();return s[27]=e[t],s}function $t(o,e,t){const s=o.slice();return s[36]=e[t].role,s[24]=e[t].period,s}function el(o,e,t){const s=o.slice();return s[10]=e[t].name,s[18]=e[t].link,s}function tl(o,e,t){const s=o.slice();return s[10]=e[t].name,s[11]=e[t].route,s}function ll(o){let e,t,s=o[10]+"",c,b;return{c(){e=h("li"),t=h("a"),c=j(s),b=I(),this.h()},l(g){e=u(g,"LI",{class:!0});var v=d(e);t=u(v,"A",{class:!0,href:!0});var x=d(t);c=P(x,s),x.forEach(i),b=V(v),v.forEach(i),this.h()},h(){r(t,"class","custom-underline-effect svelte-b25smg"),r(t,"href",o[11]),r(e,"class","svelte-b25smg")},m(g,v){F(g,e,v),a(e,t),a(t,c),a(e,b)},p:ne,d(g){g&&i(e)}}}function sl(o){let e,t,s;return t=new Ke({props:{class:"mr-3 hover:scale-[1.1] active:scale-[0.95]",type:"solid",icon:o[10],height:"32px",width:"32px"}}),{c(){e=h("a"),Ge(t.$$.fragment),this.h()},l(c){e=u(c,"A",{target:!0,rel:!0,"data-sound-hover":!0,"data-sound-click":!0,href:!0,class:!0});var b=d(e);Ue(t.$$.fragment,b),b.forEach(i),this.h()},h(){r(e,"target","_blank"),r(e,"rel","noreferrer"),r(e,"data-sound-hover","pop"),r(e,"data-sound-click","click"),r(e,"href",o[18]),r(e,"class","svelte-b25smg")},m(c,b){F(c,e,b),We(t,e,null),s=!0},p:ne,i(c){s||(ue(t.$$.fragment,c),s=!0)},o(c){Ce(t.$$.fragment,c),s=!1},d(c){c&&i(e),Fe(t)}}}function al(o){let e,t,s=o[36]+"",c,b,g,v=o[24]+"",x;return{c(){e=h("div"),t=h("div"),c=j(s),b=I(),g=h("div"),x=j(v),this.h()},l(y){e=u(y,"DIV",{class:!0});var E=d(e);t=u(E,"DIV",{class:!0});var A=d(t);c=P(A,s),A.forEach(i),b=V(E),g=u(E,"DIV",{class:!0});var w=d(g);x=P(w,v),w.forEach(i),E.forEach(i),this.h()},h(){r(t,"class","text-lg text-gray-200 svelte-b25smg"),r(g,"class","text-md font-bold text-right date px-4 text-gray-200 svelte-b25smg"),r(e,"class","grid grid-rows-1 grid-flow-col svelte-b25smg")},m(y,E){F(y,e,E),a(e,t),a(t,c),a(e,b),a(e,g),a(g,x)},p:ne,d(y){y&&i(e)}}}function nl(o){let e,t=o[4](o[27])+"";return{c(){e=h("li"),this.h()},l(s){e=u(s,"LI",{class:!0});var c=d(e);c.forEach(i),this.h()},h(){r(e,"class","svelte-b25smg")},m(s,c){F(s,e,c),e.innerHTML=t},p:ne,d(s){s&&i(e)}}}function ol(o){let e,t,s=o[30]+"",c,b,g,v,x,y,E,A=o[31],w=[];for(let p=0;p<A.length;p+=1)w[p]=al($t(o,A,p));let k=o[14],f=[];for(let p=0;p<k.length;p+=1)f[p]=nl(Zt(o,k,p));return{c(){e=h("div"),t=h("div"),c=j(s),b=I();for(let p=0;p<w.length;p+=1)w[p].c();g=I(),v=h("div"),x=h("div"),y=h("ul");for(let p=0;p<f.length;p+=1)f[p].c();E=I(),this.h()},l(p){e=u(p,"DIV",{class:!0});var _=d(e);t=u(_,"DIV",{class:!0});var m=d(t);c=P(m,s),m.forEach(i),b=V(_);for(let M=0;M<w.length;M+=1)w[M].l(_);g=V(_),v=u(_,"DIV",{class:!0});var z=d(v);x=u(z,"DIV",{class:!0});var B=d(x);y=u(B,"UL",{class:!0});var H=d(y);for(let M=0;M<f.length;M+=1)f[M].l(H);H.forEach(i),B.forEach(i),z.forEach(i),E=V(_),_.forEach(i),this.h()},h(){r(t,"class","text-xl text-primary svelte-b25smg"),r(y,"class","text-gray-400 text-md svelte-b25smg"),r(x,"class","job-responsibilities mt-2 px-2 svelte-b25smg"),r(v,"class","description svelte-b25smg"),r(e,"class","mt-4 svelte-b25smg")},m(p,_){F(p,e,_),a(e,t),a(t,c),a(e,b);for(let m=0;m<w.length;m+=1)w[m]&&w[m].m(e,null);a(e,g),a(e,v),a(v,x),a(x,y);for(let m=0;m<f.length;m+=1)f[m]&&f[m].m(y,null);a(e,E)},p(p,_){if(_&0){A=p[31];let m;for(m=0;m<A.length;m+=1){const z=$t(p,A,m);w[m]?w[m].p(z,_):(w[m]=al(z),w[m].c(),w[m].m(e,g))}for(;m<w.length;m+=1)w[m].d(1);w.length=A.length}if(_[0]&16){k=p[14];let m;for(m=0;m<k.length;m+=1){const z=Zt(p,k,m);f[m]?f[m].p(z,_):(f[m]=nl(z),f[m].c(),f[m].m(y,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=k.length}},d(p){p&&i(e),le(w,p),le(f,p)}}}function rl(o){let e,t,s,c,b=o[4](o[27])+"";return{c(){e=h("div"),t=h("div"),s=h("ul"),c=h("li"),this.h()},l(g){e=u(g,"DIV",{class:!0});var v=d(e);t=u(v,"DIV",{class:!0});var x=d(t);s=u(x,"UL",{class:!0});var y=d(s);c=u(y,"LI",{class:!0});var E=d(c);E.forEach(i),y.forEach(i),x.forEach(i),v.forEach(i),this.h()},h(){r(c,"class","svelte-b25smg"),r(s,"class","text-gray-400 svelte-b25smg"),r(t,"class","job-responsibilities mt-2 px-2 svelte-b25smg"),r(e,"class","description svelte-b25smg")},m(g,v){F(g,e,v),a(e,t),a(t,s),a(s,c),c.innerHTML=b},p:ne,d(g){g&&i(e)}}}function il(o){let e,t,s=o[21]+"",c,b,g,v,x=o[22]+"",y,E,A=o[23]+"",w,k,f,p=o[24]+"",_,m,z,B=o[14],H=[];for(let M=0;M<B.length;M+=1)H[M]=rl(Xt(o,B,M));return{c(){e=h("div"),t=h("div"),c=j(s),b=I(),g=h("div"),v=h("div"),y=j(x),E=j(" in "),w=j(A),k=I(),f=h("div"),_=j(p),m=I();for(let M=0;M<H.length;M+=1)H[M].c();z=I(),this.h()},l(M){e=u(M,"DIV",{class:!0});var q=d(e);t=u(q,"DIV",{class:!0});var S=d(t);c=P(S,s),S.forEach(i),b=V(q),g=u(q,"DIV",{class:!0});var Q=d(g);v=u(Q,"DIV",{class:!0});var X=d(v);y=P(X,x),E=P(X," in "),w=P(X,A),X.forEach(i),k=V(Q),f=u(Q,"DIV",{class:!0});var Z=d(f);_=P(Z,p),Z.forEach(i),Q.forEach(i),m=V(q);for(let oe=0;oe<H.length;oe+=1)H[oe].l(q);z=V(q),q.forEach(i),this.h()},h(){r(t,"class","text-xl text-primary svelte-b25smg"),r(v,"class","text-lg text-gray-200 svelte-b25smg"),r(f,"class","text-md font-bold text-right date px-4 text-gray-200 svelte-b25smg"),r(g,"class","grid grid-rows-1 grid-flow-col svelte-b25smg"),r(e,"class","mt-4 svelte-b25smg")},m(M,q){F(M,e,q),a(e,t),a(t,c),a(e,b),a(e,g),a(g,v),a(v,y),a(v,E),a(v,w),a(g,k),a(g,f),a(f,_),a(e,m);for(let S=0;S<H.length;S+=1)H[S]&&H[S].m(e,null);a(e,z)},p(M,q){if(q[0]&16){B=M[14];let S;for(S=0;S<B.length;S+=1){const Q=Xt(M,B,S);H[S]?H[S].p(Q,q):(H[S]=rl(Q),H[S].c(),H[S].m(e,z))}for(;S<H.length;S+=1)H[S].d(1);H.length=B.length}},d(M){M&&i(e),le(H,M)}}}function cl(o){let e,t=o[10]+"",s;return{c(){e=h("a"),s=j(t),this.h()},l(c){e=u(c,"A",{class:!0,href:!0,target:!0,rel:!0});var b=d(e);s=P(b,t),b.forEach(i),this.h()},h(){r(e,"class","primary-outline button !px-[0.4rem] !py-[0.3rem] !bg-gray-800 capitalize svelte-b25smg"),r(e,"href",o[18]),r(e,"target","_blank"),r(e,"rel","noopener noreferrer")},m(c,b){F(c,e,b),a(e,s)},p:ne,d(c){c&&i(e)}}}function dl(o){let e,t,s=o[10]+"",c,b,g,v=o[14]+"",x,y,E,A,w=o[15],k=[];for(let f=0;f<w.length;f+=1)k[f]=cl(Kt(o,w,f));return{c(){e=h("div"),t=h("h3"),c=j(s),b=I(),g=h("p"),x=j(v),y=I(),E=h("div");for(let f=0;f<k.length;f+=1)k[f].c();A=I(),this.h()},l(f){e=u(f,"DIV",{class:!0});var p=d(e);t=u(p,"H3",{class:!0});var _=d(t);c=P(_,s),_.forEach(i),b=V(p),g=u(p,"P",{class:!0});var m=d(g);x=P(m,v),m.forEach(i),y=V(p),E=u(p,"DIV",{class:!0});var z=d(E);for(let B=0;B<k.length;B+=1)k[B].l(z);z.forEach(i),A=V(p),p.forEach(i),this.h()},h(){r(t,"class","project-title svelte-b25smg"),r(g,"class","project-description text-gray-400 svelte-b25smg"),r(E,"class","project-links svelte-b25smg"),r(e,"class","project-card bg-gray-800 svelte-b25smg")},m(f,p){F(f,e,p),a(e,t),a(t,c),a(e,b),a(e,g),a(g,x),a(e,y),a(e,E);for(let _=0;_<k.length;_+=1)k[_]&&k[_].m(E,null);a(e,A)},p(f,p){if(p&0){w=f[15];let _;for(_=0;_<w.length;_+=1){const m=Kt(f,w,_);k[_]?k[_].p(m,p):(k[_]=cl(m),k[_].c(),k[_].m(E,null))}for(;_<k.length;_+=1)k[_].d(1);k.length=w.length}},d(f){f&&i(e),le(k,f)}}}function hl(o){let e,t,s=o[10]+"",c,b,g,v;function x(...y){return o[5](o[11],...y)}return{c(){e=h("a"),t=h("div"),c=j(s),b=I(),this.h()},l(y){e=u(y,"A",{href:!0,class:!0});var E=d(e);t=u(E,"DIV",{class:!0});var A=d(t);c=P(A,s),A.forEach(i),b=V(E),E.forEach(i),this.h()},h(){r(t,"class","btn-text svelte-b25smg"),He(t,"hidden",!o[0]),r(e,"href",o[11]),r(e,"class","sub-button shadow fab-opt svelte-b25smg")},m(y,E){F(y,e,E),a(e,t),a(t,c),a(e,b),g||(v=ve(e,"click",x),g=!0)},p(y,E){o=y,E[0]&1&&He(t,"hidden",!o[0])},d(y){y&&i(e),g=!1,v()}}}function El(o){let e,t,s,c,b,g=ze.name+"",v,x,y,E=ze.subHead+"",A,w,k,f=ze.desc+"",p,_,m,z,B,H,M,q,S,Q,X,Z,oe,N,re,me,bt=ze.about+"",Qe,Xe,Le,Ye,$,ge,Ze,$e,et,je,tt,ee,fe,lt,st,at,Pe,nt,se,pe,ot,rt,ie,it,Te,ct,Y,_e,dt,ht,be,ut,vt,we,ae,ce,mt,Ne,K,ke,ye,de,gt,Be,te,xe,ft,wt;B=new Ke({props:{icon:"doc-download-solid",type:"solid"}});let Ee=o[2],J=[];for(let n=0;n<Ee.length;n+=1)J[n]=ll(tl(o,Ee,n));let he=Jt,L=[];for(let n=0;n<he.length;n+=1)L[n]=sl(el(o,he,n));const fl=n=>Ce(L[n],1,1,()=>{L[n]=null});let Ie=Gt,O=[];for(let n=0;n<Ie.length;n+=1)O[n]=ol(Yt(o,Ie,n));let Ve=Ut,G=[];for(let n=0;n<Ve.length;n+=1)G[n]=il(Qt(o,Ve,n));let De=Ot,U=[];for(let n=0;n<De.length;n+=1)U[n]=dl(Ft(o,De,n));ce=new Ke({props:{icon:"user-cicle-solid",type:"solid"}}),de=new Ke({props:{class:"icon absolute left-[25%] top-[25%]",icon:"paper-airplane",height:"32px",width:"32px",type:"solid"}});let Me=o[3],W=[];for(let n=0;n<Me.length;n+=1)W[n]=hl(Wt(o,Me,n));return{c(){e=h("div"),t=h("div"),s=h("div"),c=h("div"),b=h("p"),v=j(g),x=I(),y=h("p"),A=j(E),w=I(),k=h("p"),p=j(f),_=I(),m=h("div"),z=h("a"),Ge(B.$$.fragment),H=j(`
					Resume`),M=I(),q=h("nav"),S=h("ul");for(let n=0;n<J.length;n+=1)J[n].c();Q=I(),X=h("div"),Z=h("div");for(let n=0;n<L.length;n+=1)L[n].c();oe=I(),N=h("div"),re=h("section"),me=h("p"),Qe=j(bt),Xe=I(),Le=h("div"),Ye=I(),$=h("section"),ge=h("h2"),Ze=j("Experience"),$e=I();for(let n=0;n<O.length;n+=1)O[n].c();et=I(),je=h("div"),tt=I(),ee=h("section"),fe=h("h2"),lt=j("Education"),st=I();for(let n=0;n<G.length;n+=1)G[n].c();at=I(),Pe=h("div"),nt=I(),se=h("section"),pe=h("h2"),ot=j("Projects"),rt=I(),ie=h("div");for(let n=0;n<U.length;n+=1)U[n].c();it=I(),Te=h("div"),ct=I(),Y=h("section"),_e=h("h2"),dt=j("Get In Touch"),ht=I(),be=h("p"),ut=j(`My inbox is always open. Whether you have a question or just want to say hi, I’ll try my
					best to get back to you!`),vt=I(),we=h("div"),ae=h("a"),Ge(ce.$$.fragment),mt=j(`
						Say Hello`),Ne=I(),K=h("div"),ke=h("div"),ye=h("div"),Ge(de.$$.fragment),gt=I();for(let n=0;n<W.length;n+=1)W[n].c();Be=I(),te=h("div"),this.h()},l(n){e=u(n,"DIV",{class:!0});var D=d(e);t=u(D,"DIV",{class:!0});var l=d(t);s=u(l,"DIV",{class:!0});var C=d(s);c=u(C,"DIV",{class:!0});var Se=d(c);b=u(Se,"P",{class:!0});var kt=d(b);v=P(kt,g),kt.forEach(i),x=V(Se),y=u(Se,"P",{class:!0});var yt=d(y);A=P(yt,E),yt.forEach(i),w=V(Se),k=u(Se,"P",{class:!0});var xt=d(k);p=P(xt,f),xt.forEach(i),Se.forEach(i),_=V(C),m=u(C,"DIV",{class:!0});var Et=d(m);z=u(Et,"A",{href:!0,class:!0,target:!0});var pt=d(z);Ue(B.$$.fragment,pt),H=P(pt,`
					Resume`),pt.forEach(i),Et.forEach(i),M=V(C),q=u(C,"NAV",{class:!0});var It=d(q);S=u(It,"UL",{class:!0});var Vt=d(S);for(let T=0;T<J.length;T+=1)J[T].l(Vt);Vt.forEach(i),It.forEach(i),Q=V(C),X=u(C,"DIV",{class:!0});var Dt=d(X);Z=u(Dt,"DIV",{class:!0});var Mt=d(Z);for(let T=0;T<L.length;T+=1)L[T].l(Mt);Mt.forEach(i),Dt.forEach(i),C.forEach(i),oe=V(l),N=u(l,"DIV",{class:!0});var R=d(N);re=u(R,"SECTION",{id:!0,class:!0});var St=d(re);me=u(St,"P",{class:!0});var At=d(me);Qe=P(At,bt),At.forEach(i),St.forEach(i),Xe=V(R),Le=u(R,"DIV",{class:!0}),d(Le).forEach(i),Ye=V(R),$=u(R,"SECTION",{id:!0,class:!0});var qe=d($);ge=u(qe,"H2",{class:!0});var zt=d(ge);Ze=P(zt,"Experience"),zt.forEach(i),$e=V(qe);for(let T=0;T<O.length;T+=1)O[T].l(qe);qe.forEach(i),et=V(R),je=u(R,"DIV",{class:!0}),d(je).forEach(i),tt=V(R),ee=u(R,"SECTION",{id:!0,class:!0});var Re=d(ee);fe=u(Re,"H2",{class:!0});var Ct=d(fe);lt=P(Ct,"Education"),Ct.forEach(i),st=V(Re);for(let T=0;T<G.length;T+=1)G[T].l(Re);Re.forEach(i),at=V(R),Pe=u(R,"DIV",{class:!0}),d(Pe).forEach(i),nt=V(R),se=u(R,"SECTION",{id:!0,class:!0});var Je=d(se);pe=u(Je,"H2",{class:!0});var Ht=d(pe);ot=P(Ht,"Projects"),Ht.forEach(i),rt=V(Je),ie=u(Je,"DIV",{class:!0});var Lt=d(ie);for(let T=0;T<U.length;T+=1)U[T].l(Lt);Lt.forEach(i),Je.forEach(i),it=V(R),Te=u(R,"DIV",{class:!0}),d(Te).forEach(i),ct=V(R),Y=u(R,"SECTION",{id:!0,class:!0});var Ae=d(Y);_e=u(Ae,"H2",{class:!0});var jt=d(_e);dt=P(jt,"Get In Touch"),jt.forEach(i),ht=V(Ae),be=u(Ae,"P",{class:!0});var Pt=d(be);ut=P(Pt,`My inbox is always open. Whether you have a question or just want to say hi, I’ll try my
					best to get back to you!`),Pt.forEach(i),vt=V(Ae),we=u(Ae,"DIV",{class:!0});var Tt=d(we);ae=u(Tt,"A",{href:!0,class:!0});var _t=d(ae);Ue(ce.$$.fragment,_t),mt=P(_t,`
						Say Hello`),_t.forEach(i),Tt.forEach(i),Ae.forEach(i),R.forEach(i),l.forEach(i),D.forEach(i),Ne=V(n),K=u(n,"DIV",{class:!0});var Oe=d(K);ke=u(Oe,"DIV",{class:!0});var Nt=d(ke);ye=u(Nt,"DIV",{class:!0});var Bt=d(ye);Ue(de.$$.fragment,Bt),Bt.forEach(i),Nt.forEach(i),gt=V(Oe);for(let T=0;T<W.length;T+=1)W[T].l(Oe);Oe.forEach(i),Be=V(n),te=u(n,"DIV",{class:!0}),d(te).forEach(i),this.h()},h(){r(b,"class","text-4xl lg:text-4xl font-montserrat mt-2 mb-0 uppercase name svelte-b25smg"),r(y,"class","text-lg font-montserrat dark:text-white mt-1 mb-2 text-gray-300 svelte-b25smg"),r(k,"class","text-lg font-inter text-gray-300 w-4/5 svelte-b25smg"),r(c,"class","container lg:mx-auto lg:mt-20 mt-14 svelte-b25smg"),r(z,"href",ze.resumeHref),r(z,"class","button primary-outline !px-[0.4rem] !py-[0.3rem] fill-down svelte-b25smg"),r(z,"target","_blank"),r(m,"class","mt-6 lg:mt-8 svelte-b25smg"),r(S,"class","svelte-b25smg"),r(q,"class","mt-8 hidden lg:block svelte-b25smg"),r(Z,"class","grid grid-cols-3 svelte-b25smg"),r(X,"class","absolute bottom-12 hidden lg:block svelte-b25smg"),r(s,"class","left px-4 md:px-8 lg:px-8 svelte-b25smg"),r(me,"class","text-lg text-gray-400 svelte-b25smg"),r(re,"id","about"),r(re,"class","mt-2 py-8 svelte-b25smg"),r(Le,"class","separator svelte-b25smg"),r(ge,"class","text-2xl font-bold text-primary uppercase svelte-b25smg"),r($,"id","experience"),r($,"class","py-8 svelte-b25smg"),r(je,"class","separator svelte-b25smg"),r(fe,"class","text-2xl font-bold text-primary uppercase svelte-b25smg"),r(ee,"id","education"),r(ee,"class","py-8 svelte-b25smg"),r(Pe,"class","separator svelte-b25smg"),r(pe,"class","text-2xl font-bold text-primary mb-6 uppercase svelte-b25smg"),r(ie,"class","project-list text-gray-300 svelte-b25smg"),r(se,"id","projects"),r(se,"class","py-8 svelte-b25smg"),r(Te,"class","separator svelte-b25smg"),r(_e,"class","text-2xl font-bold text-primary uppercase svelte-b25smg"),r(be,"class","mt-4 text-md text-gray-400 svelte-b25smg"),r(ae,"href","mailto:"+ze.email),r(ae,"class","button primary-outline !px-[0.4rem] !py-[0.3rem] fill-down svelte-b25smg"),r(we,"class","mt-8 svelte-b25smg"),r(Y,"id","contact-me"),r(Y,"class","py-8 mb-8 lg:mb-12 svelte-b25smg"),r(N,"class","right text-black d-flex px-4 md:px-8 lg:mt-12 svelte-b25smg"),r(t,"class","cust-container mx-auto svelte-b25smg"),r(e,"class","flex-grow p-0 m-0 text-white bg-dark svelte-b25smg"),r(ye,"class","fab-content svelte-b25smg"),r(ke,"class","fab shadow svelte-b25smg"),r(K,"class","fab-container svelte-b25smg"),He(K,"active",o[0]),r(te,"class","overlay svelte-b25smg"),He(te,"active",o[0])},m(n,D){F(n,e,D),a(e,t),a(t,s),a(s,c),a(c,b),a(b,v),a(c,x),a(c,y),a(y,A),a(c,w),a(c,k),a(k,p),a(s,_),a(s,m),a(m,z),We(B,z,null),a(z,H),a(s,M),a(s,q),a(q,S);for(let l=0;l<J.length;l+=1)J[l]&&J[l].m(S,null);a(s,Q),a(s,X),a(X,Z);for(let l=0;l<L.length;l+=1)L[l]&&L[l].m(Z,null);a(t,oe),a(t,N),a(N,re),a(re,me),a(me,Qe),a(N,Xe),a(N,Le),a(N,Ye),a(N,$),a($,ge),a(ge,Ze),a($,$e);for(let l=0;l<O.length;l+=1)O[l]&&O[l].m($,null);a(N,et),a(N,je),a(N,tt),a(N,ee),a(ee,fe),a(fe,lt),a(ee,st);for(let l=0;l<G.length;l+=1)G[l]&&G[l].m(ee,null);a(N,at),a(N,Pe),a(N,nt),a(N,se),a(se,pe),a(pe,ot),a(se,rt),a(se,ie);for(let l=0;l<U.length;l+=1)U[l]&&U[l].m(ie,null);a(N,it),a(N,Te),a(N,ct),a(N,Y),a(Y,_e),a(_e,dt),a(Y,ht),a(Y,be),a(be,ut),a(Y,vt),a(Y,we),a(we,ae),We(ce,ae,null),a(ae,mt),F(n,Ne,D),F(n,K,D),a(K,ke),a(ke,ye),We(de,ye,null),a(K,gt);for(let l=0;l<W.length;l+=1)W[l]&&W[l].m(K,null);F(n,Be,D),F(n,te,D),xe=!0,ft||(wt=[ve(K,"click",o[6]),ve(K,"keydown",o[7]),ve(te,"click",o[8]),ve(te,"keydown",o[9])],ft=!0)},p(n,D){if(D[0]&4){Ee=n[2];let l;for(l=0;l<Ee.length;l+=1){const C=tl(n,Ee,l);J[l]?J[l].p(C,D):(J[l]=ll(C),J[l].c(),J[l].m(S,null))}for(;l<J.length;l+=1)J[l].d(1);J.length=Ee.length}if(D&0){he=Jt;let l;for(l=0;l<he.length;l+=1){const C=el(n,he,l);L[l]?(L[l].p(C,D),ue(L[l],1)):(L[l]=sl(C),L[l].c(),ue(L[l],1),L[l].m(Z,null))}for(kl(),l=he.length;l<L.length;l+=1)fl(l);bl()}if(D[0]&16){Ie=Gt;let l;for(l=0;l<Ie.length;l+=1){const C=Yt(n,Ie,l);O[l]?O[l].p(C,D):(O[l]=ol(C),O[l].c(),O[l].m($,null))}for(;l<O.length;l+=1)O[l].d(1);O.length=Ie.length}if(D[0]&16){Ve=Ut;let l;for(l=0;l<Ve.length;l+=1){const C=Qt(n,Ve,l);G[l]?G[l].p(C,D):(G[l]=il(C),G[l].c(),G[l].m(ee,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=Ve.length}if(D&0){De=Ot;let l;for(l=0;l<De.length;l+=1){const C=Ft(n,De,l);U[l]?U[l].p(C,D):(U[l]=dl(C),U[l].c(),U[l].m(ie,null))}for(;l<U.length;l+=1)U[l].d(1);U.length=De.length}if(D[0]&11){Me=n[3];let l;for(l=0;l<Me.length;l+=1){const C=Wt(n,Me,l);W[l]?W[l].p(C,D):(W[l]=hl(C),W[l].c(),W[l].m(K,null))}for(;l<W.length;l+=1)W[l].d(1);W.length=Me.length}(!xe||D[0]&1)&&He(K,"active",n[0]),(!xe||D[0]&1)&&He(te,"active",n[0])},i(n){if(!xe){ue(B.$$.fragment,n);for(let D=0;D<he.length;D+=1)ue(L[D]);ue(ce.$$.fragment,n),ue(de.$$.fragment,n),xe=!0}},o(n){Ce(B.$$.fragment,n),L=L.filter(Boolean);for(let D=0;D<L.length;D+=1)Ce(L[D]);Ce(ce.$$.fragment,n),Ce(de.$$.fragment,n),xe=!1},d(n){n&&i(e),Fe(B),le(J,n),le(L,n),le(O,n),le(G,n),le(U,n),Fe(ce),n&&i(Ne),n&&i(K),Fe(de),le(W,n),n&&i(Be),n&&i(te),ft=!1,gl(wt)}}}function Il(o,e,t){let s=!1;const c=k=>{const f=document.getElementById(k);f&&f.scrollIntoView({behavior:"smooth"})};wl(()=>{const k=_=>{_.preventDefault();const m=_.target.getAttribute("href").substring(1);c(m)};document.querySelectorAll("nav ul li a").forEach(_=>{_.addEventListener("click",k)}),document.querySelectorAll(".fab-container a").forEach(_=>{_.addEventListener("click",k)}),document.addEventListener("keydown",_=>{_.code==="KeyF"&&t(0,s=!s)})});const b=[{name:"About",route:"#about"},{name:"Experience",route:"#experience"},{name:"Education",route:"#education"},{name:"Projects",route:"#projects"},{name:"Contact Me",route:"#contact-me"}],g=b.slice().reverse();return[s,c,b,g,k=>{const f=/\*(.*?)\*/g,p=/\[(.*?)\]\((.*?)\)/g;return k.replace(f,'<span class="text-white">$1</span>').replace(p,'<a class="custom-underline-effect" href="$2" target="_blank"><span class="text-white">$1</span></a>')},(k,f)=>{c(k.substring(1))},()=>{t(0,s=!s)},k=>{k.key==="Escape"&&t(0,s=!1)},()=>{t(0,s=!1)},k=>{k.key==="Escape"&&t(0,s=!1)}]}class Dl extends ul{constructor(e){super(),vl(this,e,Il,El,ml,{},null,[-1,-1])}}export{Dl as component};
