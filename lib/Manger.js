// i start off with exporting the right file
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(
    name,
    id,
    email,
    officeNumber
  ) {
    
    // this part of my code will be calling the constructor 
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;