const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to our Home Page");
    res.end(); // Added to end the response
  } else if (req.url == "/about") {
    res.write("Here is a short description of the passage now");
    res.end(); // Added to end the response
  } else if (req.url == "/contact") {
    res.end(`<h2>Here is my contact number: +8801404009489</h2>`);
  } else {
    res.end(
      `<h1>OOOOPs</h1><p>You can't get the exact page that you are looking for.</p> <a href='/'>Come Back</a>`
    );
  }
});


server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
