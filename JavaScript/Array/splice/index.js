const users = [
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" },
];

//新增
users.splice(1, 0, { id: 2, name: "ming" });
console.table(users);

//刪除 id = 1

let idx = users.findIndex((x) => x.id === 1);
//找不到回傳-1
if (idx !== -1) {
    users.splice(idx, 1);
}
console.table(users);

let idx2 = users.findIndex((x) => x.id === 3);

if (idx2 !== -1) {
    users.splice(idx2, 1, { id: 3, name: "ZhengMin" });
}
console.table(users);
