const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and office room number. ", () => {
            const manager = new Manager('Pak', 1, 'pak@myteam.com', 1);
            expect(manager.name).toEqual('Pak');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('pak@myteam.com');
            expect(manager.officeNumber).toEqual(1);
        });
    });
    describe("Functions", () => {
        it("getRole should return Manager.", () => {
            const manager = new Manager('Pak', 1, 'pak@myteam.com', 1);
            expect(manager.getRole()).toEqual('Manager');
        })
    });
});