const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const ControllerRoutes = require("./routes/route");
const app = express();

app.use(helmet());

app.use((req, res, next) => {
  const allowedOrigins = [`http://localhost:3000`];
  const {origin} = req.headers;

  if(allowedOrigins.includes(origin)) {
    res.set({
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": ["POST", "PATCH", "PUT", "DELETE"],
      "Access-Control-Allow-Headers": ["Content-Type", "Authorization"]
    });
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }

  if(req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(cookieParser());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/v1/example", ControllerRoutes);

app.use("/", (req, res) => res.sendStatus(404));

module.exports = app;