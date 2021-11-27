// Зона виддимості Scope
function funcA(){
    let a = 1

    function funcB(){
        let b = 2

        function funcC(){
            let c = 3
            console.log('funcC:',a, b, c);
        }
        funcC()
        console.log('funcB:', a, b );
    }
    funcB()
    console.log('funcA:', a);
}

funcA()         

//Scope бачить на рівні вище (С баче А) (А не баче С)
//Тобто ми бачим на рівні функції або на рівнях вище