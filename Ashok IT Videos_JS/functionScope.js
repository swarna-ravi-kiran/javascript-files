function fn(){
    var gender = "male";            //this variable will access the inside the fn() function only. we can't print outside the function.
    function f1(){
        console.log(gender);
        console.log("i am ravi");
    }
    f1();
}
fn();