//traget class ->TopHeader
//perfrom -> window



window.addEventListener("scroll",function(){
    let top_header = document.querySelector(".TopHeader");
let current = window.scrollY;

    if(current>0){
        top_header.classList.add("header_fixed");
    }
    else{
        top_header.classList.remove("header_fixed");
    }
})