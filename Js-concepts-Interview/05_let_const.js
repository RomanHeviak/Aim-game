//Let
let a = 'Varieble a 1'
let b = 'Variable b 2'

{                       //ES6 Scope
a = 'New Variable A 3'        //звертатись можна за межі scope
let b = 'Local Variable B 4'  //всі створенні перемінні в scope
console.log('Scope A', a);  //доступні лиш в scope
console.log('Scope B', b);
}
console.log('A:', a);
console.log('B:', b);

//Const
const PORT = 8080           //Константи не можливо перепризначати
const array = ['JavaScript', 'is', 'Awesome']   //Масиви міняти можна
array.push("!")
array[0] = 'JS'
console.log(array);

const obj = {}                  // Поля Обєктів міняти можна
obj.name = 'Kvasnutsia'
obj.age = 31    
obj.liveInLviv = 31    
console.log(obj);
delete obj.liveInLviv
console.log(obj);
