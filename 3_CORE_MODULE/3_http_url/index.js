const http = require('http')
const port = 3333
//localhost:3333/nome=karine
const server = http.createServer((req, res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    //res.writeHead(200,{});
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if(!name){
        res.end('<h1>Preencha seu nome:</h1> <form method="GET"> <input type="text" name="name"/> <input type="submit" value="Enviar"> </form>')
    }else{
        res.write(`<h1>Bem vindo ${name}</h1>`)
    }
})

server.listen(port, ()=>{
    console.log("Servidor on 😎")
})