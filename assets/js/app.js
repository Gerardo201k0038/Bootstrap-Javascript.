
console.log("ejecutando");

const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", e =>{
    console.log("click en enviar")
    e.preventDefault()

    const datos = new FormData(formulario)
    console.log("campo email",datos.get("emailCampo"))
    console.log("campo contraseña", datos.get("passCampo"))
    console.log("campo checkbox", datos.get("checkboxCampo"))
    formulario.reset()
})