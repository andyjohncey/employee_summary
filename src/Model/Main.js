const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');
const ejs = require('ejs');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Main {
    constructor() {
        this._teamArray = [];
    }

    async _hard() {
        const templatePath = path.resolve(__dirname, '..', 'templates', 'main.ejs');

        const ejsTemplate = await readFileAsync(templatePath, 'utf-8');

        const result = ejs.render(ejsTemplate, {
            teamMembers: this._teamArray
        }, {
            filename: templatePath
        });

        console.log(result);

        await writeFileAsync(path.resolve(__dirname, '..', 'dist', 'hard.html'), result);
    }



    async run() {

        this._teamArray = [
            new Engineer("engineer name", "engineer email", "engineer github"),
            new Intern("intern name", "intern email", "intern school"),
            new Manager("manager name", "manager email", "manager office number"),
        ]
        await this._hard();
    }
}


Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';

module.exports = Main;