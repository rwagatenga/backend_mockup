import { Router } from "express";

/* Represents a all function from TodoController. */
import {
	createTodo,
	getTodos,
	getTodo,
	updatedTodo,
	deleteTodo,
} from "../controller/TodoController";

const router = Router();

/**
 * @create {post}
 * This is a router for creating a Todo. */
router.post("/", createTodo);

/**
 * @get
 * This is a router for getting all Todos. */
router.get("/", getTodos);

/** This is a router for geting single Todo. */
router.get("/:id", getTodo);

/** This is a router for updating Todo. */
router.patch("/:id", updatedTodo);

/** This is a router for deleting Todo. */
router.delete("/:id", deleteTodo);

export default router;
