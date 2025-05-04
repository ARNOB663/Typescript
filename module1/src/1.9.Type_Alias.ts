{
//Type Alies 

type Student  = {
    name: string;
    age:number;
    contactNo?:string //Optional property 
    gender:string;
   address: string
} 

 
const student1: Student = {
   name: 'Mezba',
   age: 50,
   gender:'Male',
   contactNo:'018999999',
   address: 'ctg',
};

const student2: Student ={

    name:'Arnob',
    age: 40,
    gender:'Male',
    address: 'ctg'
}


const student3: Student = {
    name:'Arnob',
    age: 40,
    gender:'Male',
    address: 'ctg'
}

type UserName = string
type IsAdmin = boolean 
const userName: UserName = 'Persian'
const isAdmin = true
// Type alias the 
type Add = (num1:number,num2: number) => number

const add : Add = (num1,num2) => num1 + num2;

}