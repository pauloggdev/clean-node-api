// const LoginRouter = require('./login-router')
// const MissingParamError = require('./helpers/missing-param-error')
describe('Login Router', () => {
  test('should', () => {
    expect(2).toBe(2)
  })
  /**
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httResponse = sut.route(httpRequest)
    expect(httResponse.statusCode).toBe(400)
    expect(httResponse.body).toEqual(new MissingParamError('email'))
  })
  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'any_email@gmail.com'
      }
    }
    const httResponse = sut.route(httpRequest)
    expect(httResponse.statusCode).toBe(400)
    expect(httResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httResponse = sut.route()
    expect(httResponse.statusCode).toBe(500)
  })
  test('Should return 500 if no httpRequest has no body', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httResponse = sut.route(httpRequest)
    expect(httResponse.statusCode).toBe(500)
  })
     */
})
