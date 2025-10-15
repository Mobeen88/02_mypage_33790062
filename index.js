var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
  //console.log(req);
  res.writeHead(200, { "Content-Type": "text/html" });
  const htmlContent = `
  <!DOCTYPE html>
  <html lang = "en">
  <head>
      <meta charset = "UTF-8">
      <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
      <title>My Page</title>
  </head>
  <body>
      <h1>Welcome to My Web Page</h1>
      <p> Hello World! My name is Mobeen! </p>
  </body>
  </html>
  `;

  res.end(htmlContent);
}).listen(port, function () {
  console.log(`✅ Node server is running at http://localhost:${port}`);
});
