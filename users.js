var users = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_doe", role: "admin" },
    { id: 3, username: "guest_user", role: "guest" },
    { id: 4, username: "contributor_user", role: "guest" }
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
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
console.log(users);
