let inputArr = process.argv.slice(2);
const fs =require("fs");


// we make this because if someone write many files names in command we should collect them in a array


let filesArr = [];
let optionsArr = [];

//place files path in filesArr
for(let i=0;i<inputArr.length;i++){

    //here we are making first char also in loop because thetir can be more than one flag , so we have to check all the inuts and see whether their fist char is - or not.
    let firstchar = inputArr.[i].charAt(0);

    if(firstchar == "-"){
        optionsArr.push(inputArr[i]);
    }else{

    
    filesArr.push(inputArr[i]);
    }
}


//for cheking all files given by user are persent or not

for(let i=0;i<filesArr.length;i++){
    let doesExist = fs.existsSync(filesArr[i]);

    if(!doesExist){
        console.log("files does not exist");
        return;
    }

}


// content reading and appending starts
let content = "";

for(let i=0;i<filesArr.length;i++){
    let fileContent = fs.readFileSync(filesArr[i]);

    content = content + fileContent + "\n";
}

console.log(content);

//Give niumbering  to each line for flag  -n
let contentArr = content.split("\n");
