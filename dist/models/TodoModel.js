"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
class TodoModel {
    /**
     * Represents a TodoModal.
     * @constructor
     * @param {string} id - The id for each Todo
     * @param {string} title - The title of Todo
     * @param {string} description - The description each Todo
     * @param {string} priority - priority of each Todo if it HIGH, LOW or MEDIUM
     * @param {string} createDate - each todo must have its created date
     * @param {string} modifiedDate - each todo must record a date whenever it's modefied
     */
    constructor(id, title, description, priority, createDate, modifiedDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
    }
}
exports.TodoModel = TodoModel;
//# sourceMappingURL=TodoModel.js.map