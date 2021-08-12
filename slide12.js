var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

var result = checkscope();
console.log(scope);