{
  //ternary operator || optional chaining || nullish coaleacing opearator 

  const age: number = 1;
  if(age >= 18)
  {
    console.log("adult")
  }
  else{
    console.log('not adult')
  }

const isAdult = age  >=18 ? "adult" : "not adult"
console.log({isAdult})


//nullish coalesing operator
//null / undefind ---> decision making 
const isAuthenticated = ''

const result1 = isAuthenticated ?? 'Guest' //if value of isAuthenticated is null output will be Guest
const result2 = isAuthenticated ? isAuthenticated : 'Guest'

// console.log({result1})
// console.log({result2})

console.log({result1},{result2})

//optinal chaining 
type User = {
    name:string;
    address: {
        city:string;
        road:string;
        presentadress: string;
        permanentAddress?: string;

    }
}

const user: User = {
name: 'Spiderman',
address:{
  city:'New York',
  road:"Street in Forest Hills, Queens",
  presentadress:"space"
}
}
//optinal chaining 
const permanentAddress =  user?.address?.permanentAddress ?? "NO Permanent Address"
console.log({permanentAddress})

//

}