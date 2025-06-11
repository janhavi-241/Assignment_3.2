// 1. Change the text of the heading
const heading = document.getElementById("main-heading");
heading.textContent = "Updated Student List";

// 2. Change the background color of the container
const container = document.querySelector(".container");
container.style.backgroundColor = "#004d40"; 

// 3. Traverse and style the 2nd list item
const studentList = document.getElementById("student-list");
const secondStudent = studentList.children[1]; // 0-based index
secondStudent.style.backgroundColor = "green"; 
secondStudent.style.color = "black";

// 4. Add a new list item dynamically
const newStudent = document.createElement("li");
newStudent.className = "student";
newStudent.textContent = "Popatlal";
studentList.appendChild(newStudent);

// 5. Remove the 3rd item
const thirdStudent = studentList.children[2]; // index 2 = 3rd item
studentList.removeChild(thirdStudent);

// 6. Use DOM traversal methods
// a. parentElement
console.log("Parent of heading:", heading.parentElement);

// b. children
console.log("Children of student list:");
console.log(studentList.children);

// c. firstElementChild, lastElementChild
console.log("First student:", studentList.firstElementChild.textContent);
console.log("Last student:", studentList.lastElementChild.textContent);

// d. nextElementSibling, previousElementSibling
console.log("Next sibling of heading:", heading.nextElementSibling); 
console.log("Previous sibling of student list:", studentList.previousElementSibling); 