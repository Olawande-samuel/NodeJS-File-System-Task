const fs = require("fs");
const fetch = require("node-fetch");

fetch("http://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const newData = JSON.stringify(data);
    if (!fs.existsSync("result")) {
      fs.mkdir("result", (err) => {
        if (err) return err;

        fs.writeFile("./result/posts.json", newData, (err) => {
          if (err) return err;
          console.log("directory created");
        });
      });
    } else {
      console.log("error! directory exists");
    }
  });
