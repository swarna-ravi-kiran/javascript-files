var obj1 = {
    c :100
}

var obj2 = {
    c :200
}

function fnadd(x,y){
    console.log(x + y + this.c)
}

// var fnadd = fnadd.bind(obj1,10,10);
// fnadd();                                       //ila kuda rayochu
// var fnadd = fnadd.bind(obj2);
// fnadd(10,10);                                  //ila kuda rayochu
fnadd.bind(obj1,10,10)();

//note : call and apply methods doesn't return anything but bind will return the function.