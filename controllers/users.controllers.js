const UsersService = require('../services/users.service')
const { getPagination, getPagingData } = require('../utils/helpers')

const usersService = new UsersService()

const getStates = async (request, response, next) => {
  try {
    let query = request.query
    let { page, size } = query
    const { limit, offset } = getPagination(page, size, '10')
    query.limit = limit
    query.offset = offset

    let states = await usersService.findAndCount(query)
    const results = getPagingData(states, page, limit)
    return response.json({ results: results })

  } catch (error) {
    next(error)
  }
}

const getState = async (request, response, next) => {
  try {
    let {id} = request.params
    let states = await usersService.getAuthUserOr404(id)
    return response.json({ results: states }) 
  } catch (error) {
    next(error)
  }
}

const updateState = async (request, response, next) => {
  try {
    let { id } = request.params
    let { body } = request
    let state = await usersService.updateUser(id, { body })
    return response.json({ results: state })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getStates,
  updateState,
  getState
}