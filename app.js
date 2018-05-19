const http = require('http');

const portno =3000;
const hostname ='localhost'
http.createServer((req,resp)=>{
resp.end('hi Bhaskar');
}).listen(portno,hostname,()=>{
    console.log(`Server runs at http://${hostname}:${portno}/`);
})