import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  mongodbUrl: process.env.MONGODB_URL || "",
};

export default config;