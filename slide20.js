const customErr = new Error('Custom Error made by the Developer.');
var someFunc = function(a) {
    if (a === 4) {
        throw customErr;
    }
}

try {
    someFunc(4);
} catch (e) {
    console.log("Logging custom error.");
    console.log(e);
}