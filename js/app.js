$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  nextArrow: $('.next-btn'),
  prevArrow: $('.prev-btn'),
  focusOnSelect: true
});
var w=document.querySelector(".slide").clientWidth;
$(".slide").css("transition",".4s")
var c=0
var s=document.querySelector(".slider")
var h=document.querySelectorAll(".slide")
$(".next").click(function(){
     c=(c+1+($(".slide").length-3))%($(".slide").length-3);
    $(".slide").css("left",c*(-w));
})

$(".prev").click(function(){
    c=(c-1+($(".slide").length-3))%($(".slide").length-3);
    $(".slide").css("left",c*(-w));
})