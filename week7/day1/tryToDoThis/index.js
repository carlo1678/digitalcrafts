const express = require("express");
const app = express();
const { readFile, read } = require("fs");

const PORT = 3005;

// routes
// 1 Default page aka / *
// 2 /home page
// 3 /about page
// 4 FAQ
// 5 messages

app.get("/", (req, res) => {
  readFile("./mainPage.html", "utf8", (err, html) => {
      res.send(html)
  })
});

app.get("/home", (req, res) => {
    readFile("./homePage.html", "utf8", (err, html) => {
        res.send(html)
    })
});

app.get("/about", (req, res) => {
    readFile("./aboutPage.html", "utf8", (err, html) => {
        res.send(html)
    })
});

app.get("/faq", (req, res) => {
    readFile("./FAQpage.html", "utf8", (err, html) => {
        res.send(html)
    })
});

app.get("/click", (req, res) => {
  const message = "Welcome to my thonking page 🤔";
  res.send(message);
});


// app.post("/messages", (req, res) => {
//   const message = "Post a message";
//   res.send(message);
// });

// app.get("*", (req, res) => {
//   const message = "Uh oh, this page is not real 🤭";
//   readFile("./index.html", "utf8", (err, html) => {
//     res.send(html);
//   });
// });

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
});

