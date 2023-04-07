import express, {Request,Response} from "express";

//const app =  express();


const app = express()
app.use(express.json())

app.route('/api/books')
.get((req:Request,res:Response)=>{
   res.send("you sent a get request")
})
.post((req:Request,res:Response)=>{
res.send('you sent a post request')
})
.put((req:Request,res:Response)=>{
   res.send("you sent a put request")
})
.delete((req:Request,res:Response)=>{
  res.send('you sent a delete request')
})

app.get('/api/data/getbooks',(req:Request,res:Response)=>{
   return res.redirect("http://example.com");
   // res.status(200).send("hello world")
})
app.post('/api/data',(req,res)=>{
    console.log(req.body);
    
    res.sendStatus(200);
})


app.listen(3000,()=>{
    console.log('app listening on http://localhost:3000')
})

const pointer = {x:1,y:1};
const pointer1 = pointer;
pointer1.y= 100;
pointer1.x=50;
pointer.x =10
console.log(pointer1.x);

let id:number[] = [1,5,2,3,4,56,78,0]
id.push(4)
id.forEach(id=>{
    console.log("testing ->" + id)
})
const concatId = [1,2,3,4]
//id.findIndex(1:value,0)
const concatedArray = id.concat(concatId)
const returnedValue =  id.pop();
console.log(concatedArray,returnedValue)
console.log(id)


let object:object[] = [
    {
    name: "israelblaer",
    id: 12499999,
    skill: "Backend Developer"
},
{
    name: "israelblaer",
    id: 12499999,
    skill: "Backend Developer"
}
]
let person = ['Danny', 1, true];
person.push(20)
person.push(true)
console.log(person)
let person1: {
    name: string;
    location: string;
    isProgrammer: boolean;
  };
  person1 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };
  person1 = {
    name: 'John',
    location: 'US',
    isProgrammer:true
  }; 
  console.log(person1.location);
let any:any[] =[{name:'mark',dimNumber:8,isVerfied:true}]
console.log(any[0])
console.log(object)

interface Speech  {
    sayHi(name:string):string;
    saySomething:(name:string)=>string
}

const SayStuff : Speech ={
    
    sayHi:function (name:string) {return "my name is " + name },
    saySomething: (name:string)=>{return "bye " + name;}
}

interface deleteData  {
    searchandDelte (id:number,msg:string):string,
    deleteByUserName:(userName:string,msg:string)=>string;
}

let userMethods : deleteData = {

    searchandDelte : function(id:number,msg:string){  return `${msg}`},
    deleteByUserName : (userName:string,msg:string)=>{return userName}

}
const declareArrowFunction = (diam :number):string=>{
  return `The return value is ${diam * Math.PI}`;
}
function implementingNormalFunction(name:string):string{
 return name;
}

const makingFunctionWithOptionalVariables = (value:number, a :number, c?: string|number,)=>{
    console.log(c)
    return a+value;
}

makingFunctionWithOptionalVariables(8,12,"i dont want to input, guess wat i can");
type stringORnumber = string|number;

const data:stringORnumber = 8;

const dataarray:stringORnumber[]= [1,'mark']

type personObject = {
 accountBalance : stringORnumber,
 name: string,
 isVerified: boolean
}
const person2 :personObject = {
 accountBalance : 100,
 name : 'mark',
 isVerified : false
};



console.log(SayStuff.sayHi('izzy'))
console.log(SayStuff.saySomething('izzy'))


class Person {
   readonly name:string
   private age: number
   protected height:string
   private zodiacSign : string

    constructor(a:string, age: number, b:string,zodiacSign:string){
        this.name = a;
        this.age= age;
        this.height = b;
        this.zodiacSign = zodiacSign;
    }

     doSomething(){
        console.log('hi anon')
    }
    
}
const person3 = new  Person('mark miller',17,'6,5','the cross')
person3.doSomething()
//another way of creating a class



interface pperson {
    name : string,
    age:number
}

const getPersonInfo=(person:pperson)=>{
  console.log(`my name is ${person.name} and i am ${person.age} years old`)
}
const person4 = {
    name: "mark",
    age : 20,
    isV:true
}
getPersonInfo(person4)
getPersonInfo({
    name:'thor',
     age : 67
})
//const human=  new Human('izzy',10,true,'amune@gmail.com')

interface Person5<T> {
    name: string;
    age: number;
    documents: T;
  }

  const PER : Person5<String[]> = {
    name : 'miller',
    age : 17,
    documents : ['flat']
  }

  enum ResourceType{
    
  }