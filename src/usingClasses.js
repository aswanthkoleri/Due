class Person {
    constructor(name="Anonymous",age=0){
        this.name= name;
        this.age=age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}`;
    }
    getDescription(){
        return `Hi. I am ${this.name} and I am ${this.age} years old.`;
    }
}
class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let desc = super.getDescription();
        if(this.hasMajor()){
            desc+=`My Major is ${this.major}`;
        }
        return desc;
    }
}

const me = new Student("Aswanth",20,"IT");
console.log(me.getDescription());