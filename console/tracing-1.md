### Tracing

```javascript
function foo() {
    bar();
}

function bar() {
    console.trace("How did I get here?");
}

foo();
```

![Console trace](./images/tracing-1.png "Tracing")

Notes:
Trace can be called with or without a label.
