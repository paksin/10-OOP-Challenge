const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and GitHub username. ", () => {
            const engineer = new Engineer('Pak', 1, 'pak@myteam.com', 'paksin');
            expect(engineer.name).toEqual('Pak');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('pak@myteam.com');
            expect(engineer.github).toEqual('paksin')
        });
        });
    describe("Functions", () => {
        it("getGithub should return GitHub username. ", () => {
            const engineer = new Engineer('Pak', 1, 'pak@myteam.com', 'paksin');
            expect(engineer.getGithub()).toEqual('paksin');
        });
        it("getRole should return Engineer.", () => {
            const engineer = new Engineer('Pak', 1, 'pak@myteam.com', 'paksin');
            expect(engineer.getRole()).toEqual('Engineer');
        })
    });
    });