const service = require('../service/service')

let controller = {
  async serviceCall (req, res) {
    const retorno = await service.simpleGet()
    res.json(retorno) 
  }
}

module.exports = controller
