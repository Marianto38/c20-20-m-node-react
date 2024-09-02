const express = require("express");
const router = express.Router();

// controllers
const getAllUser = require("../controllers/getAllUser");
const postUser = require("../controllers/postUser");
const getUSerByProfession = require("../controllers/getUSerByProfession");
const loginUser = require("../controllers/loginUser");

// middleware
const registerMid = require("../middleware/registerMid");

router.get("/", getAllUser);
router.post("/", registerMid, postUser);
router.post("/login", loginUser);
router.get("/profession", getUSerByProfession);
module.exports = router;
