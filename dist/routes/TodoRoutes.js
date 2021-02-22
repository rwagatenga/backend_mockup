"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/* Represents a all function from TodoController. */
const TodoController_1 = require("../controller/TodoController");
const router = express_1.Router();
/**
 * @create {post}
 * This is a router for creating a Todo. */
router.post("/", TodoController_1.createTodo);
/**
 * @get
 * This is a router for getting all Todos. */
router.get("/", TodoController_1.getTodos);
/** This is a router for geting single Todo. */
router.get("/:id", TodoController_1.getTodo);
/** This is a router for updating Todo. */
router.patch("/:id", TodoController_1.updatedTodo);
/** This is a router for deleting Todo. */
router.delete("/:id", TodoController_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=TodoRoutes.js.map