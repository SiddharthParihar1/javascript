

function myName() {
    console.log("s")
    console.log("i")
    console.log("d") 
}

// myName()

// function addNumber(n1 , n2){
    // console.log(n1 + n2);
// }

// addNumber(2,9);


function addNumber(n1 , n2){
    return n1+n2;
}

const result = addNumber(12,43)

// console.log("Result :" ,result);
// console.log(addNumber());

function userLoginMessage (username){
//    if(username === undefined){
   if(!username){

    console.log("Please enter your username");
    return   
}
    return `${username} just logged in!`
   
}

// console.log(userLoginMessage("sid"));


function shoppingCart(...cart) {
    return cart;
}

// console.log(shoppingCart(200, 300,400));


const snacks ={
    name:"chips",
    price:"10rs"
}

function producePrice(product){
   console.log(`Price of one ${product.name} is ${product.price}`)
}
producePrice(snacks)


