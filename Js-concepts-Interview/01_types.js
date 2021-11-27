//типи даних
//null, undefined, boolean, string, number, symbol, object

console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'Javascript')
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('JS'))
console.log(typeof null)
console.log(typeof function(){});
console.log(typeof NaN);

// Приведення типів
// '', 0 , null, undefined, NaN, false  FALSE always
let language = 'JavaScript'
if (language) {
    console.log('The best language is: ', language)
}
console.log(Boolean(''));           //false
console.log(Boolean('Hello'));      //true
console.log(Boolean(' '));          //true
console.log(Boolean('0'));          //true
console.log(Boolean(0));            //false
console.log(Boolean(null));         //false
console.log(Boolean([]));           //true
console.log(Boolean({}));           //true
console.log(Boolean(function(){})); //true

//Рядки і числа
console.log(1 + '2');           // String 12 (конкатинація)
console.log(''+ 1 + 0);         //10
console.log('' - 1 + 0);        //-1
console.log('3' * '8');         //Number 24
console.log(4+10+'px');         //14px
console.log('px'+ 5 +10);       //px510
console.log('42'- 40);          //2
console.log('42px' - 2);        //NaN
console.log(null + 2 );         //2 (null якщо привести к числу він 0)
console.log(undefined + 42);    //NaN (неможливо привести к числу)

// == vs ===
// == (Зрівнює значення з приведенням типів)
// === (Зрівнює по значенню без приведення типів)
console.log(2 == '2');              //true
console.log(2 === '2');             //false
console.log(undefined == null);     //true
console.log(undefined === null);    //false
console.log('0' == false);          //true
console.log('0' == 0);              //true
console.log(0 == 0);                 //true

//Дивні зрвінення
console.log(false == '');   //true
console.log(false == []);   //true
console.log(false == {});   //false
console.log('' == 0);       //true
console.log('' == []);      //true
console.log('' == {});      //false
console.log(0 == []);       //true
console.log(0 == {});       //false
console.log(0 == null);     //false