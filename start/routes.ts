import Route from '@ioc:Adonis/Core/Route'

Route.get('/obras', 'BooksController.index')
Route.get('/obras/:id', 'BooksController.show')
Route.post('/obras', 'BooksController.store')
Route.put('/obras/:id', 'BooksController.update')
Route.delete('/obras/:id', 'BooksController.destroy')
