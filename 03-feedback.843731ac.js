function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function j(e){return l=e,f=setTimeout(O,t),c?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function O(){var e=v();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function w(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function T(){var e=v(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:w(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};let y={};const j={form:document.querySelector(".feedback-form")};j.form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.target;if(""===t.value||""===n.value)return alert("Please complete all required fields");const o={email:t.value,message:n.value};e.target.reset(),localStorage.removeItem("feedback-form-state"),console.log(o)})),j.form.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),function(){const e=localStorage.getItem("feedback-form-state");if(e){y=JSON.parse(e);const t=Object.entries(y);t.forEach((([e,t])=>{j.form.elements[e].value=t})),console.log(t)}}();
//# sourceMappingURL=03-feedback.843731ac.js.map
