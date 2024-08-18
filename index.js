const express = require("express");
const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  res.json({
    say: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
