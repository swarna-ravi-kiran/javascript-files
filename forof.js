// idi keys ni print cheyyadaniki use chestaru and used only for the array's(array structure)
var arr = [10,20,30,40,50];
for(var x of arr){
    console.log(x);     //ikkada "of" use cheste "values" print avutunnay, "in" use cheste "index places" print avutunnay
}
 
//note: "of" will be used for the arrays only. we cannot use the "of" in the object, it will  through typeError as obj is not iterable.