 {
// //
// //union types 
// type FrontendDeveloper = 'fakibazDev' | 'juniorDev' //string litarale type 
// type FullStackDeveloper = 'FrontEndDev' | 'ExpartDev'

// type Dev = FrontendDeveloper | FullStackDeveloper

// const newDev:FrontendDeveloper = 'fakibazDev' 
// const  NewDev :FrontendDeveloper = 'juniorDev'

// type User = {
//  name:string;
//  email?:string;
//  gender: 'male' | "female";
//  bloodGroup: "0+" | "A+" | "AB+"
// }

// const user1 : User = {
//     name:"arnob",
//     gender: 'male',
//     bloodGroup:'0+',

// }

type FrontendDeveloper = {

    skills: string[];
    designation1:'Frontend Dev';

}

type BackendDeveloper = {

    skills: string[];
    designation2: 'Backend Dev'
}

type FullStackDeveloper =  FrontendDeveloper & BackendDeveloper ;
const fullStackDeveloper :FullStackDeveloper = {

    skills: ['HTML','CSS','JS','EXPRESS'],
    designation1: 'Frontend Dev',
    designation2: 'Backend Dev'
}





// //
 }