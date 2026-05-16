import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const users = [
  {
    name: "Admin User",
    email: "admin@cinematicssystems.co.za",
    password: "admin123",
    role: "admin",
  },
  {
    name: "Patrick Lingstone",
    email: "patricklingstone51@gmail.com",
    password: "admin12345",
    role: "admin",
  },
];

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    for (const userData of users) {
      const exists = await User.findOne({ email: userData.email });
      if (!exists) {
        await User.create(userData);
        console.log(`✅ Created: ${userData.email} / ${userData.password}`);
      } else {
        console.log(`⚠️  Already exists: ${userData.email}`);
      }
    }

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
