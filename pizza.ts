type Pizza = { 
  id: number;
  name: string; 
  price: number; 
};

type OrderQueue = {
    id: number;
    pizza: Pizza;
    status: "ordered" | "completed";
}

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister: number = 100;
let nextOrderId: number = 1;

const orderQueue: OrderQueue[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    throw new Error("Pizza not found");
  }

  cashInRegister += selectedPizza.price;

  const newOrder: OrderQueue = {
    id: nextOrderId,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  nextOrderId++;

  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    throw new Error("Order not found");
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier: string | number) {
  /**
   * Challenge: write the code to check if the parameter is a string
   * or a number, and use the menu.find() method accordingly
   */
  if (typeof identifier === "string") {
    return menu.find((pizza) => pizza.name.toLocaleLowerCase().trim() === identifier.toLocaleLowerCase().trim());
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new Error("Invalid identifier");
  }
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

placeOrder("Chicken Bacon Ranch");

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

completeOrder(1);

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
