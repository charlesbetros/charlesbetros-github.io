//Console.time()
//    Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.
//Console.timeEnd()
//    Stops the specified timer and logs the elapsed time in seconds since it started.
//Console.timeLog()
//    Logs the value of the specified timer to the console.

function doTime() {
    console.time("Array initialize");
    var array = new Array(1000000);
    for (var i = array.length - 1; i >= 0; i--) {
        array[i] = new Object();
    };
    console.timeEnd("Array initialize");
}

doTime();