import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 5000;

async function start() {
  try {
    await connectDB();
    app.listen(port, "0.0.0.0", () => {
      console.log(`CloudTask API running on port ${port}`);
    });
  } catch (error) {
    console.error("Startup failed:", error.message);
    process.exit(1);
  }
}

start();
