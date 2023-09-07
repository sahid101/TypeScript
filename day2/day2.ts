//type assertion
//its required for compiler purpose
//prerequest- your var must be of any/object/unknown type
var a:any;
a = "sahid";
//1. angle bracket
//2. as syntax - in view file - .html file

var temp = (<number> a);
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
if(cnt<4){
    console.log("Cond is True.");
}

switch(cnt){
    case 1: console.log("In case 1");
        break;
    case 2: console.log("In case 2");
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
const PI = 3.14159;
console.log(PI);


//use defined function
//4. with para, with return type
//3. with para, without return type
//2. without para, with return type
//1. without para, without return type

// function add1(){
//     console.log("In add1 , 1 type.");
// }

// function add3(a:number, b:number){
//     console.log("In add3 , 3 type: "+a+b);
// }
// add3(12,12);

// function add2(): string{
//     return "adding";
// }
// let res = add2();
// // console.log(`
// // Addition2 function ${add2}
// // `);


// function add4(a:number,b:number):number{
//     return a+b;
// }
// console.log(`
// Addition2 function ${add4(12,12)}
// `);


//alis name of function
//anonymous function
let temp2 = function(){
    console.log("Yasas its anonymous functiono, alis name function");
}
// temp2();

let temp3 = function(a:number,b:number):number{
        return (a+b);
}
console.log(temp3(12,23));


///fat arrow function /// arrow function
//explicitely we have to call the fat arrow func by giving alis name
//in angular we use fat arrow rather than anonymous func

()=>{
    console.log("Fat Arrow is used. ");
}

(a:number,b:number):number=>{
    return (a+b);
}  


//homework anonymous 4type func and fat arrow 4type func