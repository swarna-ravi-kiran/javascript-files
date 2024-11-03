var obj1 = {
    c :100
}

var obj2 = {
    c:200
}

function fnAdd(x,y){
    console.log(x + y +  this.c);   //this will refer the window object 
}
fnAdd.call(obj1,100,50);     // ikkada c value ni dynamic ga handle cheyyadaniki call method use chestaru appudu 'c' value varie avutu vuntadhi
fnAdd.call(obj2,100,50);    //call() lo oka parameter object and remaining arguments evaina pass cheyyochu 
fnAdd.apply(obj2,[1,2])    //Apply() method lo manam only two argunements matrame pass cheyygalam andulo okati object and second dhi array, in array we can pass any number of arguments.


//note:the difference b/w call() and apply() method is no.of arguments...which is we can pass any no.of arguments in call(), but we can pass only 2 arguments in apply() method.