const express = require('express')

const app = express()
const PORT = process.env.PORT || 8081

const {
  obterPedido
} = require('../modules/obterPedido')

app.use('/api/pedido', obterPedido)

app.use('/', (req, res) => {
  res.send({mensagem: 'Olá mundo!'})
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})