// const express = require("express");
// const app = express();
// const path = require("path");
// const PORT = 3000;
// app.use(express.static(path.join(__dirname, "frontend")));

// app.get('/' , (request , response) => {
//     response.sendFile((__dirname, "frontend", "index.html"))
// })

// app.get("/", (request, response) => {
//   response.sendFile(path.join(__dirname, "frontend", "index.html"));
// });

// app.get("/", (request, response) => {
//   const filePath = path.join(__dirname, "frontend", "index.html");
//   response.sendFile(filePath, (err) => {
//     if (err) {
//       console.error("Error sending file:", err);
//       response.status(500).send("Error loading the page.");
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`The server is now running on port ${PORT} ! GOO Get It`);
// });
