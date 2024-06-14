const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./Routes/userRoute");
const PORT = 7000;
app.use(express.json());
app.use(cors());

// DATABASE CONNECTION

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.trvjhgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// API ROUTE

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
