{
//Constrain in typeScript
   
    const  addcourseToStudent = <T extends {id:number;name:string;email:string} >( student : T ) =>{
        const course  = "Next Level Web Development"
         
        return {
          ...student,
          course
        }
        }
        const student3 = addcourseToStudent({
            id:444,
            name:"mr x",
            email:"@gmail.com",
              emni: "emni"

        })
        const student1 = addcourseToStudent< {
            id: number;
            name: string;
            email: string;
            devType: string;
        } >({
            id:222,
            name:'Mr X',
            email:"x@gmail.com",
            devType:"NLW"})
        const student2 = addcourseToStudent({
            id:222,
            name:'Mr Y',
            email:"x@gmail.com",
            devType:"NLW",
            hasWacth:"Apple Watch"})

 










//
}