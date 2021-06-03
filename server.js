const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

app.get("/", (req, res) => {
  res.send("안녕 내 이름은 서버!");
});