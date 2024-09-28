let e=[];!async function(t){let a=`https://api.nytimes.com/svc/topstories/v2/${t}.json?api-key=SanVVsR5d1aXooIHsc7RzallrOOh7ruH`;try{let r=await fetch(a);if(!r.ok)throw Error("Network response was not ok");e=(await r.json()).results,function(e,t){let a=document.getElementById("articles-container");a.innerHTML="";let r=document.createElement("h2");r.className="section-title",r.textContent=e.charAt(0).toUpperCase()+e.slice(1),a.appendChild(r);let n=document.createElement("div");n.className="grid-container",t.forEach(e=>{let t=document.createElement("article"),a=e.multimedia.length>0?e.multimedia[0].url:"";t.innerHTML=`
                    ${a?`<img src="${a}" alt="${e.title}">`:""}
                    <h3>${e.title}</h3>
                    <p>${e.abstract}</p>
                    <a href="${e.url}" target="_blank">Read more</a>
                `,n.appendChild(t)}),a.appendChild(n)}(t,e)}catch(e){console.error("There was a problem with the fetch operation:",e)}}("arts");
//# sourceMappingURL=index.cbc1fb22.js.map
