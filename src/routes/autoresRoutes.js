import express from "express"
import AutorController from "../controllers/autoresController.js"

const routerAutores = express.Router()

routerAutores
  .get("/autores", AutorController.listarAutores)

  .get("/autores/:id", AutorController.listarAutoresPorId)

  .post("/autores", AutorController.postarAutor)

  .put("/autores/:id", AutorController.atualizarAutor)

  .delete("/autores/:id", AutorController.excluirAutor)


export default routerAutores