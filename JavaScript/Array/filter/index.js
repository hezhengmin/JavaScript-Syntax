const students = [
    { name: "Alice", age: 20, major: "Mathematics", GPA: 3.8 },
    { name: "Bob", age: 21, major: "Physics", GPA: 3.2 },
    { name: "Carol", age: 19, major: "Computer Science", GPA: 3.9 },
    { name: "Dave", age: 22, major: "Chemistry", GPA: 3.5 },
    { name: "Eve", age: 20, major: "Biology", GPA: 3.7 },
];

// GPA大於3.5且年齡介於20~22之間，主修科目為數學(Mathematics)或計算機科學(Computer Science)
var result = students.filter((x) => {
    return x.GPA > 3.5 && x.age >= 20 && x.age <= 22 && (x.major === "Mathematics" || x.major === "Computer Science");
});

console.table(result);
// ┌─────────┬─────────┬─────┬───────────────┬─────┐
// │ (index) │  name   │ age │     major     │ GPA │
// ├─────────┼─────────┼─────┼───────────────┼─────┤
// │    0    │ 'Alice' │ 20  │ 'Mathematics' │ 3.8 │
// └─────────┴─────────┴─────┴───────────────┴─────┘
