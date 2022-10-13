const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email. ", () => {
            const employee = new Employee('Pak', 1, 'pak@myteam.com');
            expect(employee.name).toEqual('Pak');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('pak@myteam.com');
        });
    });
    describe("Functions", () => {
        it("getName should return name. ", () => {
            const employee = new Employee('Pak', 1, 'pak@myteam.com');
            expect(employee.getName()).toEqual('Pak');
        });
        it("getId should return ID.", () => {
            const employee = new Employee('Pak', 1, 'pak@myteam.com');
            expect(employee.getId()).toEqual(1);
        });
        it("getEmail should return email. ", () => {
            const employee = new Employee('Pak', 1, 'pak@myteam.com');
            expect(employee.getEmail()).toEqual('pak@myteam.com');
        });
        it("getRole should return ID.", () => {
            const employee = new Employee('Pak', 1, 'pak@myteam.com');
            expect(employee.getRole()).toEqual('Employee');
        });
        
    });
});