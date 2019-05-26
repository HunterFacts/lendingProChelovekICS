(function($){
  $(function(){
	$('.datepicker').datepicker({
		yearRange: 100
	});
	$('select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
	$('.tabs').tabs();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function Toast (){
	var toastHTML;
	var toastDisplayLength = 16000;
	if ($("#validater-for-email").text() == "некорректный email" || $("#email_inline").val() == ""){
		toastDisplayLength = 5000;
		toastHTML = '<span>Укажите правильный email</span>';
		}
	else {
		toastHTML = '<span>Поиск результатов не дал. В случае нахождения соответствий по вашему запросу информация будет направлена на указанный почтовый адрес</span><button onclick="M.Toast.dismissAll();" class="btn-flat toast-action">Закрыть</button>';		
	}
	
	M.toast({html: toastHTML, displayLength: toastDisplayLength});	
}
function Search () {
	var toastHTML;
	var toastDisplayLength;
	
	if ($("#validater-for-email").text() == "некорректный email" || $("#email_inline").val() == ""){
		toastDisplayLength = 5000;
		toastHTML = '<span>Укажите правильный email</span>';
		M.toast({html: toastHTML, displayLength: toastDisplayLength});
		}
	else {
		var answer = 'По вашему запросу получено 2 результата';
		$('#search, #h5-date-heirs').hide();
		$('#h6-answer').text(answer);
		$('.btn-search, #h6-answer').show();
	}	
}
function UndoSearch() {
	$('#search, #h5-date-heirs').show();
	$('.btn-search, #h6-answer').hide();
}