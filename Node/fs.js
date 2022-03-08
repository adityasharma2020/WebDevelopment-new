// * Require method ,goes to the file that is needed to be required .Execute that file.And if there is something that is returned or exported we get that.


// fs --> file system module

const fs = require("fs"); 
console.log(fs);
//or
const abc = require("../JS/temp");//require("path of file");
//require to call fs module in this our file fs.js by specifing its path.

console.log(abc); //this will return {} i.e an object. 

let ans  = abc.add(2,4);
console.log(ans);


//appendfileSync appends data into a file, if file is not present , it creates the file and then appends the  data.
// let res = fs.appendFileSync("f1.txt","hello");
// console.log(fs); //to see all the functions in fs module.
// let data  = fs.readFileSync("f1.txt");
// console.log(data); // if we run directly this this willl give a buffer data.

// console.log(data+"");// automatic conversion from buffer to string.
//  data =  fs.readFileSync("f1.txt", "utf-8");
//  console.log(data);
 

 
