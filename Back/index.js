const server = require("./src/server.js");
const { database } = require("./src/db.js");

database.sync({ force: false }).then(() => {
  console.log("Database synchronized");
  server.listen("3001", () => {
    console.log("listening on port", 3001);
  });
});
