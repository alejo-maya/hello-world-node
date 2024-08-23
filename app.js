const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(`
          ##         .
    ## ## ##        ==
 ## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\______ O           __/
 \\    \\         __/
  \\____\\_______/


Hello from Docker!
Testing Update Version DEMO TEST
`);
  res.end();
});

server.listen(8083, () => {
  console.log("Server started!");
});
