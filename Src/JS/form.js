window.addEventListener('load', ()=>{
	const form = document.querySelector('#formulario')
	const nombre = document.getElementById('nombre');
	const apellido = document.getElementById('apellido');
	const mail = document.getElementById('mail');
	const mensaje = document.getElementById('mensaje');

	form.addEventListener('submit', (e)=>{
		e.preventDefault()
		validaCampos();
	})

	const validaCampos =()=>{
		
		const nombreValor = nombre.value.trim();
		const apellidoValor = apellido.value.trim();
		const mailValor = mail.value.trim();
		
		//validar nombre
		if(!nombreValor){
            validaFalla(nombre, 'Campo vacío');
		}else{
            validaOk(nombre)
        }

		if(!apellidoValor){
            //console.log('CAMPO VACIO')
            validaFalla(apellido, 'Campo vacío');
        }else{
            validaOk(apellido)
        }

		//validar mail
		if(!mailValor){
			validaFalla(mail, 'campo vacio')
		}else if(!validaEmail(mailValor)){
			validaFalla(mail, 'el mail no es valido')
		}else{
			validaOk(mail);
		}

	}
	const validaFalla = (input, msje) => {
		const formControl = input.parentElement
		const aviso = formControl.querySelector('p')
		aviso.innerText = msje
  
		formControl.className = 'form-control falla'
	}
	const validaOk = (input, msje) => {
		const formControl = input.parentElement
		formControl.className = 'form-control ok'
	}
	/*
	const validaNombre = (nombre)=>{
		return  /^[a-zA-ZÀ-ÿ\s]{1,40}$/
	}
	*/
	const validaEmail = (email)=>{
		return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	}


})