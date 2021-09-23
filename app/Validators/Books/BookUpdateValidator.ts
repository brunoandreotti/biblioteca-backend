import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class BookUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    título: schema.string.optional({ trim: true }),
    imagem: schema.string.optional({ trim: true }, [rules.url()]),
    editora: schema.string.optional({ trim: true }),
    autores: schema.string.optional(),
  })

  public messages = {}
}
