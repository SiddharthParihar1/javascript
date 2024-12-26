const user = {
     username : "Chips",
     price : "69rs",
      
     welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website `);
        console.log(this);
        
     }   
  
}

// user.welcomeMessage()
// user.username = "Kurkure"
// user.welcomeMessage()

// console.log(this);


function aa (){
    let username = "Zoro"
    console.log(this.username);
    
}
// aa()


const  user1 = () => {
    let username = "Zoro"
    console.log(this.username);
}
// aa()


const add = (num1 , num2) => (num1 + num2)  // implisit return

console.log(add(89 ,99));

//returning object

const obj = () => ({ username : "zoro"})
console.log(obj());
