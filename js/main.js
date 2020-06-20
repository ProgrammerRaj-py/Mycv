// For Drop Downmenu
const toggler = document.getElementById("toggler");
const dropdownmenu = document.getElementById("drop_down")


//About Me section
const aboutme_header = document.getElementById("aboutme_header")
const aboutme_img = document.getElementById("aboutme_img")
const aboutme_names = document.getElementById("aboutme_names")
const aboutme_obj = document.getElementById("aboutme_obj")
const aboutme_what = document.getElementById("aboutme_what")
const aboutme_iknow = document.getElementById("aboutme_iknow")
const aboutme_btn = document.getElementById("aboutme_btn")

// Education Section
const education_header = document.getElementById("education_header")
const education_col1 = document.getElementById("education_col1")
const education_col2 = document.getElementById("education_col2")
const education_col3 = document.getElementById("education_col3")


//Skills Section
const skills_header = document.getElementById("skills_header")
const skills_bar_ani = document.getElementById("skills_bar_ani")

// Preloader
const preloader = document.getElementById("preloader")
const mainpage = document.getElementById("mainpage")





// Drop Down
toggler.addEventListener("click", drop);

function drop(){
    dropdownmenu.classList.toggle("show_drop")
    dropdownmenu.classList.toggle("hide_drop")
}

// Preloader
setTimeout(function() {
    preloader.style.display= "none"
    mainpage.style.display= "block"
}, 4100);


// Animations
let screenPosition = window.innerHeight /1.4;
window.addEventListener("scroll",function(){

    //Skills Section  
    if (skills_bar_ani.getBoundingClientRect().top < screenPosition){
        skills_bar_ani.classList.add("skills_bar_ani")
    }
    if (skills_header.getBoundingClientRect().top < screenPosition){
        skills_header.classList.add("skills_header")
    }

    //Education Section
    if (education_col3.getBoundingClientRect().top < screenPosition){
        education_col3.classList.add("education_col3")
    }
    if (education_col2.getBoundingClientRect().top < screenPosition){
        education_col2.classList.add("education_col2")
    }
    if (education_col1.getBoundingClientRect().top < screenPosition){
        education_col1.classList.add("education_col1")
    }
    if (education_header.getBoundingClientRect().top < screenPosition){
        education_header.classList.add("education_header")
    }
    
        //About Me Section
    if (aboutme_btn.getBoundingClientRect().top < screenPosition){
        aboutme_btn.classList.add("aboutme_btn")
    }
    if (aboutme_iknow.getBoundingClientRect().top < screenPosition){
        aboutme_iknow.classList.add("aboutme_iknow")
    }
    if (aboutme_what.getBoundingClientRect().top < screenPosition){
        aboutme_what.classList.add("aboutme_what")
    }
    if (aboutme_obj.getBoundingClientRect().top < screenPosition){
        aboutme_obj.classList.add("aboutme_obj")
    }
    if (aboutme_iknow.getBoundingClientRect().top < screenPosition){
        aboutme_iknow.classList.add("aboutme_iknow")
    }
    if (aboutme_names.getBoundingClientRect().top < screenPosition){
        aboutme_names.classList.add("aboutme_names")
    }
    if (aboutme_img.getBoundingClientRect().top < screenPosition){
        aboutme_img.classList.add("aboutme_img")
    }
    if (aboutme_header.getBoundingClientRect().top < screenPosition){
        aboutme_header.classList.add("aboutme_header")
    }
})
