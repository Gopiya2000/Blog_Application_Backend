var express = require('express');
const isAuthenticatedUser =  require('../middlewares/auth')
const { getProfile, newProfile, updateProfile, myProfile,getAllProfile, viewProfile } = require('../controllers/profile-controller')

const profileRouter = express.Router();

profileRouter.get("/all",isAuthenticatedUser,getAllProfile);
profileRouter.post("/add-profile",isAuthenticatedUser, newProfile);
profileRouter.get("/",isAuthenticatedUser, viewProfile);
profileRouter.put("/update-profile/:id",isAuthenticatedUser, updateProfile);

module.exports = profileRouter;