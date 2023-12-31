const express = require("express");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user_routes.js");
const mongoUrl = process.env.MONGO_DB_URL;

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
  );
  // to get access to cookies a browser you need to parse cookies
app.use(cookieParser());

app.use("/", userRoute);
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT);
console.log(`Server is listening on http://localhost:${PORT}`);
