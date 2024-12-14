const http = require("http");
const path = require("path");
const fs = require("fs");

const app = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/html" });

  let filepath = path.join(
    __dirname,
    "source",
    req.url === "/" ? "index.html" : req.url
  );
  let ext = path.extname(filepath);
  let contentType = "text/html";

  if (!ext && contentType === "text/html") {
    filepath += ".html";
  }

  // Determine content type
  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    default:
      contentType = "text/html";
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      console.error(`File not found: ${filepath}`);
      const errorFile = path.join(__dirname, "source", "err.html");
      fs.readFile(errorFile, (error, errorData) => {
        if (error) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("<h1>500 - Internal Server Error</h1>");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(errorData);
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
