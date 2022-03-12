let http = require('http')

http.createServer((req, res) => {
  // Aqui dentro fica tudo do server
}).listen(8000)

console.log('Aplicação rodando em http://localhost:8000')