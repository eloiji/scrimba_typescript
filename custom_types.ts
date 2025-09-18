type Food = string;

let FavoriteFood: Food = "Pizza";

type Address = {
    street: string;
    city: string;
    country: string;
}

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address?: Address; // Optional property
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "John",
    age: 35,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
}

function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1);