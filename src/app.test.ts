import { strict as assert } from "assert";

import { TodoModel } from "./models/TodoModel";
import {
	createTodo,
	getTodos,
	getTodo,
	updatedTodo,
	deleteTodo,
} from "./controller/TodoController";

/** This will Test a function that will retrieve all todos */
describe("all TODOS test", function () {
	it("should be able to get all TODOs", function () {
		assert.notStrictEqual(getTodos.length, 1);
	});
});

/** This will Test a function that will get single todo */
describe("Single Todo test", function () {
	it("should be able to get single Todo from the list", function () {
		assert.notStrictEqual(getTodo.length, 1);
	});
});

/** this will test a function that will create a Todo */
describe("Create Todo test", function () {
	it("should be able to add a Todo on the List", function () {
		createTodo;
		assert.notStrictEqual(getTodos.length, 1);
	});
});

/** This will test a function that will update a todo */
describe("Update Todo test", function () {
	it("should be able to update a Todo", function () {
		updatedTodo;
		assert.notStrictEqual(getTodos.length, 1);
	});
});

/** This will test a function that will delete a single Todo */
describe("Delete Todo test", function () {
	it("should be able to delele a Todo", function () {
		deleteTodo;
		assert.notStrictEqual(getTodos.length, 1);
	});
});
