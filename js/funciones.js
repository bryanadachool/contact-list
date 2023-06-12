const saveContact=(db,contact)=>{
    db.setItem(contact.id, JSON.stringify(contact));
window.location.href='/xampp/htdocs/lista%20de%20contactos/index.html'
}


 