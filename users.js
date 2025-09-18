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
var newUserId = 1;
var users = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_doe", role: "admin" },
    { id: 3, username: "guest_user", role: "guest" },
    { id: 4, username: "contributor_user", role: "guest" },
];
function fetchUserDetails(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username ".concat(username, " not found"));
    }
    return user;
}
function updateUser(id, updates) {
    var foundUser = users.find(function (user) { return user.id === id; });
    if (!foundUser) {
        throw new Error("User with id ".concat(id, " not found"));
    }
    Object.assign(foundUser, updates);
    return foundUser;
}
// Example updates:
// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });
function addNewUser(newUser) {
    var user = __assign({ id: newUserId++ }, newUser);
    users.push(user);
    return user;
}
// Example usages
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);
