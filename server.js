import app from './src/app.js'

const port = process.env.port || 3000

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}/`)
})











// const rotas = {
//   '/': 'Pagina Inicial',
//   '/livros': 'Pagina de Livros',
//   '/autores': 'Pagina dos Autores',
//   '/sobre': 'Pagina sobre'
// }

// const server = http.createServer ((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end(rotas[req.url])
// })

// server.listen(port, () => {
//   console.log(`Servidor escutando na porta http://localhost:${port}`)
// })