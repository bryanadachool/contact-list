let contac 
    
  let listContact = '{ "contactos" : [' +
'{ "id":"1" ,'+
  '"nombres":"brayan ernesto",'+
  '"apellidos":"rodriguez navarro",'+
  '"telefono":"3054678717",'+
'"ubicaciones":['+
'{"ciudad":"valledupar",'+
'"direccion":"el porvenir"}]}]}';
 let obj = JSON.parse(listContact);

console.log(obj.contactos[0].ubicaciones[0].ciudad);
function addListContact(){
obj =obj.push('{ "id":"1" ,'+
'"nombres":"elkin",'+
'"apellidos":"redondo",'+
'"telefono":"3054678717",'+
'"ubicaciones":['+
'{"ciudad":"valledupar",'+
'"direccion":"el porvenir"}]}');
console.log(obj.contactos[0]);
}
console.log(addListContact());