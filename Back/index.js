const server = require("./src/server.js");
const { database, loadProfessions } = require("./src/db.js");

database.sync({ force: true }).then(async () => {
  console.log("Database synchronized");

  await loadProfessions();

  server.listen("3001", () => {
    console.log("listening on port", 3001);
  });
});
