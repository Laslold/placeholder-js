(()=>{"use strict";document.querySelector(".js-tbody"),document.querySelector(".js-user-table"),document.querySelector(".js-album");const e=document.querySelector(".js-list-song"),t=location.search;(function(e=""){return fetch("https://jsonplaceholder.typicode.com/"+e).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)}))})(`photos?albumId=${new URLSearchParams(t).get("albumId")||1}`).then((t=>{console.log(t);const o=function(e=[]){return e.map((({id:e,title:t,thumbnailUrl:o})=>`<div class="card" data-set="${e}">\n    <img class="bd-placeholder-img card-img-top" width="200" height="200"\n      src="${o}" alt="${t}" />\n    <div class="card-body">\n      <p class="card-text">\n        ${t}\n      </p>\n    </div>\n  </div>`)).join("")}(t);console.log(o),function(e,t){t.innerHTML=e}(o,e)})).catch((e=>{console.log(e.message)}))})();