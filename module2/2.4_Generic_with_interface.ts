{
// Generic with interface 
interface Developer<T,X = null> {
  name: string;
  computer:{brand:string;
    model:string;
    releaseYear: number;
  }
  smartWatch: T 
   bike? : X
}


 type EmilabWatch = {
    brand:string;
        display:string;
        model: string;
 };

const poorDev : Developer<EmilabWatch> = {
   name : "Arnob",
   computer: {
    brand :"Lanovo",
    model :"X1 YOGA",
    releaseYear: 2016
   },

   smartWatch : {
    brand : 'Emilab',
    model:'Kw66',
    display: "OLED",
   }
}

interface AppleWatch {
    brand:string;model:string;heartTrack:boolean;sleepTrack:boolean
}
interface DucatiBike {
 model: string;
 engineCapacity:string;
}


const richDev : Developer<AppleWatch, DucatiBike> = {
    name : "Arnob",
    computer: {
     brand :"HP",
     model :"X1 YOGA",
     releaseYear: 2016
    },
 
    smartWatch : {
     brand : 'APPLE Watch',
     model:'something',
     heartTrack : true,
     sleepTrack: true,
    },
    bike:{
        model: 'DUCARTY',
        engineCapacity:'100cc'
    }
 
 }












}