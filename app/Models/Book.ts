import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'title' })
  public título: string

  @column({ columnName: 'publisher' })
  public editora: string

  @column({ columnName: 'image' })
  public imagem: string

  @column({ columnName: 'authors' })
  public autores: string[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
