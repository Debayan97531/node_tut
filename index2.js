// core modules
// global & non--global
// fs,Buffer,HTTP

const fs=require('fs');//non-global
fs.writeFileSync('hello1.txt',"cose step by step");

console.log("->",__dirname);//global
console.log("-->",__filename);

//can directly import fs modules
//const fs=require('fs').writeFileSync;


// basic server create
//function as a parameter
//http handles req,resp while creating server


const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1> hello this is debayan </h1>");
    resp.end();
}).listen(4500);



const fun = (req,resp)=>{
    resp.write("<h1> Debayan this side.. </h1>");
    resp.end();
}
http.createServer(fun).listen(4600);