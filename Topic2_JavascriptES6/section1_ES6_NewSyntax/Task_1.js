const students = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Mary", email: "mary@gmail.com" },
    { id: 3, name: "Tom", email: "tom@gmail.com" },
    { id: 4, name: "John", email: "john1@gmail.com" }
]

//add new student
const addStudent = (students) => {
    let newStudent = { id: students[students.length - 1].id + 1, name: "Depp", email: "depp@gmail.com" }
    students = [...students, newStudent];
    console.log(students);
    return students;
}

//display student list
const studentListing = (students) => {
    students.map((item) => {
        console.log('ID: ', item.id, ' Name: ', item.name, ' Email: ', item.email, '\n');
    })
}

//search student
const searchStudent = (students, key) => {
    let result = students.filter((item) => item.name.toLowerCase().startsWith(key.toLowerCase()))
    console.log(result);
}

//update student
const updateStudent = (students, studentID) => {
    for (let i = 0; i < students.length; i++) {
        if (students[i]["id"] === studentID) {
            students[i]["email"] = "new@gmail.com";
            break;
        }
    }
    console.log(students);
    return students;
}

//sort student list
const sortStudentList = (students) => {
    students.sort((a, b) => {
        if (a.name !== b.name) {
            return a.name.localeCompare(b.name);
        } else {
            return b.id - a.id;
        }
    })
    console.log(students);
}

//call function
addStudent(students);
studentListing(students);
searchStudent(students, 'jo');
updateStudent(students, 3);
sortStudentList(students);

