var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},e.parcelRequired7c6=t);var n=t("iQIUW");function i(e,o){return new Promise(((r,t)=>{const n=Math.random()>.3;setTimeout((()=>{n?r(`✅ Fulfilled promise ${e} in ${o}ms`):t(`❌ Rejected promise ${e} in ${o}ms`)}),o)}))}({inputFromUser:document.querySelectorAll("input"),formSendToPromiseCreadte:document.querySelector(".form")}).formSendToPromiseCreadte.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:o,step:r,amount:t}}=event.target;console.log(r.value);for(let e=0;e<t.value;e+=1)i(e+1,Number(o.value)+Number(r.value*e)).then((e=>n.Notify.success(e))).catch((e=>n.Notify.failure(e)))}));
//# sourceMappingURL=03-promises.84888995.js.map
