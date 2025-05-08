{
// generic type

type GenericArray = Array<number>
type GenericArrayBool = Array<boolean>

type GenericArrayParams<T> = Array<T>

//const rollNumbers : number[] = [3,6,8]
//const rollNumbers : Array<number> = [3,6,8]
//const rollNumbers : GenericArray = [3,6,8]
const rollNumbers : GenericArrayParams<number> = [3,6,8]

//const mentors: string[] = ["Mr. X","Mr.Y","Mr. Z"]

//const mentors: Array<string> = ["Mr. X","Mr.Y","Mr. Z"]


const mentors: GenericArrayParams<string> = ["Mr. X","Mr.Y","Mr. Z"]

//const boolArray: boolean[] = [true,false,true];
//const boolArray: Array<boolean> = [true,false,true];


const user: GenericArrayParams<{name:string,age:number}> = [{
  name: "Arnob",
  age: 50,
},{
   name:"Daddy",
   age:60
}]
 interface User  {
  name: string;
  age:number
 }


const boolArray: GenericArrayBool = [true,false,true];

const add = (x:number,y:number)=> x + y;

add(30,20)
type GenericTuple<X,Y> = [X,Y]

//generic tuple 
const manush:GenericTuple<string,string> = ['Mr. X','Mr. Y']

const UserWithID: GenericTuple<number,{name:string,email:string}> = [1234,{name:'Arnob',email:"a@gmail.com"}]








//
}