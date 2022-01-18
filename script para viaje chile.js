// <-------APP------->
const mensaje = document.getElementsByClassName('mensaje');
let botonMen = document.getElementsByClassName('botonMen');
const telefone = document.getElementsByClassName('tel');
const formulario = document.getElementById('formulario1')


const changeClass = (u, e, i) => {
    mensaje.item(u).classList.remove('hidden')
    mensaje.item(u).classList.add('active')
    mensaje.item(e).classList.remove('hidden')
    mensaje.item(e).classList.add('active')
    mensaje.item(i).classList.remove('hidden')
    mensaje.item(i).classList.add('active')
}



botonMen.item(0).addEventListener('click', () => {
    changeClass(0, 1, 2)
})

// Base de Datos

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('https://sheet.best/api/sheets/621805c5-b26c-4e59-a8ff-7ea45f4e15c4', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'Mensaje': formulario.mensaje.value,
            'Telefono': formulario.tel.value
        })
    })
})