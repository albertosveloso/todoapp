const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) //passando server como parametro para as rotas