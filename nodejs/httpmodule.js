//In this file I will create a basic local server using nodejs
const http = require('http')
const url = require('url')

http.createServer((req, res)=>{
    const urlob = url.parse(req.url,true)
    console.log(urlob.pathname)
    console.log(urlob.query)
}).listen(3000, () => {
    console.log('Server started!!')
})