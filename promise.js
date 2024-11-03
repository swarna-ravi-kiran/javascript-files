var promiseObject = new Promise(function(resolve,reject){    //ikkada new promise() anedi constructor 
    // resolve("ravikiran")
    resolve({
        status :true,      //we can use store any type of data like strings,objects,arrays,numbers
        data :[{},{}]
    })
    // reject({
    //     status :false,
    //     data :"rejected"
    // })
});

// console.log(promiseObject)
promiseObject
.then(function(successdata){       //ikkada successdata lo store ayyedi promiseObject success response
console.log("then" ,successdata)                //ikkada manam edaian logic rasukovachu
})
.catch(function(errordata){                   //ikkada errordata lo store ayyedi promiseObject error response
    console.log("catching the respose error" , errordata);
})
//note: promise lo manam either resolve function use cheyyali ledante reject matrame use cheyyali, rendu okeasari use cheyyalem
//note:to access the data from promise object we have to take the help from 1)then() and catch() or 2)async await
