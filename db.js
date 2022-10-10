/*
  Estructura
  [
    {
      id: 1665419493102,
      name: 'Tarea random',
      details: 'Detalles de la tarea random'
    },
    .
    .
    .
  ]
*/
const tasks = []

const generateId = () => {
  return Date.now()
}

// ----------------------------------------------

const getTasks = () => {
  return tasks
}

const getTask = (id) => {
  return tasks.find(task => task.id == id)
}

const addTask = (task) => { 
  const newTask = {
    id: generateId(),
    name: task.name,
    details: task.details
  }
  tasks.push(newTask)
  return newTask
}

const updateTask = (id, task) => {
  const index = tasks.findIndex(task => task.id == id)
  if (index === -1) {
    return null
  }
  tasks[index].name = task.name
  tasks[index].details = task.details
  return tasks[index]
}

const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id == id)
  if (index === -1) {
    return null
  }
  const deletedTask = tasks[index]
  tasks.splice(index, 1)
  return deletedTask
}

module.exports = {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask
}