{
//
//interface
type User1 =  {
    name: string;
    age: number;   
};

interface User2 {
    name: string,
    age: number
};

 interface UserWithRole2 extends  User2 {
    role: string
 }

 type UserWithRole1 = User1 & {role : string}

 
 const user1:  UserWithRole1 ={
    name:'Arnob',
    age:100,
    role: "",
};

const user2:  UserWithRole2={
    name:'Arnob',
    age:100,
    role:"Tester"
};
// type rollNumber = number {

// }

// js--> Object ,array-> object funtion -> object
type Roll = number[];

interface Roll2 {
   [index: number] : number //arry decalre using interface

}
const rollNumbers1: Roll = [1, 2, 3, 4]; 

interface Add {
    (num1:number,num2:number) : number // retun type
}

//type Add =  (num1:number,num2:number) =>number
const add:Add = (num1,num2) => num1+num2; 

//
}