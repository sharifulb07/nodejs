const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register controller

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // if checkexistuser test

    const checkExistUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExistUser) {
      return res.status(400).json({
        success: false,
        message:
          "User is already existed with the username or email. Please try register with different username and email",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    // create a new user and save in a database

    const newlyCreatedUser = new User({
      username,
      email,
      password: hashPassword,
      role: role || "user",
    });

    await newlyCreatedUser.save();

    if (newlyCreatedUser) {
      res.status(201).json({
        success: true,
        message: "User register Successfully",
      });
    } else {
      res.status(201).json({
        success: false,
        message: "User register failed . Try again ",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

// login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const isPasswordMatch = await bcryptjs.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    // creae user token
    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: "15m",
      }
    );



    res.status(201).json({
      success:true,
      message:'Logged In Successfully',
      accessToken

    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Some Error occured. Please Try Again ",
    });
  }
};

module.exports = { registerUser, loginUser };
