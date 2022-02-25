const express = require("express");
const {
  register,
  login,
  auth,
  listUsers,
  blockUser,
} = require("../controllers/user.controller");
const roleCheck = require("../middlewares/role");
const { registerRules, validator } = require("../middlewares/validator");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();

router.post("/register", registerRules(), validator, register);
router.post("/login", login);
router.get("/listUsers", listUsers);
router.get("/auth", verifyAuth, auth);
router.put("/blockUser/:id", verifyAuth, roleCheck(["Admin"], blockUser));

module.exports = router;
