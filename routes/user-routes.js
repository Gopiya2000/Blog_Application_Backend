var express = require('express');
const isAuthenticatedUser = require('../middlewares/auth')
const { getUser, signUp, login, viewUser, updateUser, deleteUser ,getAllUser} = require('../controllers/user-controller')

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/",isAuthenticatedUser,getAllUser)
router.get("/:id",isAuthenticatedUser, viewUser);
router.put("/details/:id",isAuthenticatedUser, updateUser);

module.exports = router;