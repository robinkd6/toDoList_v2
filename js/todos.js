$("ul").on('click', "li", function() {
	//if li is gray
	$(this).toggleClass("completed");
});

$("ul").on('click', "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text'").keypress(function(e) {
	if (event.which === 13) {
		//grabbing new todo text from input
	var todoText = $(this).val();
	$(this).val("");
	//create new li and add to ul
	$('ul').append("<li><span><i class='fa fa-trash'></i></span> "  + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text'").fadeToggle();
})
