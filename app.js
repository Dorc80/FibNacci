function fib() {
    // aquí hay algunas variables

    let fib1 = 0
    let fib2 = null;

    function nacci() {

        if (fib2 == null) {
            console.log(1);
            fib2 = 1;
            return;
        }

        let sum = fib1 + fib2;
        console.log(sum);
        fib1 = fib2;
        fib2 = sum;

    }

    return nacci

}
var fibCounter = fib();
fibCounter() // debe ingresar console.log "1"
fibCounter() // debe ingresar console.log "1"
fibCounter() // debe ingresar console.log "2"
fibCounter() // debe ingresar console.log "3"
fibCounter() // debe ingresar console.log "5"
fibCounter() // debe ingresar console.log "8"

