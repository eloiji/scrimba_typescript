type Pizza = { 
  id: number;
  name: string; 
  price: number; 
};

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister: number = 100;
let nextPizzaId: number = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): void {
  menu.push({...pizzaObj, id: nextPizzaId++});
}

function placeOrder(pizzaName: string) : Order {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    throw new Error("Pizza not found");
  }

  cashInRegister += selectedPizza.price;

  const newOrder: Order = {
    id: nextPizzaId,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  nextPizzaId++;

  return newOrder;
}

function addToArray<T>(array: T[], item: T) : T[] {
    array.push(item)
    return array
}

// example usage:
addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextPizzaId++, pizza: menu[2], status: "completed" }) // cannot compile. pizza error


function completeOrder(orderId: number) : Order {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    throw new Error("Order not found");
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find((pizza) => pizza.name.toLocaleLowerCase().trim() === identifier.toLocaleLowerCase().trim());
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new Error("Invalid identifier");
  }
}

// addNewPizza({name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({name: "BBQ Chicken", price: 12 });
// addNewPizza({name: "Spicy Sausage", price: 11 });

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

placeOrder("Chicken Bacon Ranch");

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

completeOrder(1);

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
