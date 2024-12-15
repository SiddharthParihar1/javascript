
// singleton
// Object.create


// object literals
const mySym = Symbol("key1")

const user = {
    name:"Sid",
    age:18,
   [mySym]:"key1",
    location:"Nagpur",
    email:"sangam@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Tuesday", "wednseday"]
}

// console.log(user.email);
// console.log(user.email);
// console.log(user['email']);
// console.log( user[mySym]);
// console.log(typeof mySym);

user.email ="sid@google.com"
// Object.freeze(user);
user.email ="sid@gpt.com"
// console.log(user)

user.greetings = function(){
    console.log(`HELLO JS USER ${this.name}`);
}

// console.log(user.greetings());


//***********************objects-02***********/

// const user2 = new Object()
const user2 = {}

user2.id = "123abc"
user2.name = "Sammy"
user2.isLoggedIn = false

// console.log(user2);

const regularUser = {
    fullName :{
        firstName:"Siddharth",
        lastName:" Parihar"
    },
}

// console.log(regularUser.fullName.firstName +regularUser.fullName.lastName);

const obj1 = {1:"a" , 2:'b'}
const obj2 = {3:"a" , 4:'b'}

// const obj3 = {obj1 , obj2}

// const obj3  = Object.assign({}, obj1,obj2);

const obj3 ={...obj1 , ...obj2} 

console.log(obj3);














