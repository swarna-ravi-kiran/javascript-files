//it is a techinique to access the scope outer function inside inner function is called closures.
//example
function outer(){
    var city = "AP";
    console.log("outer function",city)  //this is outer function
    function inner(x,y){
        console.log(x+y);
        console.log("inner function",city);
    }
       return inner                                                    //inner(3,5)  -->ilagaina print cheyyochu
}
var myVar = outer() //ikkada outer function call chesi myVar ane variable lo values store chestunnam
myVar(3,5)
