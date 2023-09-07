export class Myclass{
    id: number;
    fname: string;
    lname: string;
 constructor(id:number, f:string, l:string){
        this.id = id;
        this.fname = f;
        this.lname = l;
    }

    public display(){
        console.log(`
            ID    :: ${this.id}
            FName :: ${this.fname}
            LName :: ${this.lname} 
        `)
    }
     const = 3.14;
}
