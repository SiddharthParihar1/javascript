// immediate invoke function expressions


(function chai (){                 // named iife
    console.log("data connected");
    
})(); // USE SEMICOLLONS TO END THE EXPRESSION 
 
( (name)=>{                      // unnamed iife
    console.log(`data in ${name} function`);
})("arrow");


