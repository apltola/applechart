"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(routes_1.default);
app.get('/status', function (req, res) {
    res.send("server is online");
});
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log("Server listening @ " + PORT);
});
//# sourceMappingURL=index.js.map