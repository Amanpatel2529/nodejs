const fs = require("fs");

//synchronous call
// fs.writeFileSync("./test.txt", "Hey there!");

//async call
// fs.writeFile("./test.txt", "Hey there! async", (err)=> {});

//sync call - print results directly
// const result = fs.readFileSync('./test.txt', 'utf-8');
// console.log(result);


//async call - need to give callback func for error and result
fs.readFile("./test.txt", "utf-8", (err, result) =>{
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
})


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString()); 
// fs.appendFileSync('./test.txt', 'Hey there\n'); //write without override the file

// fs.cpSync("./test.txt", "./copy.txt"); //copy file 

// console.log(fs.statSync("./test.txt")); //log state, what changes made when


// fs.mkdirSync("my_doc")  //create directory
// fs.mkdirSync("my_docs/aman/personal", {recursive:true}) //create directory recursively


// fs.unlinkSync("./copy.txt");  //delete file


