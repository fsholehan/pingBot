require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

// Use environment variables
const PORT = process.env.PORT || 8000;
const apiUrl = process.env.API_URL;

// Example route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Function to send requests
function sendRequest() {
  axios
    .get(apiUrl)
    .then((response) => {
      console.log("Request successful:", response.data);
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });
}

// Send a request immediately upon server start
sendRequest();

// Set interval to send request every 5 minutes (300000 ms)
setInterval(sendRequest, process.env.REQUEST_INTERVAL);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
