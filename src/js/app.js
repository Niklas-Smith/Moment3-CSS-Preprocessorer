"use strict"


let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");


openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);



function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

   
    let style = window.getComputedStyle(navMenuEl);

    if(style.display === "none") {
        navMenuEl.style.display = "block";

    } else {
        navMenuEl.style.display = "none";
    }

}    
// much of my code for burgermeny and meny is taken from Malin larsson(MallarMiun) (code from teacher)