"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updatedTodo = exports.getTodo = exports.getTodos = exports.createTodo = void 0;
const TodoModel_1 = require("../models/TodoModel");
const TODOS = [];
const checkPriority = ["LOW", "MEDIUM", "HIGH"];
/** This
 * @create
 * function is for creating a todo
 * */
const createTodo = (req, res, next) => {
    /** Getting all inputs from user */
    const dataEntry = req.body;
    const createdAt = new Date().toUTCString().toString();
    const updatedAt = new Date().toUTCString().toString();
    if (!checkPriority.includes(dataEntry.priority)) {
        throw new Error("Unknown Priority");
    }
    if (dataEntry.title.length < 3 || dataEntry.description.length < 5) {
        throw new Error("your Title or description is too short");
    }
    /** putting all values into TodoModal constroctor
     * @constructor
     */
    const newTodo = new TodoModel_1.TodoModel(Math.random().toString(), dataEntry.title, dataEntry.description, dataEntry.priority, createdAt, updatedAt);
    TODOS.push(newTodo);
    res.status(201).json({
        message: "todo was created successful",
        createdTodo: newTodo,
    });
};
exports.createTodo = createTodo;
/**
 * @get {all}
 * Getting all Todos
 * */
const getTodos = (req, res, next) => {
    if (TODOS.length < 1) {
        const initialData = [
            {
                id: Math.random().toString(),
                title: "todo 1",
                description: "Todo for Learning",
                priority: "LOW",
                createDate: new Date().toUTCString().toString(),
                modifiedDate: new Date().toUTCString().toString(),
            },
        ];
        res.status(200).json({ todos: initialData });
    }
    res.status(200).json({ todos: TODOS });
};
exports.getTodos = getTodos;
/**
 * @param {id}
 * Getting single Todo */
const getTodo = (req, res, next) => {
    /** getting todo id */
    const todoId = req.params.id;
    /** Check if todoId matched with  stored todo*/
    const viewTodo = TODOS.filter((todo) => todo.id === todoId);
    if (viewTodo.length < 0) {
        throw new Error("Unknow Todo");
    }
    res.status(200).json({ todo: viewTodo });
};
exports.getTodo = getTodo;
/**
 * @param {id}
 * Updating Todo function */
const updatedTodo = (req, res, next) => {
    const todoId = req.params.id;
    /** getting updated Todo values */
    const updatedTodoItem = req.body;
    const newUpdatedAt = new Date().toUTCString().toString();
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not Find Todo Item");
    }
    if (!checkPriority.includes(updatedTodoItem.priority)) {
        throw new Error("Unknown Priority");
    }
    if (updatedTodoItem.title.length < 3 ||
        updatedTodoItem.description.length < 5) {
        throw new Error("your Title or description is too short");
    }
    /** putting all values into TodoModal constroctor
     * @constructor
     */
    TODOS[todoIndex] = new TodoModel_1.TodoModel(TODOS[todoIndex].id, updatedTodoItem.title, updatedTodoItem.description, updatedTodoItem.priority, TODOS[todoIndex].createDate, newUpdatedAt);
    res.status(201).json({
        message: "Todo Updated Successful",
        updatedTodo: TODOS[todoIndex],
    });
};
exports.updatedTodo = updatedTodo;
/**
 * @param {id}
 * deleting function of Todo
 * */
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Couldn't Find Todo Item");
    }
    /** remove todo by using builtin function of javascript
     * called splice()
     */
    TODOS.splice(todoIndex, 1);
    res.status(201).json({
        message: "Todo has been Deleted successful",
        todos: TODOS,
    });
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=TodoController.js.map