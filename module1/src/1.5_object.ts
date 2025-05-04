//Reference Type --> Object
const user:  {
    readonly comapany1: string;
    company:'coogle'; // type --> a value acting as a type --> literal types
  firstName: string;
  middleName?:string | undefined; // optional type
  lastName:string;
  isMarried: boolean;
}
=
{
   firstName:"Aniruddha",
   middleName:"Dev",
   lastName:"Nath",
   isMarried: false,
   company:"coogle",
   comapany1: "",
}
//Array of object
const player: {
    name: string;
    fatherName: string;
}[] = [{
    name: 'Ronaldo',
    fatherName: 'messi',
}, {
    name: "sadrib",
    fatherName: 'Aniruddha',
}]

user.comapany1
