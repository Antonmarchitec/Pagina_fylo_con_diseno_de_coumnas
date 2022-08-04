
document.addEventListener("click", (e) =>{
    const inputAlert = document.querySelector("#container_sectionOne_form_p")
    const correo = document.querySelector("#inputText").value
    
    let imputCorreo = document.querySelector("#inputTree").value
    let threeLabel = document.querySelector("#threeLabel")


    if(e.target.id === "boton"){
        validarCorreo(inputAlert, correo)  
    }else if(e.target.id === "threeButon"){
        validarCorreo(threeLabel, imputCorreo)
    }
    
})


//FUNCION VALIDAR CORREO
const validarCorreo = (labell, correo) =>{
    let expresionRegular = /\w+@\w+\.+[a-z]/;  //para correo electronico

    if(expresionRegular.test(correo)){
        labell.classList.add("activar_label_JS")
        labell.textContent = "El correo fue enviado con exito"
        labell.style.color = "grey"
        labell.style.transition = "1s all"


    }else{
        labell.classList.add("activar_label_JS")
        labell.textContent = "El correo no es valido"
        labell.style.color = "red"
        labell.style.transition = "1s all"

    }
}

