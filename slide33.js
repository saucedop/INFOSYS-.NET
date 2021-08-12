function calculateInterest() {
    const RATE = 5, INITIAL_BALANCE = 10000;
    const TARGET = 2 * INITIAL_BALANCE;
    var balance = INITIAL_BALANCE;
    var year = 0;
    while (balance < TARGET) {
        var interest = balance * RATE/100;
        balance = balance + interest;
        year++;
    }
    console.log("The investment doubled after " + year + " years.");
}

calculateInterest();