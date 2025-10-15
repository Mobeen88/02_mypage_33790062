var http = require("http");
var style = require("fs");
const port = 8000;

http.createServer(function (req, res) {
  if(req.url == "/style.css"){
    res.writeHead(200, { "Content-Type": "text/css" });
    style.createReadStream("style.css").pipe(res);
  }
  else {
    const htmlContent = `
      <!DOCTYPE html> 
      <html lang = "en">
      <head>
          <meta charset = "UTF-8">
          <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
          <title> My Page </title>
          <link rel="stylesheet" href="style.css">
      </head>
      <body>
          <h1>Welcome to My Web Page</h1>
          <p> Hello World! Welcome to nothing so far... </p>
      </body>
      </html>
    `;
    res.end(htmlContent);
  }
}).listen(port, function () {
  console.log(`✅ Node server is running at http://localhost:${port}`);
});
