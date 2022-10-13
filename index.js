const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const inquirer = require("inquirer");
const fs = require("fs");

var teamList = [];

function combineHTML(data) {
    var HTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 bg-danger heading-div">
                    <h1 class="text-white text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">`;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.includes('Manager')) {
            HTML = HTML.concat(`<div class="card" style="width: 18rem; margin: 10px;">
        <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">ID: ${data[i].id}</p>
            <p class="card-text">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p>
            <p class="card-text">Office Number: ${data[i].officeNumber}</p>
            
        </div>
    </div>`)
        } else if (data[i].name.includes('Engineer')) {
            HTML = HTML.concat(`<div class="card" style="width: 18rem; margin: 10px;">
        <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">ID: ${data[i].id}</p>
            <p class="card-text">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p>
            <p class="card-text">Github:<a href="https://github.com/${data[i].github}">${data[i].github}</a></p>
            
        </div>
    </div>`)
        } else if (data[i].name.includes('Intern')) {
            HTML = HTML.concat(`<div class="card" style="width: 18rem; margin: 10px;">
        <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">ID: ${data[i].id}</p>
            <p class="card-text">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p>
            <p class="card-text">School: ${data[i].school}</p>
            
        </div>
    </div>`)
        }
    }
    HTML = HTML.concat(`</div>
    </div>
</div>
</div>
</body>

</html>`)

return HTML;

}

function writeToHTML() {
    console.log("Success!");
    fs.writeFileSync('./dist/index.html',
        combineHTML(teamList), "UTF-8")
}

function init() {
    inquirer
        .prompt([{
            type: 'list',
            message: 'Add manager, engineer or intern?',
            name: 'add',
            choices: ['Manager', 'Engineer', 'Intern', 'No I am done.'],
        }, ])
        .then(function (input) {
            if (input.add == 'Manager') {
                addMan();
            } else if (input.add == 'Engineer') {
                addEng();
            } else if (input.add == 'Intern') {
                addInt();
            } else {
                writeToHTML();
            }
        })
}

function addMan() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'Manager name?',
            name: 'name',
        }, {
            type: 'input',
            message: 'ID number?',
            name: 'Id',
        }, {
            type: 'input',
            message: 'Email?',
            name: 'email',
        }, {
            type: 'input',
            message: 'Manager office number?',
            name: 'officeNumber',
        }, ])
        .then(answers => {
            const manager = new Manager(answers.name + ', Manager', answers.Id, answers.email, answers.officeNumber);
            teamList.push(manager);
            init();
        })
}

function addEng() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'Engineer name?',
            name: 'name',
        }, {
            type: 'input',
            message: 'ID number?',
            name: 'Id',
        }, {
            type: 'input',
            message: 'Email?',
            name: 'email',
        }, {
            type: 'input',
            message: 'GitHub username?',
            name: 'github',
        }, ])
        .then(answers => {
            const engineer = new Engineer(answers.name + ', Engineer', answers.Id, answers.email, answers.github);
            teamList.push(engineer);
            init();
        })
}

function addInt() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'Intern name?',
            name: 'name',
        }, {
            type: 'input',
            message: 'ID number?',
            name: 'Id',
        }, {
            type: 'input',
            message: 'Email?',
            name: 'email',
        }, {
            type: 'input',
            message: 'Which school do you go to?',
            name: 'school',
        }, ])
        .then(answers => {
            const intern = new Intern(answers.name + ', Intern', answers.Id, answers.email, answers.school);
            teamList.push(intern);
            init();
        })
}

init();