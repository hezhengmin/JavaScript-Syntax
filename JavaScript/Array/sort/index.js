const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 18 },
    { name: "Ming", age: 22 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 19 },
];

//按照年齡，由大至小
students.sort((a, b) => b.age - a.age);
console.table(students);
// ┌─────────┬───────────┬─────┐
// │ (index) │   name    │ age │
// ├─────────┼───────────┼─────┤
// │    0    │  'Ming'   │ 22  │
// │    1    │ 'Charlie' │ 22  │
// │    2    │  'Alice'  │ 20  │
// │    3    │  'David'  │ 19  │
// │    4    │   'Bob'   │ 18  │
// └─────────┴───────────┴─────┘

//按照年齡，由小至大，同年齡字母小的優先
students.sort((a, b) => {
    if (a.age !== b.age) {
        return a.age - b.age;
    } else {
        //'Charlie'.localeCompare('Ming')
        //Ans : -1
        return a.name.localeCompare(b.name);
    }
});

console.table(students);
// ┌─────────┬───────────┬─────┐
// │ (index) │   name    │ age │
// ├─────────┼───────────┼─────┤
// │    0    │   'Bob'   │ 18  │
// │    1    │  'David'  │ 19  │
// │    2    │  'Alice'  │ 20  │
// │    3    │ 'Charlie' │ 22  │
// │    4    │  'Ming'   │ 22  │
// └─────────┴───────────┴─────┘
