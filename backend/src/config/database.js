const mongoose = require('mongoose')
mongoose.Promise = global.Promise //removendo mensagem de advertencia
module.exports = mongoose.connect('mongodb://localhost/todo')

