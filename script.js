$(document).ready(function(){
 
 /*=====================menu bar====================*/
 $(window).scroll(function(){
  if(this.scrollY > 20){
   $('.navbar').addClass("sticky")
  }else{
   $('.navbar').removeClass("sticky")
  }
 });
/*=====================hotdog button====================*/
  $('.menu-btn').click(function(){
   $('.navbar .menu').toggleClass("active");
   $('.menu-btn i').toggleClass("active");
 });

 // oewl carousel script

 $('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items: 1,
      nav: false,
    },
    600:{
      items: 2,
      nav: false,
    },
    1000:{
      items: 3,
      nav: false,
    }
  }
 });

 /*=====================Smooth Scroll====================*/
 $("a").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

});