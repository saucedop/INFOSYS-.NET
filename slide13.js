scope = "global";

function checkScope2() {
    scope = "local";
    myScope = "local";
    return [scope, myScope];
}

var result = checkscope2();
console.log(scope);
console.log(myScope);
console.log(result);