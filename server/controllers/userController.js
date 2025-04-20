import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js"; // ✅ Make sure this import is correct

// Create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

// Register user API
export const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword, phoneNumber, address } =
    req.body;

  try {
    // Validate input
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !address
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character (@#$%^&*!).",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// Login user API
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = createToken(user._id);

    // Set token in HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set to true for HTTPS
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// logout user API
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false, // set to true in production with HTTPS
  });
  res.json({ success: true, message: "Logged out" });
};
// Get user profile API
export const userInfo = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
