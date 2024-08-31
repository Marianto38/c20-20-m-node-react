const express = require("express");
const router = express.Router();

// controllers
const getAllUser = require("../controllers/getAllUser");
const postUser = require("../controllers/postUser");
const getUSerByProfession = require("../controllers/getUSerByProfession");
const loginUser = require ('../controllers/loginUser')

// middleware
const registerMid = require("../middleware/registerMid");

router.get("/", getAllUser);
<<<<<<< HEAD
router.post("/", registerMid, postUser);
=======
router.post("/", postUser);
router.post('/login', loginUser)
>>>>>>> 3bb34712d51915df8f5f22a96b2dacbde0d0c7d6
router.get("/profession", getUSerByProfession);
module.exports = router;