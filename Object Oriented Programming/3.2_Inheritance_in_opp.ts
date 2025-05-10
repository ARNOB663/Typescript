{
// oop inharitance
class Parernt{

    name:string;
    age:number;
    address: string;

    constructor(name:string,age:number,address:string)
    {
        this.name = name;
        this.age= age;
        this.name;
    }
    getSleep(numberOfHours:number){

   console.log(`${this.name} will sleep for ${numberOfHours}`)

    }
}




class Student extends Parernt {
   //NO need
    constructor(name:string,age:number,address:string)
    {
       super(name,age,address)// calling constructor of the perent class
    }
//     getSleep(numberOfHours:number){

//    console.log(`${this.name} will sleep for ${numberOfHours}`)

//     }
}
const student1 =new Student("Mr Studnet",20,"BD")
student1.getSleep(5)

class Teacher  extends Parernt{
    desigantion: string

    constructor(name:string,age:number,address:string,desigantion: string)
    {
        super(name,age,address)
        this.desigantion = desigantion
    }
    
    takeClass(numberOfClass:number){
        console.log(`${this.name} will take  ${numberOfClass} classes`)
        
    }
}
const teacher1 =new Teacher("Mr Teacher",20,"BD","HeadTeacher")
teacher1.takeClass(5);
//teacher1.








}