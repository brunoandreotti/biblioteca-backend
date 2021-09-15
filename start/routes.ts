import Route from '@ioc:Adonis/Core/Route'
import('./routes/auth')
import('./routes/posts')

Route.get('/', async () => {
  return 'Sistema de Gerenciamento da Biblioteca'
})
