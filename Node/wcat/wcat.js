//1. node wcat.js filepath => displays the contents of a file in terminal.
// 2. node wcat.js filename1 filename2 filename3 => dispalys the contents of the all files in terminal in concatinated form in given order.

const fs = require('fs');

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let filesArr = [];
let optionsArr = [];
//===========> placed files path in filesArr  <=============
for (let i = 0; i < inputArr.length; i++) {
  let firstchar = inputArr[i].charAt(0);
  console.log(firstchar);

  if (firstchar == '-') {
    optionsArr.push(inputArr[i]);
  } else {
    filesArr.push(inputArr[i]);
  }
}
// console.log("files to be read are  : "+ filesArr);

//===========> check if all the files are present <==========

for (let i = 0; i < filesArr.length; i++) {
  let doesExist = fs.existsSync(filesArr[i]);
  if (!doesExist) {
    console.log('one or more file(s) does not exist');
    // return;
    process.exit();
  }
}

//=========>  content read and appending starts <===========

let content = '';
for (let i = 0; i < filesArr.length; i++) {
  let filecontent = fs.readFileSync(filesArr[i]);
  content = content + filecontent + '\r\n'; // \r \n for windows
}

console.log(content);

let contentArr = content.split('\r\n');
console.log(contentArr);

//==> check if -s is present or not

let isPresent = optionsArr.includes('-s');
let tempArr = [];
if (isPresent) {

  for(let i=1; i<contentArr.length;i++){
      if(contentArr[i] == "" && contentArr[i-1] ==""){
          contentArr[i] = null;

      }else if(contentArr[i] == "" && contentArr[i-1] == null){
          contentArr[i] = null;
      }
  }

  console.table(contentArr);

  
  
  //push everything in tempArr except null

  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] != null) {
      tempArr.push(contentArr[i]);
    }
  }

  console.table(tempArr);
}

contentArr = tempArr;

// check 

let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("-b");

let finalOption = [];
//if both -n and -b are present
if(indexOfB !=-1 && indexOfN!=-1){
if(indexOfN <indexOfB){
    finalOption = indexOfN;
}else{
    finalOption = indexOfB;
}
}else{
    // either -n is present or  -b is present
    if(indexOfN !=-1){
        finalOption = "-n";
    }
    else if(indexOfB != -1){
        finalOption = "-b";
}

}

//calling of function by evaluatin final option
if(finalOption == "-n"){
    modifyContentByN();
}else if(finalOption == "-b"){
    modifyContentByB();
}


function modifyContentByB(){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i] = (i+1)+ ")"+ contentArr[i]; 
    }
}

function modifyContentByN(){
    

    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] != ""){
            contnetArr[i] = (i+1)+")" + contnetArr[i];
        }
    }

}


console.table(contentArr);



