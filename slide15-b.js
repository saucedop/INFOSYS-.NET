function printprops(p) {
    person = {
        first_name: "Luke",
        last_name: "Lance",
        age: 23
    };

    for (var o in p) {
        console.log(o + ": " + p[o] + "\n");
    }

    var person;
}

printprops(person);