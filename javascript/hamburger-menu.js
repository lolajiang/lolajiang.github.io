// toggle navigation for hamburger menu
$(window).resize(function(){
    if ($( window ).width() > 768) {
        $(".menu-nav-hz").css("display", "block");
    }
});

$(function(){
   $(".hamburger-menu").click(function () {
    if ($(".menu-nav-hz").css("display") == "block")
    {
       $(".menu-nav-hz").css("display", "none");
    }
    else
    {
       $(".menu-nav-hz").css("display", "block");
    };
   });
})
