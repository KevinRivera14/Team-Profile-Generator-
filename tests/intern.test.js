// in this portion of my code i am importing the intern file// 
const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("can set school via constructor", () => {
    const testValue = "UC San Pablo";
    const intern = new Intern("Jenny", 1, "test@test.com", testValue);
    expect(intern.school).toBe(testValue);
  });

  it("getRole should return Intern", () => {
    const testValue = "Intern";
    const intern = new Intern("Timmy", 1, "test@test.com", "San Diego State");
    expect(intern.getRole()).toBe(testValue);
  });

  it("can get school via getSchool", () => {
    const testValue = "UC Santa Cruz";
    const intern = new Intern("Alejandro", 1, "test@test.com", testValue);
    expect(intern.getSchool()).toBe(testValue);
  })
});