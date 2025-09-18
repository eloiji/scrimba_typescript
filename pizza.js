var menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
  var selectedPizza = menu.find(function (pizzaObj) {
    return pizzaObj.name === pizzaName;
  });
  if (!selectedPizza) {
    throw new Error("Pizza not found");
  }
  cashInRegister += selectedPizza.price;
  var newOrder = {
    id: nextOrderId,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  nextOrderId++;
  return newOrder;
}
function completeOrder(orderId) {
  var order = orderQueue.find(function (order) {
    return order.id === orderId;
  });
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
