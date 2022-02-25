const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const res = require("express/lib/response");
const secret = config.get("secret");

exports.register = async (req, res) => {
  const { fName, lName, email, phone, password } = req.body;
  const existantUser = await User.findOne({ email });
  if (existantUser) res.status(409).json({ msg: "user already exists" });
  try {
    const newUser = new User({
      fName,
      lName,
      email,
      phone,
      password,
    });
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: newUser._id,
        fName: newUser.fName,
        lName: newUser.lName,
        email: newUser.email,
        phone: newUser.phone,
      },
    });

    // res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "coordonnée ghaltin" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "coordonnée ghaltin" });
    const payload = {
      id: user._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: user._id,
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        phone: user.phone,
        userRole: user.userRole,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = (req, res) => {
  res.send(req.user);
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.send(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.blockUser = async (req, res) => {
  try {
    const blockedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isBlocked: true } },
      { new: true }
    );
    res.send(blockedUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
