const http = require('http');  //http module to create server
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    
    //non blocking req - async req 
    fs.appendFile('log.txt', log, (err, data)=> {
        // switch(req.url)
            switch(myUrl.pathname){
            case '/' :
                res.end("HomePage");
            break;
            case '/about' :
                const username = myUrl.query.myname
                res.end(`Hi, ${username}`);
                // res.end("I am Aman Patel");
            break;
            default:
                res.end("404 Not Found");
        }
        // res.end('Hello From Server');
    });
    // console.log(req);
    // res.end('Hello From Server');
});

myServer.listen(8000, () => console.log("Server Started")
);


