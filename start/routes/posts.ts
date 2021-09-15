import Route from '@ioc:Adonis/Core/Route'

Route.get('/obras', 'BooksController.index').middleware(['auth', 'acl:admin,normal'])
Route.get('/obras/:id', 'BooksController.show').middleware(['auth', 'acl:admin,normal'])
Route.post('/obras', 'BooksController.store').middleware(['auth', 'acl:admin'])
Route.put('/obras/:id', 'BooksController.update').middleware(['auth', 'acl:admin'])
Route.delete('/obras/:id', 'BooksController.destroy').middleware(['auth', 'acl:admin'])
