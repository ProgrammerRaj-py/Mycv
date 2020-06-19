// For Drop Downmenu
const toggler = document.getElementById("toggler");
const dropdownmenu = document.getElementById("drop_down")

toggler.addEventListener("click", drop);

function drop(){
    dropdownmenu.classList.toggle("show_drop")
    dropdownmenu.classList.toggle("hide_drop")
}


// for scrolling

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


window.addEventListener("scroll",function(){
    var scrolling_px = window.scrollY;
    //Skills Section  
    if (scrolling_px >= 3070){
        skills_bar_ani.classList.add("skills_bar_ani")
    }
    if (scrolling_px >= 2960){
        skills_header.classList.add("skills_header")
        skills_bar_ani.classList.add("skills_bar_ani3")
    }
    if (scrolling_px >= 2970){
        skills_header.classList.add("skills_header3")
    }
    if (scrolling_px >= 2600){
        education_col3.classList.add("education_col33")
    }  
    //Education Section
    if (scrolling_px >= 2600){
        education_col3.classList.add("education_col3")
    }
    if (scrolling_px >= 2560){
        skills_bar_ani.classList.add("skills_bar_ani2")
    }
    if (scrolling_px >= 2500){
        education_col2.classList.add("education_col23")
    }
    if (scrolling_px >= 2470){
        skills_header.classList.add("skills_header2")
    }    
    if (scrolling_px >= 2250){
        education_col2.classList.add("education_col2")
    }
    if (scrolling_px >= 2090){
        education_col1.classList.add("education_col13")
    }
    if (scrolling_px >= 2020){
        education_col3.classList.add("education_col32")
    }    
    if (scrolling_px >= 1975){
        education_col1.classList.add("education_col1")
    }
    if (scrolling_px >= 1800){
        education_header.classList.add("education_header")
    }
    if (scrolling_px >= 1740){
        education_header.classList.add("education_header3")
    }
    if (scrolling_px >= 1700){
        education_col2.classList.add("education_col22")
    }
    
        //About Me Section
    if (scrolling_px >= 1550){
        aboutme_btn.classList.add("aboutme_btn")
    }
    if (scrolling_px >= 1500){
        education_col1.classList.add("education_col12")
    }
    if (scrolling_px >= 1530){
        aboutme_iknow.classList.add("aboutme_iknow")
    }
    if (scrolling_px >= 1320){
        aboutme_btn.classList.add("aboutme_btn3")
    }
    if (scrolling_px >= 1200){
        education_header.classList.add("education_header2")
    }
    if (scrolling_px >= 1140){
        aboutme_what.classList.add("aboutme_what")
    }
    if (scrolling_px >= 1075){
        aboutme_iknow.classList.add("aboutme_iknow3")
        aboutme_names.classList.add("aboutme_names3")
    }
    if (scrolling_px >= 830){
        aboutme_obj.classList.add("aboutme_obj")
    }
    if (scrolling_px >= 800){
        aboutme_btn.classList.add("aboutme_btn2")
        aboutme_iknow.classList.add("aboutme_iknow")
        aboutme_img.classList.add("aboutme_img3")
        aboutme_obj.classList.add("aboutme_obj3")
        aboutme_what.classList.add("aboutme_what3")
    }
    if (scrolling_px >= 615){
        aboutme_names.classList.add("aboutme_names")
        aboutme_names.classList.add("aboutme_names2")
    }
    if (scrolling_px >= 450){
        aboutme_obj.classList.add("aboutme_obj2")
        aboutme_what.classList.add("aboutme_what2")
        aboutme_img.classList.add("aboutme_img2")
    }
    if (scrolling_px >= 350){
        aboutme_img.classList.add("aboutme_img")
    }
    
    if (scrolling_px >= 200){
        aboutme_header.classList.add("aboutme_header")
        aboutme_header.classList.add("aboutme_header2")
    }
    console.log(scrolling_px)
})
