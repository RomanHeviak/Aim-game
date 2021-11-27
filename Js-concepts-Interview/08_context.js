// const person = {
//     surname: 'Старк',
//     knows: function (what, name) {
//         console.log(`Ти ${what} знаєш, ${name} ${this.surname}`)
//     }
// }

// const John = { surname: 'Snoy'}

// person.knows('Vse', 'Bran')
// person.knows.call(John, 'nichego ne', 'Djon')
// person.knows.apply(John, ['nichego ne', 'Djon'])
// person.knows.call(John, ...['nichego ne', 'Djon'])  //es6
// const bound = person.knows.bind(John, 'nichego ne', 'Djon')()

// =======

// function Person (name, age) {
//     this.name = name
//     this.age = age
//     console.log(this);
// }

// const elena = new Person('Elena', 20)

// ======= явний
// function logThis(){
//     console.log(this);
// }

// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// ======= неявний

// const animal = {
//     legs: 4,
//     logThis: function(){
//         console.log(this);
//     }
// }
// animal.logThis

function Cat(color) {
    this.color = color
    console.log('This', this)
    ;( () => console.log('Arrow this', this) )()
}

new Cat('red')