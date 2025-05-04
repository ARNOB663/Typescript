{//desturing 

 const user ={ 
  id:345,
  name:{
    firstName:'Aniruddha',
    middleName:'Dev',
    lastName:'Nath'
  },
  contactNo:'1812345678',
  address:"paris"

 }

 const {contactNo:phone  ,name: {middleName: midName}} = user;
//array destructuring 

const myFriends = ['chandler','joey','ross','rachel','monica']

const [a,b,bestFriend,...rest] = myFriends

console.log(bestFriend)
console.log(rest)

}