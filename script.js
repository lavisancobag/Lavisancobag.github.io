// =======================
// Lavisan Bag
// Script.js
// =======================

// ---------- اسلایدر ----------

const images = [
"images/IMG_4868.jpeg",
"images/IMG_4869.jpeg",
"images/IMG_4870.jpeg",
"images/IMG_4873.jpeg",
"images/IMG_4923.jpeg",
"images/Bag1.jpg",
"images/Bag2.jpg"
];

let current = 0;

const slide = document.getElementById("slide");

function nextSlide(){

if(!slide) return;

slide.style.opacity="0";

setTimeout(()=>{

current++;

if(current>=images.length){

current=0;

}

slide.src=images[current];

slide.style.opacity="1";

},500);

}

setInterval(nextSlide,4000);


// ---------- انیمیشن هنگام اسکرول ----------

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(70px)";

section.style.transition="all .8s ease";

observer.observe(section);

});


// ---------- دکمه بازگشت بالا ----------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ---------- زوم تصاویر ----------

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`
<img src="${img.src}">
`;

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

};

});

});
/*======================
Back To Top
======================*/

.topBtn{

position:fixed;

bottom:25px;

left:25px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#d4af37;

color:#111;

font-size:24px;

cursor:pointer;

display:none;

z-index:9999;

box-shadow:0 0 20px rgba(212,175,55,.4);

transition:.3s;

}

.topBtn:hover{

transform:scale(1.1);

background:white;

}


/*======================
LightBox
======================*/

.lightbox{

position:fixed;

inset:0;

background:rgba(0,0,0,.9);

display:flex;

justify-content:center;

align-items:center;

z-index:99999;

}

.lightbox img{

max-width:90%;

max-height:90%;

border-radius:20px;

border:4px solid #d4af37;

}
