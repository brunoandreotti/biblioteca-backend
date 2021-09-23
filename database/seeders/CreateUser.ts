import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Administrador',
        email: 'admin@email.com',
        password: 'admin',
        role: 'admin',
      },
      {
        name: 'Normal',
        email: 'normal@email.com',
        password: 'normal',
        role: 'normal',
      },
    ])
  }
}
