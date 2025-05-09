{
 // Asynchronous TypeScript 

 //promise

 type Todo = {
    id: number;
    userId:number;
    title: string;
    completed:boolean;
 }
 const getTOdo =  async ():Promise<Todo> => {
    const res = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data =await res.json();

    return data
    console.log(data);
 }             
 const data1=getTOdo()

 type something = {something:string};

 //simulate
 const createPromise = ():Promise<something> =>{
  return new Promise<something>((ressolve,reject)=>{
    const data: something = {something: 'something'}
    if(data){
        ressolve(data)
    }
    else{
        reject('faild to load data')
    }
  })
 }
 //calling createpromise fuction
 const showData = async(): Promise<something> =>{
    const data: something = await createPromise();
    return data
   // console.log(data)
 }



 showData();
 //
}