// Accordion
$(document).ready(function(e) {
  $(".characteristics").click(function() {
    $(".arrow-top").toggleClass("display_none");
    $(".arrow-bottom").toggleClass("display_none");
    $(".submenu").slideToggle(500);
  });

  $(".information").click(function() {
    $(".arrow-top_inf").toggleClass("display_none");
    $(".arrow-bottom_inf").toggleClass("display_none");
    $(".submenu-inf").slideToggle(500);
  });

  $("#feature1").click(function() {
    $(".submenu-inf__value").text("125.000 Р.");
  });

  $("#feature2").click(function() {
    $(".submenu-inf__value").text("149.999 Р.");
  });

  $("#feature3").click(function() {
    $(".submenu-inf__value").text("189.990 Р.");
  });
})

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

 // Todo-list
$(document).ready(function(e) {
  $(".add").click(addItem);
  $(".todo-input").keypress(addItem);
  $(".delete").click(clearInput);
  $(".todo-list").on("click", ".delete-item", deleteItem);
  $(".todo-list").on("click", ".edit", editItem);
  $(".todo-list").on("click", ".save", saveItem);
  $(".todo-list").on("keypress", ".edit-input", saveItem);

  function addItem(e) {
    if ((e.which === 13 || e.type === 'click') && $(".todo-input").val() !== "" ) {
      if ($(".my-list").children().length >= 9) return;
      var newTodoItmem = $(".todo-input").val();
      $(".my-list").append("<li><span class='todo-val'>" + newTodoItmem + "</span>" + 
      "<input class='edit-input' type='text' maxlength='45'/><a class='edit'>" + 
      "<img src='img/edit_icon.png' alt='edit'/></a><a class='save'><img src='img/ok_icon.png' alt='ok'/></a>" + 
      "<a class='delete-item'><img src='img/delete_icon.png' alt='delete'/></a></li>");
      clearInput();
  	}
  }

  function clearInput() {
  	$(".todo-input").val("");
  }

  function deleteItem() {
  	$(this).parent().remove();
  }

  function editItem(e) {
  	var taskLi = $(this).parent(),
  	  todoItemText = taskLi.find(".todo-val").text();

  	taskLi.find(".edit-input").val(todoItemText);
  	taskLi.find(".todo-val").hide()
  	taskLi.find(".edit-input").show();
	  $(this).hide();
	  taskLi.find(".save").show();
  }

  function saveItem(e) {
  	if (e.which === 13 || e.type === 'click') {
  	  var taskLi = $(this).parent(),
	    newValue = taskLi.find(".edit-input").val();

	  taskLi.find(".todo-val").text(newValue);
	  taskLi.find(".edit-input").hide();
	  taskLi.find(".todo-val").show();
	  taskLi.find(".save").hide();
	  taskLi.find(".edit").show();
  	}
  }
})
