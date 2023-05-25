

function añadirContactos(){
let lista = ['brayan','rodriguez',3054678717,'brayanrodriguez048@gmail.com'];

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
   
   return lista.join(" ");
}
}
function borrar(eliminar){
 eliminar ="no hay contactos";
 return eliminar;
 } 
function mostrar() {

   console.log(añadirContactos());
console.log(borrar(añadirContactos()))
  
}
console.log(mostrar());