//Console.log()
//    For general output of logging information. You may use string substitution and additional arguments with this method.
//Console.info()
//    Informative logging of information. You may use string substitution and additional arguments with this method.
//Console.warn()
//    Outputs a warning message. You may use string substitution and additional arguments with this method.
//Console.error()
//    Outputs an error message. You may use string substitution and additional arguments with this method.

// These can accept formatted strings. %s, %d, %o, %c (not sure what to use that for. make mario bmp in console)
function doLog() {
    console.log("This is a log message.");
}

function doWarning() {
    console.warn("This is a warning message.");
}

function doError() {
    console.error("This is an error message.");
}

function doStringLog() {
    const name = "Charles";
    console.log("Hi! My name is %s.", name);
}

function doNumberLog() {
    const n = 42;
    console.log("The answer to the Ultimate Question is %d.", n);
}

function doObjectLog() {
    const person = { Name: "Chuck D" };
    console.log("Hi! I am %o", person);
}

function doStyledLog() {
    console.log("Anyone have a good use for %cthis one?", "background-color: blue");
}

function doStyledLog2() {
    console.log("%c   %c     %c    ", "background: white;", "background: red;", "background: white;");
    console.log("%c  %c         %c ", "background: white;", "background: red;", "background: white;");
    console.log("%c  %c   %c  %c %c %c   ", "background: white;", "background: brown;", "background: orange;", "background: brown;", "background: orange;", "background: white;");
    console.log("%c %c %c %c %c    %c %c   %c ", "background: white;", "background: brown;", "background: orange;", "background: brown;", "background: orange;", "background: brown;", "background: orange;", "background: white;");
    console.log("%c %c %c %c  %c   %c %c   ", "background: white;", "background: brown;", "background: orange;", "background: brown;", "background: orange;", "background: brown;", "background: orange");
    console.log("%c %c  %c    %c    %c ", "background: white;", "background: brown;", "background: orange;", "background: brown;", "background: white;");
    console.log("%c   %c       %c  ", "background: white;", "background: orange;", "background: white;");
    console.log("%c  %c  %c %c   %c    ", "background: white;", "background: red;", "background: blue;", "background: red;", "background: white;");
    console.log("%c %c   %c %c  %c %c   %c ", "background: white;", "background: red;", "background: blue;", "background: red;", "background: blue;", "background: red;", "background: white;");
    console.log("%c    %c    %c    ", "background: red;", "background: blue;", "background: red;");
    console.log("%c  %c %c %c %c  %c %c %c %c  ", "background: orange;", "background: red;", "background: blue;", "background: orange;", "background: blue;", "background: orange;", "background: blue;", "background: red;", "background: orange;");
    console.log("%c   %c      %c   ", "background: orange;", "background: blue;", "background: orange;");
    console.log("%c  %c        %c  ", "background: orange;", "background: blue;", "background: orange;");
    console.log("%c  %c   %c  %c   %c  ", "background: white;", "background: blue;", "background: white;", "background: blue;", "background: white;");
    console.log("%c %c   %c    %c   %c ", "background: white;", "background: brown;", "background: white;", "background: brown;", "background: white;");
    console.log("%c    %c    %c    ", "background: brown;", "background: white;", "background: brown;");
}

doLog();
doWarning();
doError();
doStringLog();
doNumberLog();
doObjectLog();
doStyledLog();