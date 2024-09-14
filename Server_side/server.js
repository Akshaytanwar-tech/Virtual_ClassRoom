const express = require("express");
const app = express();
const cors = require("cors");
const connectTomongo = require("./db");
const authRoutes = require("./Routes/authRoutes");
const classRoutes = require("./Routes/classRoutes");
const commentRoutes = require("./Routes/commentRoutes");
const leactureRoutes = require("./Routes/leactureRoutes");
const sessionRoutes = require("./Routes/sessionRoutes");
const unitRoutes = require("./Routes/unitRoutes");
const enrollmentRoutes = require("./Routes/enrollmentRoutes");
const port = 5000;

connectTomongo();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/class", classRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/leacture", leactureRoutes);
app.use("/api/session", sessionRoutes);
app.use("/api/unit", unitRoutes);
app.use("/api/enrollment", enrollmentRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
