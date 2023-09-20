const listElement = (...list) => {
    console.log(list);
}

listElement(1, 2, 4);

const list = [2, 4, true, 3.5, "hello"];
listElement(...list);

const students_origin = [
    { id: 1, name: "John", age: 19 },
    { id: 2, name: "Mary", age: 20 },
    { id: 3, name: "Tom", age: 21 },
]
let newStudents = { id: 4, name: "Max", age: 22 }
const students_current = [...students_origin, newStudents];
console.log(students_current);