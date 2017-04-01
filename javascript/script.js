// toggle navigation for hamburger menu
$(window).resize(function(){
    if ($( window ).width() > 768) {
        $(".menu-nav-hz").css("display", "block");
    }
});

$(function(){
   $(".hamburger-menu").click(function () {
    if ($(".menu-nav-hz").css("display") == "block")
    {   console.log("1");
       $(".menu-nav-hz").css("display", "none");
    }
    else
    {   console.log("2");
       $(".menu-nav-hz").css("display", "block");
    };
   });
})


// scroll change color
$(window).scroll(function() {
    containeR = window;
    containeD = document;
    var scrollPercent = 100 * $(containeR).scrollTop() / ($(containeD).height() - $(containeR).height());
    var scroll = $(window).scrollTop();

    if (scrollPercent > 25 ) {
       $(".scrollchange").css("color", "#f3f3f3");
      $(".current").css("border-bottom", "1px solid #f3f3f3");
      $(".hamburger-line").css("background", "#fff");
       $(".scrollchange").mouseenter(function(){
  $(this).css("border-bottom", "1px solid #f3f3f3");
       })
         .mouseleave(function(){
  $(this).css("border-bottom", "1px solid rgba(0,0,0,0)");
});
    } else {
       $(".scrollchange").css("color", "#000000");
       $(".current").css("border-bottom", "1px solid #000");
      $(".hamburger-line").css("background", "rgb(0,40,60)");
       $(".scrollchange").mouseenter(function(){
  $(this).css("border-bottom", "1px solid #000000");
       })
         .mouseleave(function(){
  $(this).css("border-bottom", "1px solid rgba(0,0,0,0)");
})
    }
});
