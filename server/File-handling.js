// Task 3: Asynchronous File Handling
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.



const fs = require("fs");
const path = require('path');

const filename = path.join(__dirname, 'data.txt');

function getData() {
  let data = fs.readFileSync(filename, "UTF-8");
  let item = String(data).split(" ");
  item = item?.filter((val) => val);
  let count = item.length;
  return { data, count };
}
console.log(getData());
