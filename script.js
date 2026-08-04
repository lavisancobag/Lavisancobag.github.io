// =======================
// اسلایدر خودکار لاویسان
// =======================

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

const slider = document.getElementById("slide");

function changeSlide(){

    if(!slider) return;

    current++;

    if(current >= images.length){
        current = 0;
    }

    slider.style.opacity = 0;

    setTimeout(()=>{

        slider.src = images[current];

        slider.style.opacity = 1;

    },400);

}

setInterval(changeSlide,4000);


// =======================
// اسکرول نرم منو
// =======================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =======================
// نمایش تدریجی بخش‌ها
// =======================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="all .8s";

    observer.observe(section);

});
.hero-img{

transition:1s;

}
