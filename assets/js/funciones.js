var menu=0;
$(document).ready(function(){
  $(".scrolling").click(function() {
    var elem = $(this).attr("href");
    $('html, body').animate({
     scrollTop: $(elem).offset().top
    }, 2000);
  });
  $("#form-buscador").submit(function(){
    event.preventDefault();
    $('#modalBusqueda').modal('toggle')
  });
    $(".main-toggle").click(function(){
        if(menu==0){
            menu=1;
            $(".posicion-menu").addClass("active");
        }else{
            menu=0;
            $(".posicion-menu").removeClass("active");
        }
    });
    $(".menu a").click(function(){
      if(menu==1){
          menu=0;
          $(".posicion-menu").removeClass("active");
      }
    });
    $(".ver-video-iframe").click(function(){
      var elemento=$(this).attr("data-element");
      var hidd=$(this).attr("data-block");
      $(hidd).addClass("d-none");
      $(elemento).removeClass("d-none");
    });
    $('.carousel-banner-donantes').owlCarousel({
      loop:true,
      margin:0,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:3000,
      dots:false,
      nav:false,
      responsiveClass:true,
      responsive:{
        0:{
            items:1
        }
      }
    });
    $('.carousel-bottom').owlCarousel({
      loop:true,
      margin:0,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:11000,
      dots:false,
      nav:false,
      responsiveClass:true,
      responsive:{
        0:{
            items:1
        }
      }
    });
    $('.carousel-principal-home').owlCarousel({
      loop:true,
      margin:0,
      autoplay:false,
      dots:true,
      nav:false,
      responsiveClass:true,
      responsive:{
        0:{
            items:1
        }
      }
    });
    var ventana_ancho = $(window).width();
    if(ventana_ancho >= 768){
      var altura=$("#columna-altura").innerHeight();
      $(".carousel-banner-donantes img").css("height",altura);
    }
});
$( window ).resize(function() {
  var ventana_ancho = $(window).width();
  if(ventana_ancho >= 768){
    var altura=$("#columna-altura").innerHeight();
    $(".carousel-banner-donantes img").css("height",altura);
  }
});
