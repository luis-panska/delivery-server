const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
if (process.env.NODE_ENV !== "production") {
  const morgan = require("morgan");
  const dotenv = require("dotenv");
}

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "./config/config.env" });
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));

connectDB().then(() => {
  app.listen(process.env.PORT || 4500, () => {
    console.log(`Server running on port ${process.env.PORT || 4500}`);
  });
});
