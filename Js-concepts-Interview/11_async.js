const first = () => console.log('First');       //однопоточність
const callstack = () => console.log('Must be second, but use setTimeout => CallBack Quiver');   //асихронность через CallBack Quiver
const second = () => console.log('Second');
const third = () => console.log('Thrid');

first()
setTimeout(callstack, 0)
second()
third()
third()
