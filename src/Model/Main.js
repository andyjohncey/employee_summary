const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const ejs = require("ejs")

const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const readFileAsync = util.promisify(fs.readFile);

class Main {
    constructor() {
        this._teamArray = [];
    }

    async _hard() {
        const templatesPath = (path.resolve(_dirname, "..", "templates", "main.ejs")
        
        const ejsTemplate = await readFileAsync(path.resolve(_dirname, "..", "templates", "main.ejs"), "utf-8 ");

        const result = ejs.render(ejs.ejsTemplate, {
            teamMembers: this._teamArray
        }, {
            fileName: templatesPath
        )
    };
    console.log(result);


    async run() {
        const { teamSize } = await inquirer.prompt([{
            type: "input",
            name: "teamSize",
            message: "Please input your team size",
            default: 2
        }]);


        // for (let i = 0; i < teamSize; i++) {
        //     console.log('---------------------------');
        //     const response = await inquirer.prompt([
        //         {
        //             type: "input",
        //             name: "name",
        //             message: "Please input your name",
        //         },
        //         {
        //             type: "input",
        //             name: "email",
        //             message: "Please input your email",
        //         },
        //         {
        //             type: "list",
        //             name: "role",
        //             message: "Please input your role",
        //             choices: [
        //                 'Main.ENGINEER',
        //                 'Main.INTERN',
        //                 'Main.MANAGER'
        //             ]
        //         },
        //         {
        //             type: "input",
        //             name: "github",
        //             message: "Please input your github",
        //             when: ({ role }) => role === "Main.ENGINEER",
        //         },
        //         {
        //             type: "input",
        //             name: "school",
        //             message: "Please input your school",
        //             when: ({ role }) => role === "Main.INTERN",
        //         },
        //         {
        //             type: "input",
        //             name: "officeNumber",
        //             message: "Please input your officeNumber",
        //             when: ({ role }) => role === "Main.MANAGER",
        //         },
        //     ]);

        //     const {
        //         name,
        //         email,
        //         role,
        //         github,
        //         school,
        //         officeNumber,
        //     } = response;

        //     if (role === 'Main.ENGINEER') {
        //         this._teamArray.push(new Engineer(name, email, github));
        //     }
        //     if (role === 'Main.INTERN') {
        //         this._teamArray.push(new Intern(name, email, school));
        //     }
        //     if (role === 'Main.MANAGER') {
        //         this._teamArray.push(new Manager(name, email, officeNumber));
        //     }
        // }




        this._teamArray = [
            new Engineer("engineer name", "engineer email", engineer github);
            new Intern("intern name", "intern email", intern school);
            new Manager("manager name", "manager email", manager office number);
        ]
        await this._hard();
    }
}


Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';

module.exports = Main;