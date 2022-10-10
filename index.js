const express = require('express')
const db = require('./db')

const app = express()
const PORT = 3000

app.use( express.json() )

app.get('/tareas', (req, res) => {
  const tasks = db.getTasks()
  res.status(200).send({
    tasks: tasks
  })
})

app.get('/tareas/:id', (req, res) => {
  const id = req.params.id
  const task = db.getTask(id)
  if (!task) {
    return res.status(404).send({ msg: 'Tarea no encontrada' })
  }

  res.status(200).send(task)
})

app.post('/tareas', (req, res) => {
  const task = req.body
  const newTask = db.addTask(task)
  res.status(201).send(newTask)
})

app.put('/tareas/:id', (req, res) => {
  const id = req.params.id
  const task = req.body
  const updatedTask = db.updateTask(id, task)
  if (!updatedTask) {
    return res.status(404).send({ msg: 'Tarea no encontrada' })
  }
  res.status(200).send(updatedTask)
})

app.delete('/tareas/:id', (req, res) => {
  const id = req.params.id
  const deletedTask = db.deleteTask(id)
  if (!deletedTask) {
    return res.status(404).send({ msg: 'Tarea no encontrada' })
  }
  res.status(200).send(deletedTask)
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`)
})