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