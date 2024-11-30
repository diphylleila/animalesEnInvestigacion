import Aguila from "./animales/aguila.js";
import Leon from "./animales/leon.js";
import Lobo from "./animales/lobo.js";
import Oso from "./animales/oso.js";
import Serpiente from "./animales/serpieinte.js";

let animales
let seleccionAnimal;


const consultarAnimales = async () => {
    try {
        const response = await fetch('../../animales.json')
        if (!response.ok) {
            throw new Error('ruta no disponible')
        }
        animales = await response.json() 
        return animales
    } catch (error) {
        console.log(error)
        return {};
    }
}
consultarAnimales()

const buscarPorNombre = (nombre, animales = []) => {
    const animalBuscado = animales.find((animal) => {
        return animal.name === nombre
    })
    return animalBuscado
    
}

const ponerFoto = () => {
    seleccionAnimal = document.querySelector('#animal')
    seleccionAnimal.addEventListener('change', () => {
        let foto = document.querySelector('#preview')
        foto.innerHTML = `'<img class="w-100 h-100" src="assets/imgs/${animales.animales[seleccionAnimal.selectedIndex - 1].imagen}" alt=""></img>'`
    })
}
ponerFoto()

const capturarDatosForm = () => {
    const animal = document.querySelector('#animal')
    const edad = document.querySelector('#edad')
    const comentarios = document.querySelector('#comentarios')
    return {
        name: animal.value,
        edad: edad.value,
        comentarios: comentarios.value
    }
}

const crearAnimal = async () => {
    const datosForm = capturarDatosForm()
    const animalesJson = await consultarAnimales()
    const animalBuscado = buscarPorNombre(datosForm.name, animalesJson.animales)
    let animal
    if (datosForm.name == 'Leon') {
        animal = new Leon(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido)
    } else if (datosForm.name === 'Lobo') {
        animal = new Lobo(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    } else if (datosForm.name === 'Serpiente') {
        animal = new Serpiente(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    } else if (datosForm.name === 'Aguila') {
        animal = new Aguila(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    } else {
        animal = new Oso(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    }
    return animal;
}

const tarjetas = () => {
    const btnRegistrar = document.querySelector('#btnRegistrar')
    const arrelgoAnimales = [];
    btnRegistrar.addEventListener('click', async () => {
        let cadena = ''
        const animal = await crearAnimal();
        arrelgoAnimales.push(animal);
        const animales = document.querySelector('#Animales')
        arrelgoAnimales.forEach((animalTermporal) => {
            cadena += `<div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="./assets/imgs/${animalTermporal.img}" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">Comentarios: ${animalTermporal.comentarios}</p>
                                    <audio style="width: 100%; max-width: 100%;" controls src="./assets/sounds/${animalTermporal.sonido}"></audio>
                                </div>
                                </div>`
        });
        animales.innerHTML = cadena
    })

}

tarjetas()


















