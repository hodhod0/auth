var express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//  import for the routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var workoutRouter = require("./routes/Workout");

// express app
var app = express();

// conection with mongodb 
const mongoAtlasUri = process.env.MONGO_DB;
try {
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
// conection with mongodb 



//  middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/workout", workoutRouter);

module.exports = app;
// app.get('/' , (req ,res ) =>{
//     res.json({mssg : "Welcom to the app"})
// })
