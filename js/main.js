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

// Portfolio section
const portfolio_header1 = document.getElementById("portfolio_header1")
const portfolio_header2 = document.getElementById("portfolio_header2")
const portfolio_header3 = document.getElementById("portfolio_header3")
const portfolio_header4 = document.getElementById("portfolio_header4")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")
const img7 = document.getElementById("img7")
const img8 = document.getElementById("img8")
const img9 = document.getElementById("img9")


//Project Section
const project1 = document.getElementById("project1")
const project2 = document.getElementById("project2")
const project3 = document.getElementById("project3")
const project4 = document.getElementById("project4")

// Contact Section
const contact_header1 = document.getElementById("contact_header1")
const contact_header2 = document.getElementById("contact_header2")
const contact_icon1 = document.getElementById("contact_icon1")
const contact_icon2 = document.getElementById("contact_icon2")
const contact_icon3 = document.getElementById("contact_icon3")
const contact_form = document.getElementById("contact_form")
const contact_footer = document.getElementById("footer")
const contact_success = document.getElementById("contact_success")

var contact_name = document.getElementById("contact_name")
var contact_email = document.getElementById("contact_email")
var contact_subject = document.getElementById("contact_subject")
var contact_msg = document.getElementById("contact_msg")
const contact_submit = document.getElementById("contact_submit")

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

// Email Send 
contact_submit.addEventListener("click",function(){
    // console.log(contact_name.value,contact_subject.value,contact_msg.value,contact_email.value)
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mazumderraj63@gmail.com",
        Password : "RAJraj123456789",
        To : 'rajmajumdar182@gmail.com',
        From : "mazumderraj63@gmail.com",
        Subject : contact_subject.value,
        Body : "<h3>Name: "+ contact_name.value +"<br><br>Email: " + contact_email.value + "<br><br> Massage: " + contact_msg.value +"</h3>"
    }).then(
      message => contact_success.innerHTML = "Successfuly Sent. I will contact You soon."
    );
    
})




// Animations
let screenPosition = window.innerHeight /1.6;
window.addEventListener("scroll",function(){
    // Contact Section
    if (contact_form.getBoundingClientRect().top < screenPosition){
        contact_form.classList.add("aboutme_names")
        // contact_success.innerHTML = "Successfully sent. I will contact you as soon as possible."
    }
    if (contact_header2.getBoundingClientRect().top < screenPosition){
        contact_header2.classList.add("skills_header")
    }
    if (contact_icon3.getBoundingClientRect().top < screenPosition){
        contact_icon3.classList.add("education_col2")
    }
    if (contact_icon2.getBoundingClientRect().top < screenPosition){
        contact_icon2.classList.add("education_col1")
    }
    if (contact_icon1.getBoundingClientRect().top < screenPosition){
        contact_icon1.classList.add("education_col2")
    }
    if (contact_header1.getBoundingClientRect().top < screenPosition){
        contact_header1.classList.add("skills_header")
    }

    // Project Section
    if (project4.getBoundingClientRect().top < screenPosition){
        project4.classList.add("education_col2")
    }
    if (project3.getBoundingClientRect().top < screenPosition){
        project3.classList.add("education_col1")
    }
    if (project2.getBoundingClientRect().top < screenPosition){
        project2.classList.add("education_col2")
    }
    if (project1.getBoundingClientRect().top < screenPosition){
        project1.classList.add("education_col1")
    }

    // Portfolio Section
    if (img9.getBoundingClientRect().top < screenPosition){
        img9.classList.add("img9")
    }
    if (img8.getBoundingClientRect().top < screenPosition){
        img8.classList.add("img8")
    }
    if (img7.getBoundingClientRect().top < screenPosition){
        img7.classList.add("img7")
    }
    if (portfolio_header4.getBoundingClientRect().top < screenPosition){
        portfolio_header4.classList.add("portfolio_header4")
    }
    if (img6.getBoundingClientRect().top < screenPosition){
        img6.classList.add("img6")
    }
    if (img5.getBoundingClientRect().top < screenPosition){
        img5.classList.add("img5")
    }
    if (img4.getBoundingClientRect().top < screenPosition){
        img4.classList.add("img4")
    }
    if (portfolio_header3.getBoundingClientRect().top < screenPosition){
        portfolio_header3.classList.add("portfolio_header3")
    }
    if (img3.getBoundingClientRect().top < screenPosition){
        img3.classList.add("img3")
    }
    if (img2.getBoundingClientRect().top < screenPosition){
        img2.classList.add("img2")
    }
    if (img1.getBoundingClientRect().top < screenPosition){
        img1.classList.add("img1")
    }
    if (portfolio_header2.getBoundingClientRect().top < screenPosition){
        portfolio_header2.classList.add("portfolio_header2")
    }
    if (portfolio_header1.getBoundingClientRect().top < screenPosition){
        portfolio_header1.classList.add("portfolio_header1")
    }

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
















// smtp server
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };