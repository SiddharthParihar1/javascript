//var c = 300
let a = 300           // global scope
if (true) {
    let a = 10        // block scope
    const b = 20
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }


function one() {
    const username = "SID"

    function two() {
        const website = "TraillX"

        console.log(username);

    }
   
    
    console.log(website);

    two()
}

// one()




//*******************************************************************************************/

if (true) {
    const username = "SIDD"
     if (true) {
        const website = "  Margdarshak"
    console.log(username + website); 
    }
    // console.log(website);
}
// console.log(username);



function addOne (num){
        return num + 1;
}
console.log(addOne(5));

const addTwo = function(num){
    return num +2;
}
console.log(addTwo(5));
