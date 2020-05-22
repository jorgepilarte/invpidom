// (function(){
	var formcontacto = document.getElementById('formcontacto'),
		nombre = formcontacto.nombre,
		correo = formcontacto.correo,
		mwensaje = formcontacto.mwensaje,
		error = document.getElementById('error');

	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li class="list-group"><small>Por favor completa el nombre</small></li>';
			console.log('Por favor completa el nombre');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarCorreo(e){
		if (correo.value == '' || correo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li class="list-group"><small>Por favor completa el correo<//small></li>';
			console.log('Por favor completa el correo');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarMensaje(e){
		if (mensaje.value == '' || mensaje.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li class="list-group"><small>Por favor completa el mensaje</small></li>';
			console.log('Por favor completa el mensaje');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	// Funcion encargada de validar todos los campos
	function validarForm(e){
		// Reiniciamos el error para que inicie sin mensaje.
		error.innerHTML = '';

		validarNombre(e);
		validarCorreo(e);
		validarMensaje(e);
	}

	formcontacto.addEventListener('submit', validarForm);
// }())