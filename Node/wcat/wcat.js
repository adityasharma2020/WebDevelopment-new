//1. node wcat.js filepath => displays the contents of a file in terminal.
// 2. node wcat.js filename1 filename2 filename3 => dispalys the contents of the all files in terminal in concatinated form in given order.

const fs = require("fs");

let inputArr = process.argv.slice(2);
// console.log(inputArr);


let filesArr = [];
let optionsArr = [];
//===========> placed files path in filesArr  <=============
for(let i = 0;i< inputArr.length;i++){
    let firstchar = inputArr[i].charAt(0);
    console.log(firstchar);

    if(firstchar == "-"){
        optionsArr.push(inputArr[i]);
    }else{

        filesArr.push(inputArr[i]);
    }

}
// console.log("files to be read are  : "+ filesArr); 

//===========> check if all the files are present <==========

for(let i=0;i<filesArr.length;i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("one or more file(s) does not exist");
        return;
    }
}

//=========>  content read and appending starts <===========

let content   = "";
for(let i=0;i<filesArr.length;i++){
    let filecontent = fs.readFileSync(filesArr[i]);
    content = content +filecontent + "\n";
}

console.log(content);


let contentArr = content.split("\r\n");
console.log(contentArr);

