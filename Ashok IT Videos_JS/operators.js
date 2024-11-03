//modulus and division operators examples
var x =100;
var y =50;
var result = x %y;  // it will give output as remainder 100%50 = 0 remainder(ex:modulus operator)
var z = x/y;   // it will give output as quotient 100/50 = 2 quotient(division operator)
console.log(result);
console.log(z);

// pre increment and post increment operator examples
var x =100;
console.log(++x); // o/p ->101 -->it is performing the operation then it is printing the value;
var y = 100;
console.log(y++)   //o/p-->100 --> it is fisrt printing the values then it will performing the operation.
console.log(y);   // o/p --?101 ---> here increment happend it will print as 101

//another example for pre and post increment
var x =10;
var y =10;
var result1 = x + ++y; /// 10 + 11 --->21
console.log(result1);
var result2 = x + y++; /// 10 + 10+ --> 20 it will excute the (+)operation after that it will execute the result2 operation-->10 + 11 --->21 as o/p
console.log(result2);

// pre and post decrement operator example
var a = 100;
var b = 50;
var c = a-- + b-- /// a=100 and b=50
console.log(c)   // still not executed a =100 and b = 50
console.log(a,b)  /// a = 99 and b = 49

var d = --a + --b  /// a = 98 and b = 48 taken the values from 29th line
console.log(d);

