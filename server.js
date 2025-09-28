const express = require("express");
const app = express();

let ledStatus = "OFF"; // status LED

// Endpoint untuk nyala / mati LED
app.get("/led/:status", (req, res) => {
  ledStatus = req.params.status.toUpperCase();
  console.log("Perintah diterima:", ledStatus);
  res.send({ success: true, led: ledStatus });
});

// Endpoint untuk cek status LED
app.get("/led", (req, res) => {
  res.send({ led: ledStatus });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://192.168.74.73:${PORT}`);
});