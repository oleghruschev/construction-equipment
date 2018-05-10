// Slider
var hwSlideSpeed = 300;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
  $('.slide').css({
    "position" : "absolut", "top" : '0', "left" : '0'
  }).hide().eq(0).show();
  var slideNum = 0;
  var slideTime;
  slideCount = $(".slider .slide").size();
  var animSlide = function(arrow){
    clearTimeout(slideTime);
    $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
    if(arrow == "next") {
      if(slideNum == (slideCount-1)){slideNum=0;}
      else{slideNum++}
      }
      else if(arrow == "prew")
      {
        if(slideNum == 0){slideNum=slideCount-1;}
        else{slideNum-=1}
      }
      else{
      slideNum = arrow;
      }
  $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
  $(".control-slide.active").removeClass("active");
  $('.control-slide').eq(slideNum).addClass('active');
  }
  if(hwNeedLinks){
    $('.nextbutton').click(function(){
      animSlide("next");
      })
    $('.prewbutton').click(function(){
      animSlide("prew");
    })
  }
  var $adderSpan = '';
  $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('.slider');
  $(".control-slide:first").addClass("active");
  $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
  });
  var pause = false;
  var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
  }
  $('.slider').hover(
    function(){clearTimeout(slideTime); pause = true;},
    function(){pause = false; rotator();
  });
  rotator();
})