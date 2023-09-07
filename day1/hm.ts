function add1(){
    console.log("In add1 , 1 type.");
}

function add2(): string{
    return "adding";
}
let res1 = add2();
console.log(`
Addition2 function ${add2}
`);

function add3(a:number, b:number){
    console.log("In add3 , 3 type: "+a+b);
}
add3(12,12);


function add4(a:number,b:number):number{
    return a+b;
}
console.log(`
Addition2 function ${add4(12,12)}
`);



()=>{
    console.log("Fat Arrow no ret, no para");
}

():number=>{
    console.log("Fat Arrow with only return");
    return 3;
}

(a:number,b:string)=>{
    console.log("Fat Arrow with only para"); 
}

(a:number,b:number):number=>{
    console.log("Fat Arrow with both para and return.");
    return (a+b);
} 
