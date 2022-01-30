//java script console api------
//console.log("pramit Mondal");
//document.write("This is document write")
//console.warn("this is warnning")
//console.error("This is an error.")

//js varriable---
//containers to store data values
//numbers-
var n1=34;
var n2=45;
//console.log(n1+n2);

//string-
var str1="Pramit";
var str2="Mondal";

//objects-
var marks={
    ram:10, sam:20, jadu:40
}
//console.log(marks);

//booleaans-
var a=true;
var b=false;

//udefined and null-
var z;
//console.log(z);
var x=null;
//console.log(x);

/*
At a very high level there are two types pf data types in javascript
1.primitive data types:undefined,null,number,string,boolean,symbol
2.reference data types:arrays and object

*/

//array--
var array=[1,2,"pramit",3,4];

//operators-----
//1.Arithmatics operator----[+,-,*,/]
var a= 30;
var b=15;
/*console.log("The value of a+b is", a+b);
console.log("The value of a-b is", a-b);
console.log("The value of a*b is", a*b);
console.log("The value of a/b is", a/b);*/

//2.assingment operators--
var x=10;
var y=x;
//console.log(y);

//comparison operator--
var p=10;
var q=12;
/*console.log(p==q);
console.log(p>=q);
console.log(p<=q);
console.log(p<q);
console.log(p>q);*/


//Logical operators---

//1.AND opeartor-
/*console.log(true && true);
console.log(true && false);
console.log(false && false);*/

//2.OR operator-
/*console.log(true || true);
console.log(true || false);
console.log(false || false);*/

//3.NOT operator-
/*console.log(!false);
console.log(!true);*/



//FUNCTION-----

/*function sum(a,b)
{
    return a+b;
}
s=sum(12,12);
console.log(s);*/

//conditionals in javascript---
/*var age=10;
if(age<=10)
{
    console.log("kid");
}
else if(age>10 && age <=18)
{
    console.log("adult");
}
else
{
    console.log("young");
}*/
/*
break and loop statements-
var arr=[1,2,3,4,5,6];
for(var i=0;i<arr.length;i++)
{
    if(i == 2)
    {
      //break;//break the for statement and leave from there...
      continue;//cancel this iteration and continuie from next.
    }
    console.log(arr[i]);
}*/

//Array Methods--


//let myarr=["rimo","pramit",23,true,null];
//console.log(myarr.length);
//myarr.pop();//delete the last element of the array.
//myarr.push(34);//push the element at last
//myarr.shift();//remove the first element.
//var newlen=myarr.unshift("ram");//add element at first.
//console.log(newlen);//when we cosole unshift then it returns the new length of the array.
//myarr.sort();
//console.log(myarr);

/*var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());//tostring()-converts array to a string...
console.log(fruits.join("+"))//The join() method also joins all array elements into a string.*/

/*var surname=["ram ","sam"];
var title=["mondal","das"];
var concate=surname.concat(title);
console.log(concate);
//The concat() method creates a new array by merging */

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(1));//The splice() method adds new items to an array.*/

/*const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice( 1,3);
console.log(citrus);//The slice() method slices out a piece of an array into a new array.*/



//String methods in javascript---

//let mystring="Pramit is a good boy.";
// console.log(mystring.length);
// console.log(mystring.indexOf("good"));
// console.log(mystring.lastIndexOf("boy"));
//console.log(mystring.slice(0,6));(1-n-1)
/*d=mystring.replace("Pramit","rimo");
console.log(d);*/



//DATES IN JAVASCRIPT-----
let mydate=new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMonth());
// console.log(mydate.getMonth());
// console.log(mydate.getDate());

//DOM Manipulation--[document object model]
/*let elem=document.getElementById('click');//terget an element by its identifier
//console.log(elem);
let elemclass=document.getElementsByClassName("container")
//console.log(elemclass);
//elemclass[0].style.background="yellow";
elemclass[0].classList.add("bgprimary");
elemclass[0].classList.add("text")

//colsole.log(elemclass[0].innerHTML);
//console.log(elemclass[0].innerText);
tn=document.getElementsByTagName('div');
console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText="This is created para ";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This is created [2]para ";
tn[0].replaceChild(createdElement2,createdElement);
removeChild(element)--removes an element....

document.location()
document.title()
document.url()
document.scripts()
document.links()
document.images()
document.domain()




*/
//Selecting Using Query----

/*sel=document.querySelector('.container');//returns one element
sel2=document.querySelectorAll('.container');//returns all elements
console.log(sel);
console.log(sel2);*/