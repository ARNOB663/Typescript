{
// oop Class

class Animal {
//    public name: string;
//    private species: string;
   // sound:string;

    //peramter proparies  must add public or private in the proparty 
    constructor(public name:string,private species:string,public sound:string)
    {
        // this.name = name;
        // this.species =species;
        // this.sound = sound;
    }
//method  .this does not not work in => funtion 
makeSound(){
    console.log(`the ${this.species} says ${this.sound} ${this.sound}`)
}

}

const dog = new Animal("samoyed","dog","dark");
const cat = new Animal("persian","cat","meaw")
dog.makeSound();
cat.makeSound();




















}