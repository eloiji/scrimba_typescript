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
    address: Address;
}

let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
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