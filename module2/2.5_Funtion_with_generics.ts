{
//Funtion with generics
const createArray = (param:string): string[] =>{
    return [param]
}
const createArrayWithGeneric = <T>(param: T ) : T[] =>{
    return [param]
}

type User1 = {
    id:number;name:string
}

const res1 = createArray('Bangladesh');
const  resGeneric = createArrayWithGeneric<string>('UK');
const resGenericObj =  createArrayWithGeneric<User>({id:222,name:"arnob"})
//

const createArrayWithGenericTuple = <T,Q>(param1: T,param2:Q ) : [T,Q] =>{
    return [param1,param2]
}

type User = {
    id:number;name:string
}

const res2 = createArrayWithGenericTuple<string, number>('Bangladesh',12);
const  resGeneric1 = createArrayWithGenericTuple<string,{name:string}>('UK',{name:"asia"});
//const resGenericObj1 =  createArrayWithGenericTuple<User>({id:222,name:"arnob"},)


const  addcourseToStudent = <T>( student : T ) =>{
const course  = "Next Level Web Development"
 
return {
  ...student,
  course
}
}
const student1 = addcourseToStudent({name:'Mr X',email:"x@gmail.com",devType:"NLW"})
const student2 = addcourseToStudent({name:'Mr Y',email:"x@gmail.com",devType:"NLW",hasWacth:"Apple Watch"})

//

}