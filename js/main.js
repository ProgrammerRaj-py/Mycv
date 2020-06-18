// For Drop Downmenu
var toggler = document.getElementById("toggler");
var dropdownmenu = document.getElementById("drop_down")

toggler.addEventListener("click", drop);

function drop(){
    dropdownmenu.classList.toggle("show_drop")
    dropdownmenu.classList.toggle("hide_drop")
}
