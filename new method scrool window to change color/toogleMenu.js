// traget class -> (nav)
// perform class-> button in class is (tbtn)
// change iocon -> fa-bars
let btn = document.querySelector(".tbtn");
let navmenu = document.querySelector(".nav")
let icon = document.querySelector(".fa-bars")

btn.addEventListener("click",function(){
    navmenu.classList.toggle("nav-menu")
    // contains  value checked karse
    if(navmenu.classList.contains("nav-menu")==true){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
    }
    else{
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }

})