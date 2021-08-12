function compareExpressions() {
    console.log(3 > 4 && 4 == 4);
    console.log(3 > 4 || 4 == 4);
    console.log((5 != 5 || 4 > 4) && !(2 == 2));
    console.log((5 % 2 >= 2) && (!false || 4 < 0));
}

compareExpressions();