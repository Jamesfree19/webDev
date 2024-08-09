const fs = require("fs");

// fs.writeFile("message.txt", "Hello fromNodeJS!", (err) => {
//     if (err) err;
//     console.log("The file has been saved!");
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});