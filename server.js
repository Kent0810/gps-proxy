// The rest of your code remains the same
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
const port = 3000; // Choose the port number you want to use

app.use(cors());

app.get("/gps-data", async (req, res) => {
  console.log("FETCHING...");
  try {
    const response = await fetch("http://3.27.208.104:8080/gps-data");
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
