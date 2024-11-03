function getfetch(){
// debugger
fetch("https://jsonplaceholder.typicode.com/users").then((success) =>{
     return success.json()
}).then((data) => {
// console.log(data)
var ol = document.createElement("ol")
data.forEach((element) => {
    var li = document.createElement("li")
    li.innerText = element.name
    ol.appendChild(li)
});
document.getElementById("body").appendChild(ol)
})
.catch((error)=>{
var h2 = document.createElement("h2");
h2.innerText = "something went wrong in the Api response";
h2.style.fontSize = "28px";
h2.style.color = "red"
document.getElementById("body").appendChild(h2)
})
}