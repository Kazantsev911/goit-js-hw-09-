import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},r="feedback-form-state",o=document.querySelector(".js-feedback-form");o.addEventListener("input",s);o.addEventListener("submit",m);function s(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(r,JSON.stringify(e))}function l(){const t=localStorage.getItem(r);if(t){const n=JSON.parse(t);for(let a in n)o.elements[a].value=n[a],e[a]=n[a]}}document.addEventListener("DOMContentLoaded",l);function m(t){if(t.preventDefault(),!e.email||!e.message)return alert("Fill please all fields");console.log(e),localStorage.removeItem(r),o.reset(),e.email="",e.message=""}l();
//# sourceMappingURL=2-form.js.map
