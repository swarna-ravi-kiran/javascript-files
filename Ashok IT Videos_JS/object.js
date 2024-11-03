var userDetails = {
 name : "ravi",    ////-------->this is one property/// and name is the key and ravi is the value, like that we can create any no.of properties in object
 city : "andhra",
 id:"101",
 mail:"ravi@gmail.com",
};
console.log(userDetails);

//example of the object for the product///
var product = {
    name: "iphone",
    price:100000,
    category:"electronic",
    rating:4.6,
    stock:true,
};
console.log(product);

/// i want to acccess specific property in the object
var product = {
    name: "iphone",
    price:100000,
    category:"electronic",
    rating:4.6,
    stock:true,
};
console.log(product.name);
var x = product.price;
console.log(x);
console.log(product['rating']);

////every property  should have unique key, should not have repeat the key//
var product = {
    name: "iphone",
    price:100000,
    category:"electronic",
    rating:4.6,
    stock:true,
    price:50000,
};
console.log(product);

///insert or add new property inside the object///
var product = {
    name: "iphone",
    price:100000,
    category:"electronic",
    rating:4.6,
    stock:true,
    price:50000,
};
console.log(product)  /// it will print 5 values as a o/p
product.bname = "apple";
console.log(product);  // it will print 6 values as a o/p

//modify or update the  value of proprty in the object
var product = {
    name: "iphone",
    price:100000,
    category:"electronic",
    rating:4.6,
    stock:true,
};
console.log(product);    
product.name = "samsung";
product.price = "200000";
product.stock = false;
console.log(product);

// delete the value of property in object
var product = {
    name: "iphone",
    price:100000,
    category:"electronic",
    rating:4.6,
    stock:true,
};
delete product.price;
delete product.category;  //// delete is the special operator in javascript.
console.log(product);  

/// how to create nested objects///
 var user = {
    name:"ravi",
    id:101,
    isplaced:true,
    address :{
        city:"hyder",
        state:"TS",
        pincode:12345,
        area:{
            area1 : 'area1',
            area2 :'area2',
            area3: 'area3', //// very very important for the relal time project,the object structure will be like this.

        }
    }
   
 }
 console.log(user.address.state);
 console.log(user.address.area.area1);

///write the function inside the object, that always should be anonymous function///
var obj ={
    id :101,
    brand :"apple",
    fn: function(){
        x=10;
        y=20;
        console.log(x+y);
    },
};
obj.fn();
console.log(obj.id);
console.log(obj.brand);
console.log(obj);

