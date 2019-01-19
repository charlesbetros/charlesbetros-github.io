//Console.count()
//    Log the number of times this line has been called with the given label.
//Console.countReset()
//    Resets the value of the counter with the given label.

function doCount() {
    for (let i = 0; i < 10; i++) {
        if (i % 2) {
            console.count("even");
        } else {
            console.count("odd");
        }
    }
}

doCount();