let frm, correo, pst;

	window.onload = ()=>{
				frm = document.getElementById('form-login');
				correo = document.getElementById("correo");
				pst = new Pristine(frm);

				frm.addEventListener("submit",function(e){
					e.preventDefault();
					if(pst.validate())
					{
						procesarDatos();
					}
					else
					{
						frm.classList.add("was-validated");
					}
				});
	}

	function procesarDatos(){

		let usuario = localStorage.getItem(correo.value);

		if(usuario)
		{
	      fetch('scripts/script.php', {
	        method: 'post',
	        body: new FormData(frm)
	      }).then(function(response) {
	        return response.json();
	      }).then(function(json){
	        validar(json);
	      }).catch(function(err) {
	        console.log(err);
	      });
		}
		else
		{
			alert("Validar datos");
		}
	}
	function validar(json)
	{
		let usuario = JSON.parse(localStorage.getItem(correo.value));

		console.log(usuario);
		console.log(json);

		if(usuario.contrasena == json.contrasena)
		{
			 location.href = "contenido.html";
		}
		else
		{
			alert("Validar datos");
			frm.reset();
		}
		
	}
