
let listContactos = [];
function contactos(a){
let lista = ['nombre','brayan','rodriguez',3054678717,'brayanrodriguez048@gmail.com'];
a = lista
console.log (a);


}
function actualizar(b){
  let listActualizar = ['rafael','reales',73272636,'email'];

  if (b!==listActualizar) {
    console.log(listActualizar);
  
}
else{
  console.log("no se ha modificado nada");
}
}

function agregarContactos(c) {
  let agregarContactos =[];
  if (c=="") {
    console.log("no a agregado ningun contacto");
    
  }
  else{
    console.log(agregarContactos);
  }
  
}
console.log(contactos(listContactos),actualizar(listContactos),agregarContactos(listContactos));