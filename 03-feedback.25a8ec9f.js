function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var r,i,o,a,u,f,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function x(e){return c=e,u=setTimeout(S,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=o}function S(){var e=p();if(j(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return d?v(n,o-(e-c)):n}(e))}function T(e){return u=void 0,m&&r?b(e):(r=i=void 0,a)}function h(){var e=p(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return x(f);if(d)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(y(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},h.flush=function(){return void 0===u?a:T(p())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};let x=JSON.parse(localStorage.getItem("feedback-form-state"))||{};b.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===b.input.value||""===b.textarea.value)return alert("Заповніть всі поля");if(e.currentTarget.reset(),console.log(x),b.input.value==b.input.value||b.textarea.value==b.textarea.value)return alert("Дякуємо");x={},localStorage.removeItem("feedback-form-state")})),b.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500));
//# sourceMappingURL=03-feedback.25a8ec9f.js.map
