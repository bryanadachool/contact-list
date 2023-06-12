
const name = document.querySelector('.name');
const lastName = document.querySelector('.lastName');
const telephoneNumber = document.querySelector('.telephoneNumber');
const email = document.querySelector('.email');
const direction = document.querySelector('.direction');
const addBtn = document.querySelector('.addBtn');

const listContact = document.querySelector('.listContact');

const db =window.localStorage


addBtn.onclick=()=>{
  let contact = {
    id: Math.random(1,100),
    name: name.value,
    lastName: lastName.value,
    telephoneNumber: telephoneNumber.value,
    email: email.value,
    direction: direction.value,
  
  }
  saveContact(db,contact);

  
}
const showContact=(db,node)=>{
  let id = Object.keys(db);
   for (const i of id) {
      let contact = JSON.parse(db.getItem(i));
      createContact(node,contact,db);
      
  }
}

const createContact =(node,contact)=>{
  let div = document.createElement('div');
  let nameContact=document.createElement('h3');
  let lastNameContact=document.createElement('p');
  let telephoneNumberContact=document.createElement('p');
  let emailContact=document.createElement('p');
  let directionContact=document.createElement('p');
  let iconDelete=document.createElement('span');

  
  div.classList.add('Contact');
  iconDelete.classList.add('material-symbols-outlined','btnDelete');
  

  nameContact.innerHTML=contact.name;
  lastNameContact.innerHTML=contact.lastName;
  telephoneNumberContact.innerHTML=contact.telephoneNumber;
  emailContact.innerHTML=contact.email;
  directionContact.innerHTML=contact.direction;
  iconDelete.innerHTML="delete";
  
  div.appendChild(nameContact);
  div.appendChild(lastNameContact);
  div.appendChild(telephoneNumberContact);
  div.appendChild(emailContact);
  div.appendChild(directionContact);
  div.appendChild(iconDelete);
  node.appendChild(div);
  
  iconDelete.onclick=()=>{
    db.removeItem(contact.id)
    window.location.href='/xampp/htdocs/lista%20de%20contactos/index.html'

  }
}


showContact(db,listContact);

