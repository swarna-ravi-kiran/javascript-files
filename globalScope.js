var city = "ap";

function f1(){
    console.log(city);
}

function f2(){
    f1(); 
    f3();
    console.log(city);
}

function f3(){
    console.log(city);
}

f1();
f2();
f3();

//note : global scope access the entire the javascript file, not aaccess inside the block functions({}).