import Animal from "./animal.js";
export default class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar(){
        console.log('auu')
    }
}