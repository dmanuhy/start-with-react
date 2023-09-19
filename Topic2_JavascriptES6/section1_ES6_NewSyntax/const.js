// const with object
const PI = 3.14;
console.log(PI);

const student = Object.freeze({
    id: 1,
    name: "David",
    age: 20,
    address: {
        street: "Nguyen Trai",
        state: "Thanh Xuan",
        city: "Ha Noi"
    }
})
console.log(student);

student.name = "Daniel";
student.address.street = "Le";

console.log(student);

//const with array

const vocaloid = [
    { number: "01", name: "Hatsune Miku", color: "aqua" },
    { number: "02", name: "Kagamine Rin", color: "yellow" },
    { number: "03", name: "Kagamine Len", color: "yellow" }
]