const http = require('http')
const fs = require('fs')
const port = 80

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('public_art.html', function(error, data){
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Soemthing went completly wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
});
