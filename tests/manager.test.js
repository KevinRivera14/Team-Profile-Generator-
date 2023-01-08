// in this portion of my code, i am importing the manager file // 
const Manager = require('../lib/Manager');

describe("Manager", () => {
  it("Can set an office number.", () => {
    const testOfficeNumber = 14;
    const manager = new Manager("Kevin", 14, "kevthebarber14@gmail.com", testOfficeNumber);
    expect(manager.officeNumber).toBe(testOfficeNumber);
  })
});

it("getRole should return Manager", () => {
  const testValue = "Manager";
  const manager = new Manager("Fredrick", 2, "test@test.com", 100);
  expect(manager.getRole()).toBe(testValue);
});

it("Can get office number via getOffice()", () => {
  const testValue = 100;
  const manager = new Manager("Roberto", 3, "test@test.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});