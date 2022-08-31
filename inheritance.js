// que 1
let parent={
name:"pooja",
age:25
}
let child={
hobby:"reading",
place:"pune",

}
child._proto_=parent;
console.log(child._proto_.name);


// que 2

const personClass = class{
    constructor(fname, lname, byear){
        this.fname =fname;
        this.lname=lname;
        this.byear=byear;
    }
    calculateAge(){
        console.log(` hello my name is ${this.fname} ${this.lname} and now I am ${2022 - this.byear}  years old`)
    }
}

const puja =new personClass("puja","thorat","1997");
console.log(puja);
puja.calculateAge();

//que 3 additi
const array = [7,4,3,2,5,7];
const a = 0;
const sum = array.reduce(
  (lastValue, presentValue) => lastValue + presentValue);

console.log(sum);

//que 4
const personPrototype ={
    calculateage(){
        console.log(`hello this is ${this.fname} ${this.lname} and I am  ${2022 -thisb.year} years old` )
    },
    initialise(fname,lname,byear){
        this.fname = fname;
        this.lname = lname;
        this.byear =byear;
    }
}


const pooja = Object.create(personPrototype);
console.log(pooja);
pooja.fName = "sachija";
pooja.lName = "thorat";
pooja.bYear = 1997;
console.log(pooja);
sachija.initialise("sachija","thorat",1997);sachija.calculateAge();


