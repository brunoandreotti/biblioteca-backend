import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class BookUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    título: schema.string({ trim: true }),
    imagem: schema.string({ trim: true }, [rules.url()]),
    editora: schema.string({ trim: true }),
    autores: schema.string(),
  })

  public messages = {}
}
