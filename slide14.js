var scope = "global scope";

function checkscope() {
    var scope = "local scope";

    function nested() {
        var scope = "nested scope";
        return scope;
    }
    
    return nested();
}

var result = checkscope();
console.log(result);