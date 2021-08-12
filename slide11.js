function printprops(p) {
    for (var o in p) {
        console.log(o + ": " + p[o] + "\n");
    }
}

var person = {
    first_name: "Luke",
    last_name: "Lance",
    age: 23
};

printprops(person);