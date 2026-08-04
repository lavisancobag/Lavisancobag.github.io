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
