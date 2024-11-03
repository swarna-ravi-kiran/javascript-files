class Users{
 username;
 gender;
 mail;
 city;

 constructor(name,gender,mail){                 //ikkada manam  constructor method kachitanga use cheyyali with constructor name only.parameters kuda pass cheyyali
  this.username = name;
  this.gender = gender;
  this.mail = mail;
  this.city = "andhra"
 }   
 
 display(){                                   //ikkada constructor ni use cheyyali print cheyyadaniki values and class bayata deenini call cheyyali
console.log(this.username,this.gender,this.mail,this.city);
 }
}

var user1 = new Users("ravi","male","ravi@gmail.com");
var user2 = new Users("raj","male","raj@gmail.com");
var user3 = new Users("chinna","female","chinna@gmail.com");
var user4 = new Users("raja","male","raja@gmail.com");

user1.display();
user2.display();
user3.display();
user4.display();

