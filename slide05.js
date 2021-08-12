var person = {firstName: "John",
              lastName: "Doe", 
              age: 50, 
              eyeColor: "blue",
              fullName: function () {return this.firstName + " " + this.lastName;}
};

if (person) {
    console.log(person.firstName);
    console.log(person.fullName());
}