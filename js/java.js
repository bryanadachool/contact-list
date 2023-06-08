
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

