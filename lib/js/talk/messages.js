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

function doStyledLog() {
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

function doObjectLog() {
    const person = { Name: "Chuck D" };
    console.log("Hi! I am %o", person);
}

function doStringLog() {
    const name = "Charles";
    console.log("Hi! My name is %s.", name);
}

function doWarning() {
    console.log("This is a warning message.");
}

function doError() {
    console.log("This is an error message.");
}

doLog();
doWarning();
doError();
doStyledLog();
doObjectLog();
doStringLog();