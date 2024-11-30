import Animal from "./animal.js";
export default class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear(){
        console.log('sss')
    }
}