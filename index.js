const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
