{

//nullable type / unknown types

const seatchName = (value: string | null) =>{
if(value){
    console.log('searching');
}
else{
    console.log("there is noting gto search");
}

}

seatchName("Daddy")

seatchName(null);

// unknown Typeof 


const getSpeedInMeterPerSecond=(value:unknown)=>{
    if(typeof value === 'number'){
    const convertedSpeed = (value*1000)/3600;
    console.log(`the speed is ${convertedSpeed} ms^-1`)
    }
 else if(typeof value === 'string')
  {
    const [res,unit] = value.split(' ')
    const convertedSpeed = ( parseFloat(res) * 1000)/3600;
    console.log(convertedSpeed)
  }
  else{
    console.log("Wrong input")
  }
}
getSpeedInMeterPerSecond(12)
getSpeedInMeterPerSecond("1000 Kmh^-1")

//never type
const throwError=(msg:string): never =>{ //not going to return any type
    throw new Error(msg);
} 

throwError("ki obstha")

//
}