// made sure i exported the right file first// 
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    
    super(name, id, email);
    this.github = github;
  }

  get Github() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}
// i made sure i exported the right module to continue with the assignment // 
module.exports = Engineer;