var arr = [100,200,300,400,500];
var filterArray = arr.filter(function(element,index){
    return element >200
})
console.log(filterArray);

var details = [
    {
        brand :"Apple",
        model:"iphone 14",
        price:10000
    },
    {
        brand :"Apple",
        model:"iphone 12",
        price:70000},
    {
        brand :"samsung",
        model:"galaxy",
        price:120000

    }
]
var newArray = details.filter(function(element,index){
    return element.brand == "Apple";
})
console.log(newArray)

var newArray1 = details.filter(function(element,index){
    
    return element.price > 70000
})
console.log(newArray1)

console.log('5' + 3 -2);
console.log('5' + 3 +2);
console.log(typeof typeof null)               //typeof object is string  
console.log(typeof null)                       //typeof null is object