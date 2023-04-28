(()=>{"use strict";var n={918:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap);"]),a.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  border: none;\n  outline: none;\n  scroll-behavior: smooth;\n  font-family: "Poppins", sans-serif;\n}\n\n:root {\n  --main-color: #f27405;\n  --secondary-color: #f2913d;\n  --main-white: #fff;\n  --main-black: #000;\n  --background-color: #f2e7dc;\n  --grey-dark: #666;\n  --grey-light: #c7c7c7;\n  --skeleton-grey: #e9e9e9;\n}\n\nhtml {\n  font-size: 62.5%;\n  overflow: hidden;\n}\n\nbody {\n  background: var(--main-white);\n  color: var(--main-black);\n  transition: color, background 0.5s ease-in;\n  overflow: hidden;\n  scroll-behavior: smooth;\n  max-width: 2048px;\n  margin: auto;\n}\n\n.dark-mode {\n  background: var(--main-black);\n  color: var(--main-white);\n  transition: color, background 0.5s ease-out;\n}\n\n/* for chrome/safari */\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--secondary-color);\n  border-radius: 0.5rem;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: var(--main-color);\n}\n\n.body-container {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-areas: "sidebar newsbox morebox annoucementbox";\n  grid-template-columns: max-content max-content minmax(0, 1fr) max-content;\n}\n\n/* side-nav */\n.side-nav {\n  height: 100%;\n  border-right: 1px solid #c7c7c7;\n  width: max-content;\n  grid-area: sidebar;\n}\n\n.side-nav .page-icons {\n  display: flex;\n  flex-direction: column;\n}\n\n.side-nav .page-icons div {\n  padding: 2rem;\n  border-bottom: 1px solid #c7c7c7;\n}\n\n.side-nav .menu-btn {\n  display: none;\n  background: none;\n}\n\n.side-nav .mobile-menu {\n  display: none;\n}\n\n.nav-icon {\n  font-size: 3.6rem;\n  color: #888;\n}\n\n.side-nav a:hover .nav-icon {\n  color: var(--main-color);\n  animation: jiggle 1s ease-in-out infinite;\n}\n\n#announcements-icon {\n  display: none;\n}\n\n@keyframes jiggle {\n  0% {\n    transform: rotateZ(-15deg);\n  }\n  25% {\n    transform: rotateZ(0deg);\n  }\n  50% {\n    transform: rotateZ(15deg);\n  }\n  75% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(-15deg);\n  }\n}\n\n/* side-modal */\n.side-modal-backdrop {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 500;\n  display: flex;\n  justify-content: flex-end;\n  background-color: #00000090;\n}\n\n.side-modal-backdrop .side-modal {\n  width: 40%;\n  height: 100%;\n  background-color: var(--main-white);\n}\n\n/* news-container */\n.news-container {\n  width: 100%;\n  padding: 0 3rem;\n  overflow-y: auto;\n  min-width: 600px;\n  padding-top: 1rem;\n  grid-area: newsbox;\n  border-right: 1px solid var(--grey-light);\n  /* for firefox */\n  scrollbar-color: var(--secondary-color);\n}\n\n.news-container > div {\n  padding: 2rem 0;\n}\n\n.title {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n/* news-card */\n.news-card,\n.skeleton-card {\n  border-radius: 1.5rem;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  border: 1px solid #c7c7c7;\n  margin-bottom: 3rem;\n  min-width: 350px;\n}\n\n.news-header,\n.skeleton-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 2rem 0;\n}\n\n.news-header .content-left,\n.skeleton-header .skeleton-left {\n  display: flex;\n  gap: 1rem;\n}\n\n.news-header .content-left img,\n.skeleton-header .skeleton-left > div:first-of-type {\n  height: 60px;\n  width: 60px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.skeleton-header .skeleton-left > div:first-of-type {\n  background-color: var(--skeleton-grey);\n}\n\n.skeleton-header .skeleton-left .skeleton-info > div:first-of-type,\n.skeleton-header .skeleton-left .skeleton-info > div:last-of-type,\n.skeleton-right > div {\n  width: 50px;\n  height: 1.5rem;\n  background-color: var(--skeleton-grey);\n  border-radius: 1rem;\n}\n\n.skeleton-header .skeleton-left .skeleton-info > div:last-of-type {\n  margin-top: 1rem;\n  width: 100px;\n}\n\n.news-header .content-left img.dark-mode {\n  border: 1px solid var(--main-white);\n}\n\n.content-right .news-duration {\n  text-align: right;\n}\n\n.author-name {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n.author-department {\n  font-size: 1.3rem;\n}\n\n.news-duration {\n  font-size: 1.3rem;\n  color: var(--grey-dark);\n}\n\n.skeleton-body > div:last-of-type {\n  width: 100%;\n  height: 300px;\n  background-color: var(--skeleton-grey);\n}\n\n.no-data-image {\n  width: 100%;\n  height: clamp(350px, 600px, 700px);\n  object-fit: cover;\n}\n\n.news-body img {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n}\n.skeleton-content {\n  padding: 1rem 2rem;\n}\n\n.news-body p,\n.skeleton-content > div {\n  padding: 1rem 2rem;\n  font-size: 1.3rem;\n  max-width: 500px;\n}\n\n.skeleton-content > div {\n  background-color: var(--skeleton-grey);\n  width: 300px;\n  height: 1.3rem;\n  border-radius: 1rem;\n}\n\n.skeleton-content > div:last-of-type {\n  margin-top: 1rem;\n  width: 250px;\n}\n\n.news-footer,\n.skeleton-footer {\n  display: flex;\n  gap: 1rem;\n}\n\n.skeleton-footer {\n  padding: 2rem;\n}\n\n.skeleton-footer > div {\n  height: 4rem;\n  width: 4rem;\n  background-color: var(--skeleton-grey);\n  border-radius: 1rem;\n}\n\n.news-footer span {\n  display: flex;\n  align-items: center;\n}\n\n.news-footer span i {\n  font-size: 2.5rem;\n  padding: 1rem;\n}\n\n.news-footer span label {\n  font-size: 1.2rem;\n}\n\n.skeleton-header .skeleton-left > div:first-of-type,\n.skeleton-header .skeleton-left .skeleton-info > div,\n.skeleton-right > div,\n.skeleton-body > div:last-of-type,\n.skeleton-content > div,\n.skeleton-footer > div {\n  position: relative;\n  overflow: hidden;\n}\n\n.skeleton-header .skeleton-left > div:first-of-type::after,\n.skeleton-header .skeleton-left .skeleton-info > div::after,\n.skeleton-right > div::after,\n.skeleton-body > div:last-of-type::after,\n.skeleton-content > div::after,\n.skeleton-footer > div::after {\n  position: absolute;\n  content: "";\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateX(-100%);\n  background: linear-gradient(90deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);\n  background-size: 200% 100%;\n  z-index: 500;\n  filter: blur(5px);\n  animation: shimmer 2s ease-out infinite;\n}\n\n/* end of news-container */\n\n/* more-section */\n.more-container {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  padding: 2rem 0;\n  border-right: 1px solid var(--grey-light);\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 2rem;\n}\n/* end of more-section */\n\n/* search-bar */\n.search-block,\n.mobile-search {\n  max-width: 500px;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  border-radius: 5rem;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  padding: 1rem;\n}\n\n.mobile-search {\n  margin: 1rem;\n}\n\n.mobile-search input,\n.search-block input {\n  width: 100%;\n  background: transparent;\n  flex: 1;\n  padding: 0.5rem 1rem;\n  font-size: 1.6rem;\n  color: var(--grey-dark);\n}\n\n::placeholder {\n  color: var(--grey-dark);\n}\n\n.mobile-search button,\n.search-block button {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  background: var(--secondary-color);\n  transition: transform 0.2s ease-out;\n}\n\n.search-block button i {\n  font-size: 2rem;\n}\n\n.search-block button:hover {\n  transform: scale(1.1);\n}\n\n/* news-tile */\n.more-news {\n  height: 100%;\n  grid-column: 1 / -1;\n  overflow-x: auto;\n  gap: 1rem;\n  padding: 1rem;\n  grid-area: morebox;\n}\n\n.news-tile-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4rem;\n  overflow-y: auto;\n  padding-bottom: 3rem;\n}\n\n.news-tile,\n.skeleton-news-tile {\n  display: flex;\n  gap: 1rem;\n  padding: 1.5rem;\n  width: 400px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 1rem;\n  transition: color, background 0.5s ease-out;\n}\n\n.news-tile.dark-mode {\n  background: var(--grey-dark);\n  transition: background, box-shadow 0.5s ease-out;\n  box-shadow: var(--grey-dark) 0px 2px 8px 0px;\n}\n\n.news-tile img,\n.skeleton-news-tile > div:first-child {\n  height: 150px;\n  width: 150px;\n  object-fit: cover;\n}\n\n.skeleton-news-tile.darkmode {\n  background-color: var(--grey-light);\n}\n\n.skeleton-news-tile > div:first-child {\n  background-color: var(--skeleton-grey);\n}\n\n.news-tile div p,\n.skeleton-news-tile > div:last-child {\n  width: 200px;\n}\n\n.skeleton-news-tile > div:first-child {\n  position: relative;\n  overflow: hidden;\n}\n\n.skeleton-news-tile > div:last-child > div {\n  position: relative;\n  height: 1.5rem;\n  width: 100%;\n  background-color: var(--skeleton-grey);\n  margin-top: 1rem;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.skeleton-news-tile > div:last-child > div:first-child {\n  height: 2rem;\n}\n\n.skeleton-news-tile > div:last-child > div:last-child {\n  width: 150px;\n}\n\n.skeleton-news-tile > div:first-child::after,\n.skeleton-news-tile > div:last-child > div::after {\n  position: absolute;\n  content: "";\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateX(-100%);\n  background: linear-gradient(90deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);\n  background-size: 200% 100%;\n  z-index: 500;\n  filter: blur(5px);\n  animation: shimmer 2s ease-out infinite;\n}\n\n@keyframes shimmer {\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n/* end of news-tile */\n\n/* announcements section */\n.announcements-container {\n  grid-area: annoucementbox;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.announcements-container > div {\n  display: flex;\n  width: 100%;\n  gap: 1rem;\n  overflow-y: hidden;\n  overflow-x: auto;\n  padding: 1rem 2rem;\n}\n\n.announcements-container .announcement-tile {\n  max-width: 250px;\n  min-width: 150px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n  border-radius: 1rem;\n}\n\n.announcements-container .announcement-tile.dark-mode {\n  background-color: var(--grey-dark);\n}\n.announcements-container .announcement-tile p {\n  display: none;\n}\n/* end of announcements section */\n\n/* toggle-switch */\n.toggle-switch {\n  cursor: pointer;\n  position: absolute;\n  top: 1rem;\n  right: 3rem;\n  width: 2rem;\n  height: 4rem;\n  background-color: var(--main-color);\n  border-radius: 30rem 30rem 15rem 15rem;\n  box-shadow: 0.1rem 0.1rem 0.1rem var(--main-color),\n    -0.1rem -0.1rem 0.1rem var(--main-color);\n  transition: top 0.4s 0.2s;\n}\n\n.toggle-switch.change {\n  top: 5rem;\n  transition: top 0.4s;\n}\n\n.toggle-switch:hover {\n  transform: scale(1.02);\n}\n\n.toggle-switch::before {\n  position: absolute;\n  content: "";\n  width: 0.3rem;\n  height: 5rem;\n  top: -5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: var(--main-color);\n  box-shadow: 0.1rem 0.1rem var(--main-color);\n}\n/* end of toggle-switch */\n\n/* responsive layouts */\n\n@media (max-width: 1200px) {\n  html {\n    font-size: 60%;\n  }\n\n  /* .news-container {\n    min-width: 300px;\n  } */\n\n  .news-body img {\n    height: 300px;\n    width: 100%;\n  }\n\n  .news-tile {\n    width: 300px;\n  }\n\n  .search-block {\n    max-width: 300px;\n  }\n\n  .news-tile img {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n@media (max-width: 1400px) {\n  .skeleton-news-tile,\n  .news-tile {\n    flex-direction: column;\n    align-items: center;\n    max-width: 250px;\n    gap: 0.5rem;\n    padding: 1rem;\n    min-width: 200px;\n  }\n\n  .skeleton-news-tile > div:first-child,\n  .news-tile img {\n    height: 100px;\n    width: 150px;\n  }\n\n  .skeleton-news-tile > div:last-child > div {\n    height: 1.2rem;\n  }\n\n  .skeleton-news-tile > div:last-child > div:first-child {\n    height: 1.5rem;\n  }\n\n  .search-block {\n    max-width: 200px;\n  }\n\n  .news-container {\n    min-width: 250px;\n  }\n\n  .news-card {\n    max-width: 400px;\n  }\n}\n\n/* mobile screens */\n@media (max-width: 768px) {\n  html {\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n\n  body {\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n\n  .toggle-switch {\n    display: none;\n  }\n\n  .side-nav {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    background-color: var(--main-white);\n    height: max-content;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    border-right: none;\n    border-top: 1px solid var(--grey-light);\n    grid-area: sidebar;\n  }\n\n  .side-nav.dark-mode {\n    background-color: var(--main-black);\n  }\n\n  .side-nav .page-icons {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .side-nav .page-icons div {\n    border-bottom: none;\n  }\n\n  .side-nav .menu-btn {\n    display: block;\n    padding: 1rem;\n  }\n\n  .side-nav .mobile-menu.active {\n    display: flex;\n    flex-direction: column;\n    background: var(--main-white);\n    width: 100%;\n    position: absolute;\n    top: 0;\n    transform: translateY(-100%);\n    border-top: 1px solid var(--grey-light);\n    border-bottom: 1px solid var(--grey-light);\n  }\n\n  .side-nav .mobile-menu.dark-mode {\n    background: var(--grey-dark);\n  }\n\n  .side-nav .mobile-menu .night-mode-btn {\n    display: flex;\n    align-items: baseline;\n    padding: 2rem;\n    font-size: 1.5rem;\n    border-bottom: 1px solid var(--grey-light);\n  }\n\n  .side-nav .mobile-menu .night-mode-btn i:first-of-type {\n    margin-left: 1rem;\n    font-size: 2rem;\n  }\n\n  #announcements-icon {\n    display: block;\n  }\n\n  .body-container {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "annoucementbox"\n      "newsbox"\n      "sidebar";\n  }\n\n  .news-container {\n    padding: 0 1rem;\n    padding-top: 2rem;\n    padding-bottom: 8rem;\n    scrollbar-width: none;\n  }\n\n  .news-container::-webkit-scrollbar {\n    display: none;\n  }\n\n  .news-card,\n  .skeleton-card {\n    max-width: 600px;\n    margin-bottom: 1.5rem;\n  }\n\n  .more-container {\n    display: none;\n  }\n\n  .news-card {\n    min-width: 300px;\n  }\n\n  .announcement-tile {\n    margin-bottom: 1rem;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n    padding: 1rem;\n    font-size: 1.2rem;\n    border-radius: 1rem;\n  }\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},610:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});const o=t.p+"no_data.png"},323:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var o=t(379),r=t.n(o),i=t(795),a=t.n(i),s=t(569),d=t.n(s),l=t(565),c=t.n(l),A=t(216),m=t.n(A),p=t(589),u=t.n(p),v=t(918),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=m(),r()(v.Z,f);const h=v.Z&&v.Z.locals?v.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],l=o.base?d[0]+o.base:d[0],c=i[l]||0,A="".concat(l," ").concat(c);i[l]=c+1;var m=t(A),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var u=r(p,o);o.byIndex=s,e.splice(s,0,{identifier:A,updater:u,references:1})}a.push(A)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=o(n,r),l=0;l<i.length;l++){var c=t(i[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},344:function(n,e,t){var o=this&&this.__awaiter||function(n,e,t,o){return new(t||(t=Promise))((function(r,i){function a(n){try{d(o.next(n))}catch(n){i(n)}}function s(n){try{d(o.throw(n))}catch(n){i(n)}}function d(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}d((o=o.apply(n,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.searchArticles=e.getMostViewedArticles=void 0;const r=t(763);e.getMostViewedArticles=()=>o(void 0,void 0,void 0,(function*(){return(yield fetch("http://localhost:3001/topNews")).json()})),e.searchArticles=n=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`http://localhost:3001/allNews?${(0,r.getQueryString)({q:n})}`)).json()}))},752:function(n,e,t){var o=this&&this.__awaiter||function(n,e,t,o){return new(t||(t=Promise))((function(r,i){function a(n){try{d(o.next(n))}catch(n){i(n)}}function s(n){try{d(o.throw(n))}catch(n){i(n)}}function d(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}d((o=o.apply(n,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const r=t(344),i=t(605),a=t(45);t(323);const s=n=>{const e=document.querySelectorAll(n);return e.length>1?e:1===e.length?e[0]:null},d=s(".toggle-switch"),l=document.body,c=s(".menu-btn"),A=s(".mobile-menu"),m=s("#menu-icon"),p=s(".news-container div"),u=s(".news-tile-container"),v=s(".search-block"),f=s("#search-input"),h=s(".announcements-container div"),g=s(".mobile-search"),b=s("#mobile-search-input"),w=s("#home-icon"),x=s(".night-mode-btn"),y=s("#announcements-icon"),k=s(".side-nav"),T=s(".news-container .title"),L={topNews:[],allNews:[]},S=(n,e)=>{n(),e&&e()},M=()=>o(void 0,void 0,void 0,(function*(){(0,a.renderSkeletonCards)(p);const n=yield(0,r.getMostViewedArticles)();S((()=>L.topNews=null!=n?n:[]),(()=>(0,i.renderTopArticles)(L.topNews,p)))}));window.addEventListener("load",(()=>o(void 0,void 0,void 0,(function*(){(0,a.renderSkeletonTiles)(u),(0,i.renderAnnouncementTiles)(h);const n=yield(0,r.searchArticles)("");M(),S((()=>L.allNews=null!=n?n:[]),(()=>(0,i.renderNewsTiles)(L,u)))})))),c.onclick=()=>{m.classList.toggle("bx-x"),A.classList.toggle("active")},v.addEventListener("submit",(n=>{n.preventDefault(),o(void 0,void 0,void 0,(function*(){(0,a.renderSkeletonTiles)(u);const n=yield(0,r.searchArticles)(f.value);S((()=>L.allNews=n),(()=>(0,i.renderNewsTiles)(L,u)))}))})),g.addEventListener("submit",(n=>{n.preventDefault(),o(void 0,void 0,void 0,(function*(){T.textContent="Results",(0,a.renderSkeletonCards)(p);const n=yield(0,r.searchArticles)(b.value);S((()=>L.topNews=n),(()=>(0,i.renderTopArticles)(L.topNews,p))),m.classList.toggle("bx-x"),A.classList.toggle("active")}))}));const j=(n=!1)=>{const e=s(".announcement-tile"),t=s(".news-tile"),o=s("#profile-img"),r=s(".skeleton-news-tile");if(d.classList.toggle("change"),l.classList.toggle("dark-mode"),k.classList.toggle("dark-mode"),n){const n=s(".night-mode-btn label"),e=s("#mode-icon"),t="Switch to Dark Mode"===n.textContent,o=t?"Switch to Light Mode":"Switch to Dark Mode";A.classList.toggle("dark-mode"),t?e.classList.replace("bxs-moon","bx-sun"):e.classList.replace("bx-sun","bxs-moon"),n.innerHTML="",n.innerHTML=o}null==t||t.forEach((n=>{n.classList.toggle("dark-mode")})),null==o||o.forEach((n=>{n.classList.toggle("dark-mode")})),null==e||e.forEach((n=>{n.classList.toggle("dark-mode")})),null==r||r.forEach((n=>{n.classList.toggle("dark-mode")}))};d.addEventListener("click",(()=>j())),x.addEventListener("click",(()=>j(!0))),w.addEventListener("click",(()=>{T.textContent="Top News",M()})),y.addEventListener("click",(()=>{T.textContent="Announcements",(0,i.renderAnnouncementTiles)(p)}))},605:function(n,e,t){var o=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.renderAnnouncementTiles=e.renderNewsTiles=e.renderTopArticles=void 0,t(763);const r=`<img src=${o(t(610)).default} alt="" class="no-data-image">`;e.renderTopArticles=(n,e)=>{const t=null==n?void 0:n.map((n=>{let e=new Date,t="",o="",r="",i="";return"topNews"===n.listType?(e=new Date(n.updated?n.updated:""),t=n.byline.slice(3),o=n.section,r=n.title,i=n.media.length>0?n.media[0]["media-metadata"][2].url:""):"search"===n.listType&&(e=new Date(n.pub_date?n.pub_date:""),t=n.byline.original.slice(3),o=n.section_name,r=n.headline.main,i=""),` <div class="news-card">\n      <div class="news-header">\n        <div class="content-left">\n          <img\n            src="data:image/jpeg;base64,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"\n            alt=""\n            id=""\n          />\n          <div class="news-info">\n            <label for="" class="author-name">${t}</label>\n            <p class="author-department">${o}</p>\n          </div>\n        </div>\n        <div class="content-right">\n          <p class="news-duration">${e.toLocaleString("en-GB")}</p>\n        </div>\n      </div>\n      <div class="news-body">\n        <p>\n          ${r}\n        </p>\n        <img\n          src=${i}\n          alt=""\n        />\n      </div>\n      <div class="news-footer">\n        <span\n          ><i class="bx bx-comment-detail"></i><label>Comment</label></span\n        >\n        <span><i class="bx bx-share"></i><label>Share</label></span>\n      </div>\n    </div>`}));e.innerHTML="",t.length>0?e.innerHTML=t.join(""):e.innerHTML=r},e.renderNewsTiles=(n,e)=>{const t=n.allNews.map((n=>`<div class="news-tile">\n      <img\n        src=""\n        alt=""\n      />\n      <div>\n        <h4>\n          ${n.headline.main}\n        </h4>\n        <p>\n          ${n.abstract}\n        </p>\n      </div>\n    </div>`));e.innerHTML="",t.length>0?e.innerHTML=t.join(""):e.innerHTML=r},e.renderAnnouncementTiles=n=>{const e=[...Array(10)].map((n=>{const e="#"+((1<<24)+(Math.floor(106*Math.random())+125<<16)+(Math.floor(106*Math.random())+125<<8)+(Math.floor(106*Math.random())+125)).toString(16).slice(1);return` <div class="announcement-tile" style="border-left: 5px solid ${e}; border-right: 5px solid ${e};">\n    <h4>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,\n      pariatur?\n    </h4>\n    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>\n  </div>`}));n.innerHTML="",n.innerHTML=e.join("")}},45:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.renderSkeletonTiles=e.renderSkeletonCards=void 0,e.renderSkeletonCards=n=>{const e=[...Array(3)].map((n=>' <div class="skeleton-card">\n      <div class="skeleton-header">\n        <div class="skeleton-left">\n          <div></div>\n          <div class="skeleton-info">\n            <div></div>\n            <div></div>\n          </div>\n        </div>\n        <div class="skeleton-right">\n          <div></div>\n        </div>\n      </div>\n      <div class="skeleton-body">\n        <div class="skeleton-content">\n          <div></div>\n          <div></div>\n        </div>\n        <div></div>\n      </div>\n      <div class="skeleton-footer">\n        <div></div>\n        <div></div>\n      </div>\n    </div>'));n.innerHTML="",n.innerHTML=e.join("")},e.renderSkeletonTiles=n=>{const e=[...Array(10)].map((n=>'<div class="skeleton-news-tile">\n    <div></div>\n    <div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>'));n.innerHTML="",n.innerHTML=e.join("")}},763:function(n,e){var t=this&&this.__awaiter||function(n,e,t,o){return new(t||(t=Promise))((function(r,i){function a(n){try{d(o.next(n))}catch(n){i(n)}}function s(n){try{d(o.throw(n))}catch(n){i(n)}}function d(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}d((o=o.apply(n,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.getQueryString=e.makeImageUrl=e.getRequest=void 0;const o="zDWBvujoI2wUGWQcJmGiTthncx9rz4Jj";e.getRequest=(n,e)=>t(void 0,void 0,void 0,(function*(){const t=new URLSearchParams(e).toString(),r=t?`${n}?${t}&api-key=${o}`:`${n}?api-key=${o}`;try{return(yield fetch(r,{method:"GET"})).json()}catch(n){console.log("error while processing request",n)}})),e.makeImageUrl=n=>`https://api.nytimes.com/svc/search/v2/articlesearch.json/get/${n}?api-key=${o}`,e.getQueryString=n=>new URLSearchParams(n).toString()}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,t(752)})();