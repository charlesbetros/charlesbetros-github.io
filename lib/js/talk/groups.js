//Console.group()
//    Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().
//Console.groupCollapsed()
//    Creates a new inline group, indenting all following output by another level. However, unlike group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd().
//Console.groupEnd()
//    Exits the current inline group.

function doGroup() {
    console.group("Level 2");
    console.log("Level 2");
    console.groupCollapsed("Level 3");
    console.log("Level 3");
    console.warn("More of level 3");
    console.groupEnd();
    console.log("Back to level 2");
    console.groupEnd();
    console.debug("Back to the outer level");
}

doGroup();