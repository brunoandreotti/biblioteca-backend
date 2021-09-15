import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@email.com',
        password: 'admin',
        role: 'admin',
      },
      {
        email: 'normal@email.com',
        password: 'normal',
        role: 'normal',
      },
    ])
  }
}
