const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// Armazenamento em memória
let estudantes = [
  {
    nome: "João Silva",
    idade: 22,
    matricula: "A12345",
    cursos: ["Matemática", "Física", "Química"]
  }
]

app.get('/estudantes', (req, res) => {
  res.json(estudantes)
})

app.get('/estudantes/:matricula', (req, res) => {
  const estudante = estudantes.find(e => e.matricula === req.params.matricula)
  if (estudante) {
    res.json(estudante)
  } else {
    res.status(404).send('Estudante não encontrado - 🌫️')
  }
})

app.post('/estudantes', (req, res) => {
  const novoEstudante = req.body
  estudantes.push(novoEstudante)
  res.status(201).send('Estudante adicionado com sucesso - ✅')
})

app.delete('/estudantes', (req, res) => {
  estudantes = []
  res.send('Todos os estudantes foram removidos - ❌')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`🤟 Servidor rodando na porta ${PORT}`)
})

module.exports = app
