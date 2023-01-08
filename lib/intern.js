// exporting  the right file is very important for this assignment 
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) { 
    // i am calling the constructor one more time in order to access certain properties.
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
// once again i am exporting the right module so i can continue with the assignment 
module.exports = Intern;