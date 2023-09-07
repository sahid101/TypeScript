//type assertion
//its required for compiler purpose
//prerequest- your var must be of any/object/unknown type
var a;
a = "sahid";
//1. angle bracket
//2. as syntax - in view file - .html file
var temp = a;
console.log(temp);
// var temp1 = (a as string);
// console.log(temp1.charAt(3));
//operator
//arithmetic: +,-,*,/,%
//logical: &&,||
//bitwise: ^,&,>>,<<,!,|,tilde,
//assignment: =,+=,-=,/=,%=
//relation: >,<,>=,<=,!=,==,===
// ternary: cond ? exp1: exp2 
//unary: ++,--,post/pre,++a,a--
//control statement
//if,if else, nested if else,switch,break,continue
var cnt = 2;
if (cnt < 4) {
    console.log("Cond is True.");
}
switch (cnt) {
    case 1:
        console.log("In case 1");
        break;
    case 2:
        console.log("In case 2");
        break;
    default: console.log("Default case ");
}
//loop
//var count = 5;
// while(count > 0){
//     console.log(count);
//     count--;
// }
// do{
//     console.log("Count: "+count);
//     count--;
// }while(count > 0)
//forloop
// for(let i = 0; i < 4; i++){
//     console.log("i: "+i);
// }
// console.log(i);
// for(var i = 0; i < 4; i++){
//     console.log("i: "+i);
// }
// console.log(i);
//Constant
var PI = 3.14159;
console.log(PI);
//use defined fumction
//4. with para, with return type
//3. with para, without return type
//2. without para, with return type
//1. without para, without return type
function add1() {
    console.log("In add1 , 1 type.");
}
function add3(a, b) {
    console.log("In add3 , 3 type: " + a + b);
}
add3(12, 12);
function add2() {
    return "adding";
}
var res = add2;
// console.log(`
// Addition2 function ${add2}
// `);
function add4(a, b) {
    return a + b;
}
console.log("\nAddition2 function ".concat(add4(12, 12), "\n"));
//alis name of function
//anonymous function
var temp2 = function () {
    console.log("Yasas its anonymous functiono, alis name function");
};
// temp2();
var temp3 = function (a, b) {
    return (a + b);
};
console.log(temp3(12, 23));
