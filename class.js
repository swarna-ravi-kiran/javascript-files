class Products {
    brandName = "apple";
    modelName = "ios 34";
    price = 80000;
    rating = 4.6;    // from line 1 to 6 varaku class creation 

    values(){
        console.log(this.brandName,this.modelName,this.price,this.rating)
    }
    changePrice(newPrice){
        this.price = newPrice
        // console.log(this.price)
        this.values()
    }
}                                       

var product1 = new Products()  ///ikkada new products() anedi method nothing but  function storing in product1, alaga we can store n no.of data
console.log(product1)          //line 8 is object creation in oops concept.
var product2 = new Products();
console.log(product2)
product1.values();
product1.changePrice(500000)
product1.brandName = "samsung";
product1.modelName = "galaxy s23";
product1.price = 1000000;
product1.rating = 5;

product1.values();







//note: inside the class lo vunnavi access cheyyali ante "this" keyword use cheyyali outside the class access cheyyali ante varibale lo store chese daani nunchi access cheyyali
