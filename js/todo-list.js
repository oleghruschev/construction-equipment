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
