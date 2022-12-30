// install express with `npm install express` 
const express = require('express')
const app = express()
const PORT = 3020
const cors = require("cors")
app.use(cors())
app.listen( PORT, () => {
    console.log("listening on port 3020")
})

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/link', (req, res) => {
var bases = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "/",
      "=",
    ];
var website = req.query.website


      try {
        var urled = new URL(website);
        // Make sure the URL is http or https
        if (urled.protocol !== "https:" && urled.protocol !== "http:") {
          console.log("invalid url protocol")
          return;
        }
      } catch {
        try {
          // Attempt to add a protocol if it is missing
          website = "https://" + website;
        } catch {
          console.log("Input is not a URL.")
          return;
        }
      }
    const base64 = Buffer.from(website).toString('base64');

      var base64arr = base64.split("");
      var output = "";
      // Generate a 9-bit binary string for each character in the base64 string
      for (var i = 0; i < base64arr.length; i++) {
        var index = bases.indexOf(base64arr[i]);
        output += index
          .toString(2)
          .padStart(9, "0")
          .replaceAll("0", "o")
          .replaceAll("1", "O");
      }
      var url =
        "https:" +
        "//" +
        "thisisashort.link" +
        "/l" +
        output +
        "ng";
      res.send(url)
})


