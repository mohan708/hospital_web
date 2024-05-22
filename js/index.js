let nav =document.querySelector(".navbar")

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100)
    {
        nav.classList.add("header-scrolled");

    }
    else{
        nav.classList.remove('header-scrolled');
    }
}

// nav hide 

let navbar = document.querySelectorAll('.nav-link')
let Collapse =document.querySelector('.navbar-collapse')

navbar.forEach(function(a){
   a.addEventListener('click',function(){
    Collapse.classList.remove("show");
   })

})
