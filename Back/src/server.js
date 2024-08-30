const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const routeUser = require("./routes/routeUser");
const routeReview = require("./routes/routeReview");
const routeProfessions = require('./routes/routeProfessions')

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use("/user", routeUser);
server.use('/professions', routeProfessions);
// server.use("/reviews", routeReview);
module.exports = server;
