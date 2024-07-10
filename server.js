import http from "http"

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.write(JSON.stringify("Hello there!"));
    res.end(`Server running!`)
})

server.listen(3000,()=>{
    console.log("Hello there!")
})