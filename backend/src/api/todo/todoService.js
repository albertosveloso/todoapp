const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

//Quando atualizar um registro me mostrar o registro atualizado, nao o antigo
Todo.updateOptions({ new: true, runValidators: true})

module.exports = Todo
