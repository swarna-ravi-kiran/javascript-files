var x =10;
var y=20;
var z=30;
 
console.log(x>y && x<z)

//|| OR Operator example//
var details = [
    {
        brand :"Apple",
        model:"iphone 14",
        price:10000
    },
    {
        brand :"Apple",
        model:"iphone 12",
        price:70000
    },
    {
        
        brand :"samsung",
        model:"galaxy",
        price:120000
    }
]
var newArray = details.filter(function(element,index){
    return (element.brand == "Apple"|| element.brand == "samsung") && element.price >
     70000
})
console.log(newArray)