function wish(message){
    switch(message){
        case "gm" :{
            console.log("good morning")
        }
        break;
        case "ga" :{
            console.log("good afternoon")
        }
        break;
        case "ge" :{
            console.log("good evening")
        }
        break;
        case "gn" :{
            console.log("good night")
        }
        break;
    }

}
wish("ge");

// another example of switch////
function wish(message){
    switch(message){
        case "gm" :{
            console.log("good morning")
        }
        break;
        case "ga" :{
            console.log("good afternoon")
        }
        break;
        case "ge" :{
            console.log("good evening")
        }
        break;
        case "gn" :{
            console.log("good night")
        }
        break;
        default : {
            console.log("no wishes found..")
        }
    }
}
wish("gsdfge");