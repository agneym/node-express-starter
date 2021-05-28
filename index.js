const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(compression());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(helmet());
app.use(cors());

app.listen(app.get("port"), () => {
  console.log(`App running on port ${app.get("port")}`);
});
