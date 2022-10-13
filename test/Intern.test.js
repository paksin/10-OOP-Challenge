const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and school. ", () => {
            const intern = new Intern('Pak', 1, 'pak@myteam.com', 'University of Waterloo');
            expect(intern.name).toEqual('Pak');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('pak@myteam.com');
            expect(intern.school).toEqual('University of Waterloo');
        });
    });
    describe("Functions", () => {
        it("getSchool should return school name. ", () => {
            const intern = new Intern('Pak', 1, 'pak@myteam.com', 'University of Waterloo');
            expect(intern.getSchool()).toEqual('University of Waterloo');
        });
        it("getRole should return Engineer.", () => {
            const intern = new Intern('Pak', 1, 'pak@myteam.com', 'University of Waterloo');
            expect(intern.getRole()).toEqual('Intern');
        })
    });
});