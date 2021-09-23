import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, CherryPick } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

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
  public autores: string

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  @column.dateTime({
    autoCreate: true,
    serializeAs: 'createdAt',
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serializeAs: 'updatedAt',
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public updatedAt: DateTime

  public serialize(cherryPick?: CherryPick) {
    return {
      ...this.serializeAttributes(cherryPick?.fields, false),
      ...this.serializeComputed(cherryPick?.fields),
      ...this.serializeRelations(
        {
          user: {
            fields: ['id', 'email', 'name'],
          },
        },
        false
      ),
    }
  }
}
