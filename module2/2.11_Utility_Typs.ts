{//utility types
//
//pick

type Person = {
    name:string;
    age: number;
email?:string
contactNo:string
}
type NameAge = Pick<Person,"name" | "age">


//Omit 
type ContactInfo =  Omit<Person,"age" | "name">

//Requird 
type PersonRequired = Required<Person>

//Partial - make everyting optional 
type PersonPartial = Partial<Person>
//Read only proparty

type PersonReadonly =Readonly<Person> 

// type Myobj = {
//     a: string,
//     b:string
// }

const EmptyObj: {} = {}

//EmptyObj.age=

// type Myobj = Record<string,string>

// const obj: Myobj = {
//     a:"aa",
//     b:"bb",
//     c:"cc"
    
// }

 

const person1 : Person ={
    name:"arnob",
    age: 200,
    contactNo:"017",
} 
person1.name = "Mr. yz"












}