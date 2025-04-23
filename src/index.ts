import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/connectDB";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB. Shutting down server.", err);
  });
