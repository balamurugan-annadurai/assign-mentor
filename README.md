# Student and Mentor Assigning API 🎓🚀

Welcome to the Student and Mentor Assigning API! This API facilitates the management of mentors and students, allowing assignment and retrieval of relationships between them. Built with Express.js, Node.js, and MongoDB.

## Features ✨

### Create Mentor

- **Endpoint:** `/api/mentor/create`
- **Method:** POST
- **Description:** Create a new mentor with provided name and email.

### Create Student

- **Endpoint:** `/api/student/create`
- **Method:** POST
- **Description:** Create a new student with provided name and email.

### Assign Students to Mentor

- **Endpoint:** `/api/student/assignstudents`
- **Method:** POST
- **Description:** Assign multiple students to a mentor specified by mentorId.

### Assign or Change Student to Mentor

- **Endpoint:** `/api/student/changementor`
- **Method:** PUT
- **Description:** Change or assign a student to a new mentor using mentorId and studentId.

### Show All Students for a Mentor

- **Endpoint:** `/api/mentor/assignedstudents/:mentorId`
- **Method:** GET
- **Description:** Retrieve all students assigned to the mentor specified by mentorId.

### Show Previously Assigned Mentor for Student

- **Endpoint:** `/api/student/showpreviousmentor/:studentId`
- **Method:** GET
- **Description:** Retrieve the previous mentor of the student specified by studentId.

## Technologies Used 🛠️

- **Express.js**
  
- **Node.js**

- **MongoDB**

## 📝 Postman Documentation

Explore and test the endpoints using [Postman](https://documenter.getpostman.com/view/36385012/2sA3kVm2CP).

## 🤝 Connect with Me

💼 **LinkedIn:** [Balamurugan A](https://www.linkedin.com/in/balamurugan-a/)<br>
