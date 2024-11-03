function createPromise(){                        //ikkada oka function call chestaam andulo new promise ane constructor ni print chestam
    return new Promise(function(resolve,reject){    //new promise() constructor lo call back function create chestam andhulo resolve and reject predefined values pass chestam
         resolve({
            status : true,
            data :[{name :"ravi"},{nick : "nani"},{}]
         })
    })
}

  async function catchPromise(){       //asyn function create chestam with any name andhulo main function call chesi oka variable lo store chesi daanini print chestam
    try{
    var result = await createPromise();
    console.log(result);
    }
    catch(errordata){
        console.log("error present")
    }
   }

   catchPromise();