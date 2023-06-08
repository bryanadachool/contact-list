
<<<<<<< HEAD
const names = document.querySelector('.name');
const lastName = document.querySelector('.lastName');
const telephoneNumber = document.querySelector('.telephoneNumber');
const email = document.querySelector('.email');
const direction = document.querySelector('.direction');
const addBtn = document.querySelector('.addBtn');

const listcontact = document.querySelector('.Contact')

const db =window.localStorage


addBtn.onclick=()=>{
  let contact = {
    id:Map.random(1,100),
    name: names.value,
    lastName: lastName.value,
    telephoneNumber: telephoneNumber.value,
    email: email.value,
    direction: direction.value,
  
  }
  console.log(contact);
}

=======

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
>>>>>>> 3d1ddf83d0600aa46a002f25dcd0c5d7c59636ce
