const menu: { 
  name: string; 
  price: number; 
}[] = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister: number = 100;
let nextOrderId: number = 1;

const orderQueue: {
  id: number;
  pizza: {
    name: string; 
    price: number;
  };
  status: "ordered" | "completed";
}[]= [];

function addNewPizza(pizzaObj: {name: string; price: number;}) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    throw new Error("Pizza not found");
  }

  cashInRegister += selectedPizza.price;

  const newOrder: {
    id: number;
    pizza: {
      name: string; 
      price: number;
    };
    status: "ordered";
 } = {
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

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

placeOrder("Chicken Bacon Ranch");

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

completeOrder(1);

console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
