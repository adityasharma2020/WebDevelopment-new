const os = require("os");

//return the underlying architecture
let mySystemArch = os.arch();
console.log(mySystemArch);

//return information on the CPUs
let myCPUinfo = os.cpus();
// console.log(myCPUinfo);

let hostName = os.hostname();
console.log(hostName);

let networkInfo = os.networkInterfaces();
// console.log(networkInfo);

let release = os.release();
console.log("os.release: "+release);
console.log(os.totalmem());

console.log("os.platform : "+ os.platform());

console.log(os.type());


console.log("os.uptime: "+os.uptime());
let uptimeinMIN = os.uptime()/3600;
console.log(" os.uptime: "+ uptimeinMIN);
console.log(os.userInfo());

// console.log()
