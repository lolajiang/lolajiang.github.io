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

// Video
// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src',src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src','');
}

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
