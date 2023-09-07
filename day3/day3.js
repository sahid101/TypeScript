//optional parameter function
//optional should be last , if not all following para must be optional
console.log("daaaayyyyyyy 3");
function addOneTwo(a, b) {
    console.log("a= " + a);
    console.log("b= " + b);
    console.log("Addition = " + (a + b));
}
// addOneTwo(19);
//default para function
function addOne1(a, b) {
    if (b === void 0) { b = 12; }
    console.log("In addOne1:    ---------");
    console.log("a= " + a);
    console.log("b= " + b);
    console.log("Addition = " + (a + b));
}
// addOne1(12);
function addOne2(a, b) {
    if (b === void 0) { b = 12; }
    console.log("a= " + a);
    console.log("b= " + b);
    console.log("Addition = " + (a + b));
}
// addOne2();
//================================================================
//ARRAYYYYY
//dynamically growable and shrinkable
//can store heterogenous and homogenous data type
var a = [1, 2, 3, 1, 2, 1, 2, 2];
var a2 = [];
var a3 = [2.3, 1.23, "sahid", true];
var a4 = [12, "sads", true];
// for(let i = 0; i < a.length; i++){
//     console.log("Value of "+i+" index: "+a[i]);
// }
// console.log(a);
// console.log(a.join("-"));
// console.log(a.join);
// console.log(a.join());
// a.forEach(element => {
//     console.log("Value: "+element);
// });
// a.forEach((value,i,arr)=>{
//     arr[i] = 0;
//     console.log("Data is "+value+" index "+i+" array is "+arr); 
// });
//rest para function & spread operator[...]
//spread operator must be last parameter in a rest function
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item);
}
function displayStringNum(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(str);
    console.log(item);
}
// display(12,112,2,21,3);
// displayStringNum("Shahid",21,323,34);
// // push and pop
// //LIFO - last in first out
// let b: number[]=[];
// b.push(1);
// b.push(2);
// b.push(3);
// console.log(b);
// b.pop();
// console.log(b);
//SPLICE method
//always working in array
//splice(start,deletcount,adding element)
var c = [10, 20, 30, 40, 50, 60, 70];
c.splice(0, 0, 1, 2, 3, 4, 5);
console.log(c);
c.splice(2, 1, 21, 22, 23);
console.log(c);
c.splice(1, 3, 100, 100);
console.log(c);
//MAP method
//it perform by element by element
var d = [1, 2, 3, 4, 5, 6, 0];
var sqrArr = d.map(function (value) {
    return (value * value);
});
console.log(sqrArr);
//slice method
//it copy a section  of data from an array
var str = ["aas", "asds", "erger", "ervre", "eren", "naruto"];
var resAnime = str.slice(4, str.length);
console.log(resAnime);
