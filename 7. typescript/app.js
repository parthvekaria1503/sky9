"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------variable
var num = 10;
var str = "abc";
var isTrue = false;
var anny = "10abc";
// ---------------------------------------------tuple
var role = ["a", "b", 1];
role.push(true);
role[1] = "user";
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("run");
    };
    return App;
}());
var x = new App();
x.test();
var a = 10;
console.warn(a);
var data = ["a", "b", "c", 10, true];
// let data:string[]= ["a","b","c"];
data.push("e");
console.warn(data);
// interface usertype{
//     name:string,
//     age:number,
//     address:any,
//     getname:()=> string
// }
// let users:any = {
//     name : 'parth',
//     age:50,
//     address: "usa"
// getname:function(){
//     return "a"'
// }
// }
// users.name = 100;
// console.warn(users);
// let data:string | number = "abc";
// data = 20;
// console.warn(data);
// -----------------------------------------------------------function
// function sum(a):number {
//     return a;
// }
// console.warn(100);
// ----------------------------------------------------------class
// class App {
//     name:string = "abc";
//     constructor(name:string) {
//         this.name = name;
//     }
//     getName():string{
//         return this.name
//     }
// }
// let l1 = new App("peter");
// console.warn(l1.getName());
// ----------------------------------------------inheriet
// class Parent {
//     name:string;
//     setname(name):void {
//         this.name = name;
//     }
// }
// class Child extends Parent{
//     getname():string{
//         return this.name
//     }
// }
// let c1 = new Child();
// c1.setname("parth")
// console.log(c1.getname());
// -----------------------------------------------------namespace
// /// <reference path="utils.ts" />
// namespace Usersutils{
//     export class Users extends Parent{
//         getName(){
//             return this.name;
//         }
//     }
// }
// let u1 = new Usersutils.Users();
// u1.setName("parth")
// console.warn(u1.getName());
// ------------------------------------------------------module
// import slogin from "./student.ts";
// let teacher = new slogin();
// console.warn(teacher.data);
// ------------------------------------------------------------generics    
// function user<T>(data:T):T {
//     return data
// }
// console.warn(user({name:"parth", age: 20}));
// ---------------------------------------------------------enum
// enum Days{
//     mon,tue,wed
// }
// function whichday(day:Days){
//     return day
// }
// console.warn(whichday(Days.mon));
// ---------------------------------------------------symbol
// let demof1 = Symbol("d1");
// let data = {
//     [demof1]: "some data"
// }
// console.warn(data[demof1]);
// class demo{
//     [demof1](){
//         return "some data2"
//     }
// }
// let d1 = new demo();
// console.warn(d1[demof1]());
// ------------------------------------------------ literals
// function combine(
// a: number | string,
// b: number | string,
// type:"as-num" | "as-str") {
//     if (type === "as-num") {
//         return(+a)+(+b)
//     } else {
//         return a.toString() + b.toString();
//     }
// }
// console.warn(combine(10,20,"as-num"));
// console.warn(combine("a","b","as-str"));
// -------------------------------------------------------alies
// type varType = string | number | undefined;
// let a : varType = 10;
// let b : varType = 10;
// let c : varType = 10;
// -------------------------------------------------------
// void
// unknown
// never
// ------------------------------------------------------
// run multiple file together: 
// tsc  -init
// tsc --watch 
// ------------------------------------------ constructor
// class user{
//     constructor(public name, public age){}
//     displayval(){
//         console.log(this.name, this.age);
//     }
// }
// const u1 = new user("abc",20);
// u1.displayval();
