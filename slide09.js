function customMessage(custom, times) {
    for (var i = 0; i < times; i++); {
        console.log(i, custom);
    }
    return "customMessage function ended";
}

customMessage("Useful Message >.>", 5);