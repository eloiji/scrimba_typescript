/**
 * @Todo : convert this file to TypeScript
 */
const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */
function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    throw new Error("Pizza not found");
  }
  console.log("Selected pizza:", selectedPizza);
  cashInRegister = cashInRegister + selectedPizza.price;

  const newOrder = {
    id: nextOrderId,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  nextOrderId++;

  return newOrder;
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */
function completeOrder(orderId) {
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
