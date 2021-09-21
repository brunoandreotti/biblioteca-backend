import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class BookStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    título: schema.string({ trim: true }, [rules.unique({ table: 'books', column: 'title' })]),
    imagem: schema.string({ trim: true }, [
      rules.unique({ table: 'books', column: 'image' }),
      rules.url(),
    ]),
    editora: schema.string({ trim: true }),
    autores: schema.string(),
  })

  public messages = {}
}
