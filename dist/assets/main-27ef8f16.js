document.addEventListener("DOMContentLoaded",function(M){let c=180,w=1,u=0,s=!1;const o=document.getElementById("boutonpop"),S=document.getElementById("scoreclickbonus"),m=document.getElementById("boutonautoclick"),C=document.getElementById("cookie1"),H=document.getElementById("scoreclick"),e=document.getElementById("scoremoney"),l=document.getElementById("boutonmulti");let r=10,i=1,g=5,a=1e4,$=150;const h=document.getElementById("cookie-banner"),z=document.getElementById("accept-cookies"),f=document.querySelector(".zoomable-svg"),A=document.getElementById("clicSound"),d=document.getElementById("clicSound2");function k(){const t=Math.floor(c/60),n=c%60,v=`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`;document.getElementById("countdown").textContent=v,c<=0?(clearInterval(D),location.reload()):c--}const D=setInterval(k,1e3);z.addEventListener("click",()=>{h.style.display="none"}),f.addEventListener("click",function(){f.classList.add("accelerate"),A.play(),setTimeout(()=>{f.classList.remove("accelerate")},50)}),C.addEventListener("click",function(){u+=w,H.textContent=u;let t=parseInt(e.textContent);t++;const n='<i class="fa-solid fa-dollar-sign"></i>';i!==1&&(t=t+g-6),e.innerHTML=n+" "+t,e.textContent=t,y(),p(),T()}),C.addEventListener("click",function(){const t=document.getElementById("dollar-icon");t.classList.add("rotate-animation"),setTimeout(()=>{t.classList.remove("rotate-animation")},1e3)});function L(){l.disabled=!0}function G(){l.disabled=!1,d.play()}function P(){i++,g+=5,b()}function y(){parseInt(e.textContent)>=r*i?G():L()}function b(){let t=r*i;const n=`${t}`,v=`+5 x${i-1}`,U='<i class="fa-solid fa-dollar-sign"></i>';return l.innerHTML=`<div>${U} ${n}</div><div>${v}</div>`,t}let q=l.innerHTML;l.addEventListener("click",function(){let t=parseInt(e.textContent);e.textContent=t-r*i,b(),P(),y(),p(),T(),setTimeout(function(){l.innerHTML=q},4e3)});function X(){m.disabled=!1}function E(){m.disabled=!0}function T(){parseInt(e.textContent)>=150&&!s?X():E()}m.addEventListener("click",()=>{d.play(),!s&&$>=150&&(K(150),F(),s=!0,E())});function j(){d.play(),J(),y(),p()}function F(){setInterval(j,500)}function J(){let t=parseInt(e.textContent);t++,e.textContent=t}function K(t){e.textContent-=t}function M(){u=0,S.textContent=0,e.textContent=0,k()}function O(){o.disabled=!0}function V(){o.disabled=!1,d.play()}let I=!0;function p(){parseInt(e.textContent)>=a&&I||x&&I?V():O()}let N=o.innerHTML,x=!1;function Q(){var t=5,n=setInterval(function(){t--,o.innerText=t+"seconds left",t===0&&(clearInterval(n),o.innerHTML=N,I=!1)},1e3)}o.addEventListener("click",function(){if(!x){x=!0,Q();let n=parseInt(e.textContent);n>=a&&(e.textContent=n-a)}let t=parseInt(e.textContent);e.textContent=t*2,setTimeout(function(){e.textContent=parseInt(e.textContent)-a},5e3)});function R(){L(),O(),E()}M(),window.onload=R()});let B=!1;document.getElementById("resetButton").addEventListener("click",function(){return location.reload(),B="true"});function W(){B||(document.getElementById("modalOverlay").style.display="block",document.getElementById("myModal").style.display="block")}window.addEventListener("DOMContentLoaded",W);document.getElementById("resetButton").addEventListener("click",function(){B=!0,document.getElementById("modalOverlay").style.display="none",document.getElementById("myModal").style.display="none"});document.getElementById("closeModal").addEventListener("click",function(){document.getElementById("modalOverlay").style.display="none",document.getElementById("myModal").style.display="none"});
