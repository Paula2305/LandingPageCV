document.addEventListener("DOMContentLoaded", function(){

    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const inputNombre = document.querySelector("#nombre");
    const formulario = document.querySelector('#formulario');

    inputNombre.addEventListener("blur", validar);
    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);

    function validar(e){
        // console.log(e.target.value);

        if(e.target.value.trim() === ""){ 
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        }else{
            console.log('hay algo')
        }
    }

    function mostrarAlerta(mensaje, referencia){
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.style.backgroundColor = "red";
        error.style.color = "white";
        error.style.display = "inline-block";
        error.style.margin = "5px";  

        referencia.insertAdjacentElement('afterend', error);

    }

})


