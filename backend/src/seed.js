import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const adminExists = await User.findOne({
      email: "admin@cinematicssystems.co.za",
    });
    if (!adminExists) {
      await User.create({
        name: "Admin User",
        email: "admin@cinematicssystems.co.za",
        password: "admin123",
        role: "admin",
      });
      console.log(
        "Admin user created: admin@cinematicssystems.co.za / admin123",
      );
    } else {
      console.log("Admin user already exists");
    }

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
