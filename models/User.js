const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  fName: String,
  lName: String,
  email: String,
  phone: String,
  password: String,
  isBlocked: {
    type: Boolean,
    default: false,
  },
  userRole: {
    type: String,
    default: "User",
    roles: ["User", "Admin"],
  },
});

module.exports = mongoose.model("User", userSchema);
