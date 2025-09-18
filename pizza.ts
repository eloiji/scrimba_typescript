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

let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderQueue: OrderQueue[] = [];

const menu: Pizza[] = [
  { id: nextOrderId++, name: "Margherita", price: 8 },
  { id: nextOrderId++, name: "Pepperoni", price: 10 },
  { id: nextOrderId++, name: "Hawaiian", price: 10 },
  { id: nextOrderId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): void {
  menu.push({...pizzaObj, id: nextOrderId++});
}

function placeOrder(pizzaName: string) : OrderQueue | undefined {
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

function completeOrder(orderId: number) : OrderQueue | undefined{
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

addNewPizza({name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({name: "BBQ Chicken", price: 12 });
addNewPizza({name: "Spicy Sausage", price: 11 });

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

placeOrder("Chicken Bacon Ranch");

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

completeOrder(1);

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
