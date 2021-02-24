import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import SwaggerUi from "swagger-ui-express";
import * as SwaggerDocument from "./SwaggerDocument.json";

/** getting all routes */
import TodoRoutes from "./routes/TodoRoutes";

const app = express();

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Todo API",
			version: "1.0.0",
		},
	},
	apis: ["./src/routes*.js"], // files containing annotations as above
};
/** express with body-parser to allow user inputs */
app.use(json());

app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Method",
		"GET, POST, PUT, PATCH, DELETE, OPTIONS"
	);
	res.setHeader(
		"Access-Control-Allow-Header",
		"Accept, Content-Type, Authorization"
	);
	if (req.method === "OPTIONS") {
		return res.sendStatus(200);
	}
	next();
});

/** SwaggerUi */
app.use("/apidoc", SwaggerUi.serve, SwaggerUi.setup(SwaggerDocument));

/** connect our app with our routes */
app.use("/todo", TodoRoutes);

/** check if there is any error before we start our app */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

/** app listen to 3000 port */
app.listen(3000);
