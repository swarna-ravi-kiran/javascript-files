// idi keys ni print cheyyadaniki use chestaru and used only for the object's(object structure)
var obj ={
    name : "ravi",  // name,gender,id,city are the key's in the object
    gender:"male",
    id:100,
    city:"andhra"
}
for(var x in obj){
    console.log(x , ":",obj[x]);  //ikkada dot property ni use cheyyadaniki because dynamic ga object ni handle chesetappudu [] use cheyyali dot property work avvadu
                                   //ikkada keys mottam x lo store ayyi vuntay .... var x is variable declaration and obj is object name
}