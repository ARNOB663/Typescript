{

    //spread operator
    //Rest operator 
    //desturing 



    //Spread operator 
    const bros1: string[] = ['abul','kabul','nabul']
    const bros2: string[] = ['tanmoy','Nahid','kuddus']

    bros1.push(...bros2)//spread operator

    const mentors1 ={ 
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }
    const mentors2 = {
        prisma:"Firoz",
        next:"Tanmoy",
        cloud:'Nahind'
    }
    const mentorList  = {
   ...mentors1,
   ...mentors2

    }

    console.log(mentorList)


//Rest operator 
const greetFriends = (...friends:string[]) =>{
   // console.log(`Hi ${frined1} ${frined2} ${frined3}`)
   friends.forEach((friends:string)=> console.log(`Hi ${friends}`))
}   
greetFriends("abul","kabul","babul","nabul");

}