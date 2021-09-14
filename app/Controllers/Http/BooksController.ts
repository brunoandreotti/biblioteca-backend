import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'

export default class BooksController {
  public async index({}: HttpContextContract) {
    const books = await Book.all()

    return books
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['título', 'editora', 'imagem', 'autores'])

    const book = await Book.create(data)

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
    const data = request.only(['título', 'editora', 'imagem', 'autores'])

    if (!book) {
      return response.notFound({ error: { message: `Book not found!` } })
    }

    book.merge(data)
    await book.save()

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
