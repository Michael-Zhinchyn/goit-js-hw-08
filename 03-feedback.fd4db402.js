!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,r,a,l,u,f,s=0,c=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=o,i=r;return o=r=void 0,s=t,l=e.apply(i,n)}function w(e){return s=e,u=setTimeout(S,t),c?y(e):l}function x(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-s>=a}function S(){var e=p();if(x(e))return j(e);u=setTimeout(S,function(e){var n=t-(e-f);return d?g(n,a-(e-s)):n}(e))}function j(e){return u=void 0,v&&o?y(e):(o=r=void 0,l)}function O(){var e=p(),n=x(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return w(f);if(d)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),l}return t=h(t)||0,b(n)&&(c=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),s=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?l:j(p())},O}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=l.test(t);return i||u.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};var w=document.querySelector(".feedback-form"),x=w.elements.email,S=w.elements.message,j=document.querySelector("button"),O=JSON.parse(localStorage.getItem("feedback-form-state"));O&&(x.value=O.email,S.value=O.message,j.disabled=!(x.value&&S.value)),w.addEventListener("input",e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:x.value,message:S.value})),j.disabled=!(x.value&&S.value)}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:x.value,message:S.value}),w.reset(),localStorage.removeItem("feedback-form-state"),j.disabled=!0}));var T=document.querySelector("a");Object.assign(T.style,{fontWeight:"600",display:"flex",justifyContent:"end",color:"salmon",textDecoration:"none",position:"fixed",right:"5%",top:"10px"}),T.textContent="CLICK HERE FOR EXIT",T.href="https://dorneawhale.files.wordpress.com/2015/02/thank-you2.gif",w.style.margin="auto";var E=document.createElement("div");E.innerHTML='\n<a href="02-video.html" style="text-decoration: none; color: inherit;">\n    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle;">\n        <polyline points="35,10 15,25 35,40" stroke="#000000" stroke-width="4"/>\n    </svg>\n    <span style="margin-left: 5px;">Back</span>\n</a>',document.body.prepend(E),document.querySelector("svg").style.fill="orange";var k=document.querySelector("span");k.style.color="orange",k.style.fontSize="18px",k.style.fontWeight="500"}();
//# sourceMappingURL=03-feedback.fd4db402.js.map
