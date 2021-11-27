function sum(a, b){
    return a + b
}

console.log(sum(1, 41)); // 42

console.log(i);         //Undefined (але скріпт відпрацює дальше)
var i = 42              // Не можна звернутись до перемінної вище
console.log(i);         // того як призначенно через var

// console.log(num);       //Error (скріпт припине роботу)
// const num = 42          //до Const неможна звертатись раніше призначення
// console.log(num);

// console.log(num);       //Error (скріпт припине роботу)
// let num = 42            //до let неможна звертатись раніше призначення
// console.log(num);


// Function Expression & Function Declaration
console.log(square(25));    //Function Declaration

function square(num){       //Не важливо де функція оприділена
return num ** 2
}

// console.log(square2(25));    //Function Expression == Error Не можем звернутись раніше
const square2 = function(num){   //Function Expression
    return num ** 2             //
}
console.log(square2(25));    //Function Expression
