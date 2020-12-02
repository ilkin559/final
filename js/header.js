
$("#accordion button").click(function(){
    $("#accordion p").stop().slideUp()
    $(this).next().stop().slideToggle()
})
$("#tabMenu button").click(function(){
    $("#tabMenu button").css("background","goldenrod")
    $(this).css("background","#333")
    const btnInd= $(this).index()
    $("#tabMenu p").stop().slideUp()
    $("#tabMenu p").eq(btnInd).stop().slideDown()

})

$(".nav-ico").on("click",function(){
    $(this).find("#ico-rem").toggle()
    $(this).find("#ico-bar").toggle()
    $(".mobile-down-menu").slideToggle(500)
})
$(".menu-mobile .mobile-down-menu .set a").click(function(){
    // $(".set i").removeClass("fas fa-chevron-down");
    // $(this).find("i").toggleClass("fas fa-chevron-up");

    $(".set .content").stop().slideUp(300)
    $(this).next().stop().slideToggle(300)
})
  