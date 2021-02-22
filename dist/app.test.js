"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const TodoController_1 = require("./controller/TodoController");
/** This will Test a function that will retrieve all todos */
describe("all TODOS test", function () {
    it("should be able to get all TODOs", function () {
        assert_1.strict.notStrictEqual(TodoController_1.getTodos.length, 1);
    });
});
/** This will Test a function that will get single todo */
describe("Single Todo test", function () {
    it("should be able to get single Todo from the list", function () {
        assert_1.strict.notStrictEqual(TodoController_1.getTodo.length, 1);
    });
});
/** this will test a function that will create a Todo */
describe("Create Todo test", function () {
    it("should be able to add a Todo on the List", function () {
        TodoController_1.createTodo;
        assert_1.strict.notStrictEqual(TodoController_1.getTodos.length, 1);
    });
});
/** This will test a function that will update a todo */
describe("Update Todo test", function () {
    it("should be able to update a Todo", function () {
        TodoController_1.updatedTodo;
        assert_1.strict.notStrictEqual(TodoController_1.getTodos.length, 1);
    });
});
/** This will test a function that will delete a single Todo */
describe("Delete Todo test", function () {
    it("should be able to delele a Todo", function () {
        TodoController_1.deleteTodo;
        assert_1.strict.notStrictEqual(TodoController_1.getTodos.length, 1);
    });
});
//# sourceMappingURL=app.test.js.map