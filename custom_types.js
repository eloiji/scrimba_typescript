var FavoriteFood = "Pizza";
var person1 = {
    name: "Joe",
    age: 42,
    isStudent: true,
};
var person2 = {
    name: "John",
    age: 35,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
};
function displayInfo(person) {
    console.log("".concat(person.name, " lives at ").concat(person.address.street));
}
displayInfo(person1);
