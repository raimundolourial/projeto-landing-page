const formulario = document.querySelector('form')
const limpaForm =(event)=>{
    event.preventDefault()
    formulario.reset();
}