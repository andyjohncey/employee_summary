const shortid = require("shortid");

module.exports = class Employee {
    constructor(name, email) {
        this._name = name;
        this._id = shortid;
        this._email = email;
    }

    getName() {
        return this._name;
    }

    getId() {
        return this._id;
    }

    getEmail() {
        return this._email;
    }

    getRole() {
        return this.constructor.name;
    }
}

