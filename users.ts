type User = {
    id: number
    username: string
    role: "guest" | "member" | "admin" | "contributor"
}

type UpdatedUser = Partial<User>

let newUserId: number = 1;
const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_doe", role: "admin" },
    { id: 3, username: "guest_user", role: "guest" },
    { id: 4, username: "contributor_user", role: "guest" },
];

function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

function updateUser(id: number, updates: UpdatedUser) : User | undefined {
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
        throw new Error(`User with id ${id} not found`);
    }
    Object.assign(foundUser, updates);
    return foundUser;
}

// Example updates:
// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = { 
        id: newUserId++, 
        ...newUser, 
    };
    users.push(user);
    return user;
}

// Example usages
addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users)