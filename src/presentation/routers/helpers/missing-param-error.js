module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing required parameter: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
