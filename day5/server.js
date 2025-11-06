const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to Our Home Page");
    res.end();
  } else if (req.url == "/about") {
    res.write("This is our short history");
    res.end();
  }

  res.end(`
    <h1>OPPs</h1>
    <p>We Cann't fild your page what you are looking for </p>
    <a href="/">Please Come Back </a>

    `);
});
console.log("app is running...");
server.listen(3000);

// const http=require("http");

// const server=http.createServer((req, res)=>{
//     res.write("Welcome to our Home Page");
//     res.end();
// })

// console.log("app is running........")
// server.listen(5000);
