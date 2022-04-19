"use strict";

var fs = require("fs");

fs.readFileSync(p, "utf8", function (err, data) {
  if (err) {
    console.log(err);
  }

  console.log(data);
});