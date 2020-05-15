$(document).ready(function () {
//Scrol Elementos Menu
	var acercade = $('#acercade').offset().top,
		servicios = $('#servicios').offset().top,
		contacto = $('#contacto').offset().top;

//Boton Menu
	$('#btacercade').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercade -40
		});
	});


	$('#btservicios').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios -40
		});
	});

	$('#btcontacto').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto -40
		});
	});



});