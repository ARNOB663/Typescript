{
//Mapped Types
const arrOfNumbers : number[] =  [1,4,5]

//const arrOfStrings: string[] = ['1','4','5','6']

const arrOfStrings: string[] = arrOfNumbers.map(number=> (2*number).toString())
console.log(...arrOfStrings);

type AreaNumber= {
   height: number;
   width: number;
};

type Height = AreaNumber['height'] //look up type

// type AreaString = {
//     height: string,
//     width: string,
// }
//keyof AreaNumber
// T=> {height:string;width:number}
//key => "height"
type AreaString<T> =  {
 [key in keyof T] : T[key];
}

const area1: AreaString<{height:string;width:number}>= {
    height: "100",
    width: 50,
}






}