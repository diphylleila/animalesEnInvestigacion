import Animal from "./animal.js";
export default class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    gruñir(){
        console.log('grr')
    }
}