// Lavisan Bag Website
document.addEventListener("DOMContentLoaded", function () {
    console.log("Lavisan Bag Website Loaded");

    const buttons = document.querySelectorAll("a");

    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            console.log("Button clicked:", button.innerText);
        });
    });
});
