import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'
import { BookStoreValidator, BookUpdateValidator } from 'App/Validators/index'

export default class BooksController {
  public async index({}: HttpContextContract) {
    const books = await Book.query().orderBy('id', 'desc').preload('user')

    return books
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(BookStoreValidator)

    const user = await auth.authenticate()

    const book = await Book.create({ userId: user.id, ...data })

    await book.preload('user')

    return book
  }

  public async show({ params, response }: HttpContextContract) {
    const book = await Book.find(params.id)

    if (!book) {
      return response.notFound({ error: { message: `Book not found!` } })
    }

    return book
  }

  public async update({ params, response, request }: HttpContextContract) {
    const book = await Book.find(params.id)
    const data = await request.validate(BookUpdateValidator)

    if (!book) {
      return response.notFound({ error: { message: `Book not found!` } })
    }

    book.merge(data)
    await book.save()

    await book.preload('user')

    return book
  }

  public async destroy({ params, response }: HttpContextContract) {
    const book = await Book.find(params.id)

    if (!book) {
      return response.notFound({ error: { message: `Book not found!` } })
    }

    await book.delete()
  }
}
