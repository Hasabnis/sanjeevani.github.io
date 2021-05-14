

let hamberger = document.querySelector('.hamberger');
let close = document.querySelector('.close');
let mobileNav = document.querySelector('.mobile-nav');


hamberger.addEventListener('click',function(){
  mobileNav.classList.add('open');
});

close.addEventListener('click',function(){
  mobileNav.classList.remove('open');
});

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", ()=>{
      mobileNav.classList.remove('open');
  });

}
