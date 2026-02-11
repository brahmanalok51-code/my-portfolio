const express = require("express");
const cors = require("cors");
const connectDB = require("./model/dbconnn");
const contactRoutes = require("./routes/route");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", contactRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
