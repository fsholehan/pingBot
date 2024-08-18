require("dotenv").config();
const axios = require("axios");

// Use environment variables
const apiUrl = process.env.API_URL;
const interval = process.env.REQUEST_INTERVAL;

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

// Send a request immediately upon script start
sendRequest();

// Set interval to send request every X milliseconds
setInterval(sendRequest, interval);
