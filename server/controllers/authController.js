import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;

  const newUser = await User({ fullname, email, password });

  const userCreated = await newUser.save();

  if (!userCreated) {
    return res.status(500).json({ error: "Error in creating user" });
  }
  return res.status(200).json(userCreated);
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });

  const foundUser = await User.findOne({ email: email });

  if (!foundUser) {
    return res.status(404).json({ error: "user not found" });
  }

  console.log("Found user", foundUser);

  try {
    const passwordVerified = await foundUser.matchPassword(password);
    if (!passwordVerified) {
      return res.status(401).json({ error: "unauthorized" });
    }

    const token = jwt.sign(
      {
        userId: foundUser._id,
        fullname: foundUser.fullname,
        email: foundUser.email,
      },
      process.env.JWT_SECRET
    );

    return res.status(200).json({token, userData: {
        userId: foundUser._id,
        fullname: foundUser.fullname,
        email: foundUser.email,
      }});
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  if (req.user) {
    console.log(req.user);
    return res.status(200).json(req.user);
  } else return res.status(404).json({ error: "User not found" });
};
