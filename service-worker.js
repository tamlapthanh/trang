if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const c=e=>i(e,o),f={module:{uri:o},exports:a,require:c};s[o]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(n(...e),a)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Framework7Icons-Regular-Db9RwDq_.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular-DocpuGSF.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index-C6wPoON6.js",revision:"24792cdd47e66d5cb2d0607748976736"},{url:"assets/index-GT6YyA-N.css",revision:"a9c1cf451f3a9b1a73e42a155f7d59a2"},{url:"assets/material-icons-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/material-icons-kAwBdRge.woff2",revision:"53436aca8627a49f4deaaa44dc9e3c05"},{url:"assets/placeholder_image.png",revision:"8057445ee61f0662c373e0503ec524d5"},{url:"icons/128x128.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"icons/144x144.png",revision:"47efa07843a29aff095e50015e084e85"},{url:"icons/152x152.png",revision:"ab189ff1c3604cbecd2ccc180b6f7c25"},{url:"icons/192x192.png",revision:"9ad7d46019f56396237834ced5038973"},{url:"icons/256x256.png",revision:"28969ffd71e59d0bb2ca642ac8bb0134"},{url:"icons/512x512.png",revision:"aa0c2f038e42624eb7ee396b272ee852"},{url:"icons/apple-touch-icon.png",revision:"4e94b1d1edaea36f052ec015c03ff26b"},{url:"icons/favicon.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"index.html",revision:"1f694080d293f912cdda68de3e3857da"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
