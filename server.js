import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import twitterRoute from "./routes/twitterRoute.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 6000;
process.once("SIGUSR2", () =>
  server.close((err) => process.kill(process.pid, "SIGUSR2"))
);
app.use(express.json());

app.use("/tweets", twitterRoute);

if (process.env.NODE_ENV === "production") {
  // need to come back here an ensure that the path is correct
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
