import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthStoreValidator } from 'App/Validators/index'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthStoreValidator)

    const token = await auth.attempt(email, password, { expiresIn: '3 days' })

    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
