const PORT = 3000;
const { application } = require("express");
const express = require("express");
const server = express();
const apiRouter = require("./api");
const morgan = require("morgan");
const { client } = require("./db");

server.use(morgan("dev"));

server.use(express.json());

server.use("/api", apiRouter);

server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<____Body Logger END____>");


    next();
})

server.post("/api/users/register", () => { });
server.post("/api/users/login", () => { });
server.delete("/api/users/:id", () => { });

// app.use("/api", (req, res, next) => {
//     console.log("A request was made to /api");
//     next();
// });

// app.get("/api", (req, res, next) => {
//     console.log("A get request was made to /api");
//     res.send({ message: "success" })
// })

client.connect();

server.listen(PORT, () => {
    console.log("The server is up on port", PORT);
})