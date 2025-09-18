"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
var cashInRegister = 100;
var nextPizzaId = 1;
var orderQueue = [];
var menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
function addNewPizza(pizzaObj) {
    menu.push(__assign(__assign({}, pizzaObj), { id: nextPizzaId++ }));
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        throw new Error("Pizza not found");
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextPizzaId,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    nextPizzaId++;
    return newOrder;
}
/**
 * Challenge: add types our generic `addToArray` function. It should work
 * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */
function addToArray(array, item) {
    array.push(item);
    return array;
}
// example usage:
addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderQueue, { id: nextPizzaId++, pizza: menu[2], status: "completed" });
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        throw new Error("Order not found");
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLocaleLowerCase().trim() === identifier.toLocaleLowerCase().trim(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
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
