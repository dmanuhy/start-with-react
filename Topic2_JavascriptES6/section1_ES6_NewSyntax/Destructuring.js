const account = {
    email: "test@example.com",
    password: "123",
    role: "admin"
}

const exist = {
    email: account.email,
    role: account.role
}

//console.log(exist);


const data = [
    {
        students: [
            { id: 1, name: "John", age: 19 },
            { id: 2, name: "Jane", age: 20 },
            { id: 3, name: "Dan", age: 21 }
        ]
    },
    {
        classes: [
            { id: 1, name: "SE1739" },
            { id: 2, name: "SE1740" },
        ]
    },
    {
        courses: [
            { id: 1, code: "FER201m", credit: 3 },
            { id: 2, code: "SDN301", credit: 3 },
        ]
    }
]

const { students } = data.find(item => item.students);
const { classes } = data.find(item => item.classes);
const { courses } = data.find(item => item.courses);

console.log(students);
console.log(classes);
console.log(courses);