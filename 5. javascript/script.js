

// ---------------------------------------------------------- basic js and variables

document.write("hello\n");

var a=10;
var b=20;
var c=a+b;

document.write(c);
console.log(c);

var naame;
naame = "parth";
document.write(naame);

var naame;
naame = "sky";
document.write(naame);

// ------------------------------------------------------------type conversion

var car; ["rr","bmw","honda"];
document.write(typeof(car));

var stra = "abc";
var bool = false;
var p;
var nul = null;

document.write(a, typeof(a));
document.write(stra, typeof(stra));
document.write(bool, typeof(bool));
document.write(p, typeof(p));
document.write(typeof(nul));

var nm = String(12);
console.log(nm, typeof(nm));


var str1 = Number("1234"); var str1 = parseInt("1234");
str1 = str1+2;
console.log(str1, typeof(str1));

// --------------------------------------------------------------operators
var add = 10;
var sub = 5;

document.write(a+b);
document.write(a-b);
document.write(a*b);
document.write(a/b);
document.write(a%b);
document.write(a++);
document.write(b--);

document.write(a+=b);
document.write(a-=b);
document.write(a*=b);
document.write(a/=b);
document.write(a%=b);
document.write(a++);
document.write(b--);


var string1 = "hel";
var string2 = "lo";
document.write(string1 +""+ string2);

var p = 10;
var q = 20;
var r = 30;
var s = 40;
var result = p+q+"hello"+r+s;
document.write(result);

var con = 30;
var pos = (con<40)? "young" : "old";
document.write(pos);

const num = 10;
const str = "10";

console.log(num == str); // true - The values are the same after type conversion
console.log(num === str); // false - The values are different types and not equal

var op1 = 10;
document.write(op1==8);
document.write(op1===8);
document.write(op1!=8);
document.write(op1!==8);
document.write(op1>8);
document.write(op1<8);
document.write(op1>=8);
document.write(op1<=8);

var aq =5;
var bq = 10;
document.write(aq&bq);
document.write(aq|bq);
document.write(aq&bq);
document.write(~aq);
document.write(aq^bq);

// --------------------------------------------------------------control statements

// var c = 10;
// if (c<15) {
//     document.write("10 smaller");
//     if (c%2==0) {
//         document.write("10 also even");
//     }
//     else{
//         document.write("10 is odd");
//     }
// } 
// else if(c<11){
//     document.write("10 smaller");
// }
// else {
//     document.write("15 bigger")
// }

// var month = 1;
// switch (month) {
//     case 1:
//         document.write("january")
//         break;
//     case 2:
//         document.write("february");
//         break;
//     case 3:
//         document.write("march")
//         break;
//     case 4:
//         document.write("april");
//         break;
//     default:
//         document.write("no month");
//         break;
// }

// -------------------------------------------------------------loops

// for (var a = 0; a <= 10; a++) {
//     document.write(10*a);
// }

// var x = 1;
// while (x<=10) {
//     document.write(x);
//     x+=2;
// }

// var x = 10;
// do {
//     document.write(x+"one time execute");
//     x--;
// } while (x>5);

// ---------------------------------------------------------function

// function sum(x,y) {
//     // var x = 10, y = 5;
//     var total = x+y;
//     return(total);
// }

// var output = sum(10, 5);
// document.write(output);

// function a() {
//     var1 = 20;
//     var x = 10;
//     document.write(x);
// }
// a();
// document.write(var1);

// document.write("hi \"welcome\" here");

// var str = "hello world";
// document.write(str.length());
// document.write(str.includes("world"));
// document.write(str.replace("hello", "hi"));


// ----------------------------------------------------------string
// var car = ["honda", "kia", "bmw"];
// car.push("addone");
// car.pop();
// for (var i = 0; i< car.length; i++) {
//     document.write(car[i]);     
// }


// var bike = {
//     bike_name : "honda",
//     bike_model : "sp",
//     price : 100,
//     alldetails : function() {
//         document.write("it is honda");
//     }
// }
// document.write(bike.bike_name);
// bike.alldetails();



// function cars(car_factory, car_model, price){
//     this.car_factory = car_factory;
//     this.car_model = car_model;
//     this.price = price;
//     this.alldetails = function()
//     {
//         document.write("details of bikes");
//     }
// }

// var c1 = new cars("kia", "seltos", 100);
// c1.alldetails();
// // delete car.car_model;
// document.write(c1.car_model);

// document.write(Math.PI);

// -------------------------------------------------------Object Literals


// var rect = {
//     length : 10,
//     width : 20,
//     getarea : function() {
//         return this.length * this.width;
//     },
//     getparameter : function() {
//         return 2*this.length + 2*this.width;
//     }
// };
// document.write(rect.getarea());
// document.write("<br>");
// document.write(rect.getparameter());


// function some() {
//     document.write("hello");
// }
// setInterval("some()", 2000);

// document.write(Date());

// ------------------------------------------------------Constructors


// var rect2 = new Object();
// rect2.length = 5;
// rect2.width = 10;
// rect2.getarea = function(){
//     return this.length * this.width;
// }
// rect2.getperi = function(){
//     return 2*this.length + 2*this.width;
// }
// document.write(rect2.width);


// function xyz(name,sub,add) 
// {
//     this.name = name;
//     this.add = add;
//     this.sub = sub;
// }
// xyz.prototype.grade = "A";
// xyz.prototype.getName = function(){
//     return this.name;
// }
// var x1 = new xyz("parth","js","rajkot");
// console.log(x1);

// ----------------------------------------------------------prototypel inheritance

// const Employee = {
//     Post: function(){
//         return "A software developer";
//     },
//     changeName: function(name){
//         this.name = name;
//     }
// };

// var e1 = Object.create(Employee, {
//     name : {value: "parth", writable: true},
//     role : {value: "programmer"}
// })
// e1.changeName("ram");
// console.log(e1);

// function emp(name, id, salary){
//     this.name = name;
//     this.id = id;
//     this.salary = salary;
// }

// emp.prototype.post = function(){
//     return(this.name)
// }

// var parth = new emp("parth", 1234, 10);
// console.log(parth);

// function programer(name,id,salary,lang){
//     emp.call(this,name, id , salary);
//     this.lang = lang;
// }

// programer.prototype = Object.create(emp.prototype);
// programer.prototype.constructor = programer;
// var parth = new programer("parth", 2020,120,"js");
// console.log(parth);

// -------------------------------------------------------class and inheritance

// class person {
//     constructor(name,age,roll) {
//         this.name = name;
//         this.age = age;
//         this.roll = roll;
//     }
//     org(){
//         return(this.name);
//     }
//     dob(){
//         return((2020-this.age));
//     }
//     static add(a,b){
//         return a+b;
//     }
// }

// var parth = new person("parthu", 21, 45);
// console.log(parth);
// console.log(person.add(45,10));


// class student extends person{
//     constructor(name, age,roll, lang, section){
//         super(name, age, roll);
//         this.lang = lang;
//         this.section = section;
//     }
// }
// var parth = new student("parth", 35, 2, "js", "a");
// console.log(parth);

// ----------------------------------------------------------------- dom manipulation

// alert("hello");

// var a = parseInt(prompt("enter value of x:"));
// var b = parseInt(prompt("enter value of y"));
// document.write(a+b);
// console.log(a+b);

// confirm("sure?");
// console.log(window.document);

// function button() {
//     alert("you clicked it");
//     document.getElementById("head").innerHTML = "text changed";
// }

// -----------------------------------------------Taking Input From User In JavaScript

// function Submit() {
//     var a = document.getElementById("name").value;
//     var b = document.getElementById("password").value;

//     // var c = document.getElementsByClassName
//     // var d = document.getElementsByTagName
//     if (b==123) {
//         alert("success");
//     }
//     else{
//         alert("fail");
//     }
//     alert("name is "+a+"password is"+b);
// }

// function press() {
//     var x = document.getElementsByClassName("f1");
//     for (var i = 0; i < x.length; i++) {
//         x[i].style.backgroundColor = "blue";
//     }
//     x[0].style.fontStyle = "italic";
//     x[1].style.color = "blue";
//     x[2].style.fontWeight = "Bolder";
// }


// --------------------------------------------calc

// function size() {
//     document.getElementById("abc").style.color = "blue";
// }

// function color() {
//     document.getElementById("abc").style.color = "black";
// }

// ------------------------------------------------------callback function

// function person(friend, person2){
//     setTimeout(() => {
//         console.log("name is" + friend);
//     person2();
//     }, 3000);
// }
// function person2(){
//     console.log("2");
    
// }
// person("parth", person2);
// // person2();


// -------------------------------------------------------------------promises

// var prom = new Promise(function(resolve, reject){
//     var drive = false;
//     if(drive)
//     {
//         resolve("yes");
//     }
//     else{
//         reject("no");
//     }
// });

// prom.then(function(resolve){
//     console.log(resolve)
// }).catch(function(reject){
//     console.log(reject)
// )};

// var arrow = (a,b) => a+b;

// -------------------------------------------------------------async await

function makeorder(tea) {
    return new Promise((resolve, reject) =>{
        console.log(tea);
        if (tea == "black tea") {
            resolve("ready")
        }
        else{
            reject("sorry");
        }
    })
}
function processorder(order) {
    return Promise((resolve, reject)=>{
        console.log("process");
        resolve(order);
    })
}

// makeorder("black tea").then(order=>{
//     console.log("received");
//     return processorder(order);
// }).then(processorder=>{
//     console.log(processorder);
// }).catch(error =>{
//     console.log(error);
// })

async function f1() {
    try {
        var order = await makeorder("black tea")
        console.log("received");
        var processorder = await processorder(order)
        console.log(processorder);
        
    } catch (error) {
        console.log(error);
    }
}
f1();