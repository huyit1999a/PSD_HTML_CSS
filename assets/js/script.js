var mobileMenu = document.getElementById("menu-mobile")
var showMenu = document.getElementById("menu-mobile-show");

console.log(mobileMenu)
mobileMenu.onclick = function() {
    if(showMenu.style.display == "none") {
        showMenu.style.display = "block";
    } else {
        showMenu.style.display = "none";
    }
}