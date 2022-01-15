 //var myname='pramit mondal';
// var myage=18;
// console.log(myage);
// var iampramit=true;
// console.log(typeof(myname));
// console.log(typeof(iampramit));
// console.log(true+true);
// console.log(false-true);
// var iamuseless=null;
// console.log(typeof(iamuseless));//bug
// console.log(10+"20");
// console.log(9-"5");//bug
//nan-property of global object.
// var myphonenumber=9832102128
// console.log(isNaN(myphonenumber));//not a number-false
// var myname='pramit';
// console.log(isNaN(myname));//not a number true
// if(isNaN(myname))
// {
//     console.log("pleasae enter a valid phone number.");
// }
//console.log(10+20);//10 and 20 are operand and +  is operator.
//assingment operator -assign a value to its left operand
// var x=5;
// var y=5;
// console.log("is both the x and y are equal or not"+x==y);//false
// console.log(x==y);//true
// //arithmatic operator-
// console.log(9+7);
// console.log(9-7);
// console.log(9*7);
// console.log(49/7);
// console.log(4%7);


//increament and decreament operator-
// var x=14;
// var y=x++;
// console.log(x);
// console.log(y);
// var num=34;
// var newnum=--num;
// console.log(num);
// console.log(newnum);
// var a =12;
// var b=13;
// console.log(a !=b);
// console.log(a == b);
// console.log(a>b);
// console.log(a<b);

//logical operator-typically used with boolean (logical )values,when they are they return a boolean value.
// var a= 30;
// var b= -20;
// console.log(a>b && b>0);//logical and operartor-if aany of the expression is false then output gives false and if those two are ture then it gives true .
//console.log(a>b || b>0);//logical or operator-if one of condition is true then the output will be true.
//console.log(a);
//string-
//concatination operator- +
// console.log("hello "+"world")
// console.log(5**2)
// console.log(5 +"pramit")//concatinate
// console.log(5- "pramit")//output will be NaN-Not a number
// var n1=5;
// var n2='5';
// console.log(typeof(n1))
// console.log(typeof(n2))
// console.log(n1 == n2)//== check only value
// console.log(n1 === n2)//=== check value as well as data type

//control statement and loop-
//1.if-else=
// var n="pramit"
// if(n =="prami")
// {
//    console.log("wright");
// }else{
//     console.log("wrong");
// }
//Functoin-
// function sum(a,b)
// {
//  var total=a+b;
//  console.log(total);
// }
// sum(45,46)
// sum();//NaN

//anonymous function-the function which has not any name .
// var funcexp= function(a,b)
// {
//     return total =a+b;
// }
// console.log(funcexp(5,9));
// console.log('the sum of two number is '+ funcexp(5,34));



//ECMAScript---------------


//1.LET VS CONST VS VAR
// var = function scope
// const and let =block scope

//----------var--------

// var  myname="pramit"
// console.log(myname)
// myname= "rimo"
// console.log(myname)

//----------let--------

// let  myname="pramit"
// console.log(myname)
// myname= "rimo"
// console.log(myname)

//----------const------

// const myname="pramit"//const is not changeable
// console.log(myname)
// myname= "rimo"
// console.log(myname)