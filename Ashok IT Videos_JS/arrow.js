//in normal function , important in react.js
function fn(){
    return "i am a normal function"  //in normal function we have to handle in the block
}
// in arrow function
var myfn = () =>  "i am a arrow function"  // in arrow function we can print the value in single line.
console.log(myfn())

///example 2
//in normal function
var obj1 = {
    name:"ravi",
    id:101,
    print:function(){
        console.log(this.name,this.id)  //here in normal function 'this' indicates the current object which means the obj1.
    }
}
obj1.print();

//in arrow function
var obj1 = {
    name:"ravi",
    id:101,
    print: () =>{
        console.log(this.name,this.id)  //here in arrow function 'this' indicates the window object which means the global variable(know as undefined)
    }
}
obj1.print();

//the difference b/w normal and arrow function is 'this' keyword referes the current object in normal function where as window onbject in the arrow function.


