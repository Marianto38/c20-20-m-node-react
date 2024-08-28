const express = require("express");
const router = express.Router();
const getAllUser = require("../controllers/getAllUser");
const postUser = require("../controllers/postUser");
const getUSerByProfession = require("../controllers/getUSerByProfession");
router.get("/", getAllUser);
router.post("/", postUser);
router.get("/profession", getUSerByProfession);
module.exports = router;
