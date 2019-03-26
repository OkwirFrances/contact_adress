
function contact (firstName,secondName,phone,email){
  this.firstName = firstName;
  this.secondName = secondName;
  this.phoneNumber = phone;
  this.email = email;
}



  contact.prototype.address = function(){
    return this.street + ', ' + this.city + ', ' + this.state;
  };

myContact= new contact('okwir','francis',0781335622,'francisokwir@mail.com');


myContact.addres=['Lumumba avenue','Kampala','Uganda']

console.log(myContact);
