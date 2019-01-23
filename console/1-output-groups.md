### Organizing output

```javascript
console.log("This is the outer level");
console.group("Group");
console.log("Level 2");
console.groupCollapsed("Collapsed");
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
```

![Console group output](./images/doOutputGrouped.png "Group Output")

Notes:
Grouping things simply indents output until end group.