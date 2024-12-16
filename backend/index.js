const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;

dotenv.config();

// You can use express.json() for parsing JSON request bodies
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// Use the routes
app.use('/', Routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});
