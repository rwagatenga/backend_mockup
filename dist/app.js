"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// import swaggerJsdoc from "swagger-jsdoc";
const SwaggerDocument = __importStar(require("./SwaggerDocument.json"));
/** getting all routes */
const TodoRoutes_1 = __importDefault(require("./routes/TodoRoutes"));
const app = express_1.default();
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Todo API",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes*.js"],
};
/** express with body-parser to allow user inputs */
app.use(body_parser_1.json());
/** SwaggerUi */
app.use("/apidoc", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(SwaggerDocument));
/** connect our app with our routes */
app.use("/todo", TodoRoutes_1.default);
/** check if there is any error before we start our app */
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
/** app listen to 3000 port */
app.listen(3000);
//# sourceMappingURL=app.js.map