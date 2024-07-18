require("dotenv").config();

const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};


// login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };



// exports.register = async (req, res) => {
//   const { name, email, password } = req.body;

//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const user = await User.create({ name, email, password });

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       virtualMoney: user.virtualMoney,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400).json({ message: "Invalid user data" });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   const match = await bcrypt.compare(password, user.password);

//   if (user && match) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       virtualMoney: user.virtualMoney,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(401).json({ message: "Invalid email or password" });
//   }
// };
