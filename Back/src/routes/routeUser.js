const express = require("express");
const router = express.Router();
const getAllUser = require("../controllers/getAllUser");
const postUser = require("../controllers/postUser");
const getUSerByProfession = require("../controllers/getUSerByProfession");
const loginUser = require ('../controllers/loginUser')

router.get("/", getAllUser);
router.post("/", postUser);
router.post('/login', loginUser)
router.get("/profession", getUSerByProfession);
module.exports = router;
