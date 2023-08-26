import express from 'express'
import routerLivros from './livrosRoutes.js'
import routerAutores from './autoresRoutes.js'

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Página Inicial')
  })

  app.use(
    express.json(),
    routerLivros,
    routerAutores
  )
}

export default routes