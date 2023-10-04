//traditional function
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(1, 'foo');

//arrow function
// const sumNumbers = (a, b) => {
//     console.log(a + b);
// }
// sumNumbers(1, 'foo');

const users = [
    {
        id: 1, email: 'foo1@example.com', password: '123123'
    },
    {
        id: 2, email: 'foo1@example.com', password: '123123'
    },
    {
        id: 3, email: 'foo3@example.com', password: '123123'
    }
]

const displayUsers = (...users) => {
    users.forEach(({ id, email }) => {
        console.log(id, email);
    })
}

displayUsers(...users);