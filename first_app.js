var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "Doe");
if (typeof document !== 'undefined') {
    document.body.innerHTML = greeter(user);
}
var myName = "Jhon Doe";
var printName = function (name) {
    console.log(name);
};
printName(myName);
