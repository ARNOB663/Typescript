{//Learning funtion
//Normal funtion

function add(num1:number = 20,num2:number = 10 ):number {
    return num1+num2;
}

add(2,4);
//Arrow Funtion
const addArrow  = (num1:number,num2:number):number => num1+num2;
//object --> funtion --> method

const poorUser = {
    name:"Aniruddha",
    balance:0,
    addBalance(balance:number):string{
         if(balance==0)
         {
            return `${this.name} is fokir his balance: ${this.balance}`; 
         }
         return `${this.name} has a balance of: ${this.balance + balance}`;
    }
}

console.log(poorUser.addBalance(0))

const arr:number[] = [1,4,10]

const newArray: number[] = arr.map((Element:number):number => Element*Element)

}