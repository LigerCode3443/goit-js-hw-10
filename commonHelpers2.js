import{e as n}from"./assets/error-447ac823.js";import{i as r}from"./assets/vendor-77e16229.js";const l="/goit-js-hw-10/assets/ok-242f2b10.svg",s=document.querySelector(".form");s.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(s),e={delay:Number(o.get("delay")),state:o.get("state")};m(e.delay,e.state).then(()=>r.success({iconUrl:l,title:"OK",message:` Fulfilled promise in ${e.delay} ms`,messageColor:"#fff",titleColor:"#fff",backgroundColor:"#59a10d",timeout:5e3,position:"topRight"})).catch(()=>r.error({iconUrl:n,title:"ERROR",titleColor:"#fff",message:` Rejected promise in ${e.delay} ms`,backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,position:"topRight"})),t.target.reset()});function m(t,o){return new Promise((i,a)=>{setTimeout(()=>{o==="fulfilled"?i():a()},t)})}
//# sourceMappingURL=commonHelpers2.js.map
