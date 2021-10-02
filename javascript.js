
 function validacion(mail) {

	var nombre = document.getElementById('nombre').value;
	var mail = document.getElementById('mail').value;
	var tel = document.getElementById('tel').value;
	var subject = document.getElementById('subject').value;
	var comentarios = document.getElementById('comentarios').value;

	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

	if(!re.exec(mail)){

	  alert('ingrese un mail valido');
	  
	}

	else{

	  alert('Mensaje enviado');
	 // window.open("https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=new", "_blank");
  }
}