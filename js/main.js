


document.addEventListener("click", (e) =>{
    const inputAlert = document.querySelector("#container_sectionOne_form_p")
    const correo = document.querySelector("#inputText").value
    let expresionRegular = /\w+@\w+\.+[a-z]/;  //para correo electronico

    if(e.target.id === "boton"){
        if(expresionRegular.test(correo)){
            inputAlert.classList.add("container_sectionOne_form_p_JS")
            inputAlert.textContent = "El correo fue enviado con exito"

        }else{
            inputAlert.classList.add("container_sectionOne_form_p_JS")
            inputAlert.textContent = "El correo no es valido"
        }
    }
})
