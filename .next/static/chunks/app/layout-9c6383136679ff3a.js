(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7272:function(e,t,n){Promise.resolve().then(n.bind(n,2798)),Promise.resolve().then(n.t.bind(n,4742,23)),Promise.resolve().then(n.t.bind(n,7960,23))},2798:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return o}});var r=n(7437);n(2265);var s=n(5922);function o(e){let{children:t,...n}=e;return(0,r.jsx)(s.f,{...n,children:t})}},7960:function(){},4742:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},5922:function(e,t,n){"use strict";n.d(t,{F:function(){return m},f:function(){return u}});var r=n(2265),s=(e,t,n,r,s,o,a,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&o?s.map(e=>o[e]||e):s;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=r.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=r.useContext(i))?e:c},u=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(h,{...e}),d=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=d,defaultTheme:u=s?"system":"light",attribute:h="data-theme",value:v,children:g,nonce:w,scriptProps:E}=e,[S,_]=r.useState(()=>y(c,u)),[k,C]=r.useState(()=>y(c)),T=v?Object.values(v):m,L=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=b());let r=v?v[t]:t,a=n?p(w):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...T),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=o.includes(u)?u:null,n=o.includes(t)?t:e;i.style.colorScheme=n}null==a||a()},[w]),A=r.useCallback(e=>{let t="function"==typeof e?e(S):e;_(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),P=r.useCallback(e=>{C(b(e)),"system"===S&&s&&!t&&L("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?_(e.newValue):A(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),r.useEffect(()=>{L(null!=t?t:S)},[t,S]);let N=r.useMemo(()=>({theme:S,setTheme:A,forcedTheme:t,resolvedTheme:"system"===S?k:S,themes:s?[...m,"system"]:m,systemTheme:s?k:void 0}),[S,A,t,k,s,m]);return r.createElement(i.Provider,{value:N},r.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:s,enableColorScheme:l,defaultTheme:u,value:v,themes:m,nonce:w,scriptProps:E}),g)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:a,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:u,scriptProps:d}=e,h=JSON.stringify([o,n,i,t,m,c,a,l]).slice(1,-1);return r.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){e.O(0,[540,971,117,744],function(){return e(e.s=7272)}),_N_E=e.O()}]);