// class Nodo{
//     constructor(valor){
//         this.valor = valor;
//         this.siguiente = null;
//     }
// }
// class Pila {
//     constructor(){
//         this.tope = null;
//     }
//     agregarElemento(valor){
//         let nuevoElemento = new Nodo(valor);
//         nuevoElemento.siguiente = this.tope;
//         this.tope = nuevoElemento;
//     }


//     agregarElemento (valor){
//         let nuevo = new Nodo(valor);
//         nuevo.siguiente = this.tope;
//         this.tope = nuevo;
//     }
//     mostrarElementos(){
//         let actual = this.tope;
//         while(actual!=null){
//             console.log(actual.valor);
//             actual = actual.siguiente;
//         }
//     }    
// }
// function eliminar(){
//     primero = primero.siguiente;
// }
// const pila = new Pila();
// pila.agregarElemento(15);
// pila.agregarElemento(20);
// pila.agregarElemento(1000);
// pila.mostrarElementos();

class Cola{
    constructor(){
        this.cola=[];
    }
    agregarElementoCola(valor){
        this.cola.push(valor);
    }
    eliminarElementoCola(){
        this.cola.shift();
    }
    imprimir(){
        console.log(this.cola)
    }
}
let cola = new Cola();
cola.agregarElementoCola(100);
cola.agregarElementoCola(103);
cola.agregarElementoCola(10220);
cola.imprimir();

function validarTarea(){
    let tarea = document.getElementById("tarea").value;
    console.log(tarea);
    let formato = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    let nameFlag = 0;
    if(tarea==""){
        document.getElementById("errorTarea").style.display="block";
        document.getElementById("errorTarea").innerHTML="Por favor ingrese una tarea"
    } else if(!(formato.test(tarea))){
        document.getElementById("errorTarea").style.display="block";
        document.getElementById("errorTarea").innerHTML="Caracteres inválidos"
    }else {
        document.getElementById("errorTarea").style.display="none";
        nameFlag = 1;
    }
    console.log(nameFlag);
    return nameFlag;
}
function agregarElemento(){
    if (validarTarea) {
       cola.agregarElementoCola(tarea);
    }
}
function mostrarElemento(){
    console.log("prueba");
}

document.getElementById("agregar").addEventListener("click", agregarElemento);
document.getElementById("mostrar").addEventListener("click", mostrarElemento);


