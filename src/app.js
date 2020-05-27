const Express = require('express')

const app = new Express()

const controller = require('./app/controller/controller')

app.use(Express.json())

app.get('/', controller.serviceCall )

module.exports = app
