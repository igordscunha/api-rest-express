import express from "express"
import LivroController from "../controllers/livrosController.js"

const routerLivros = express.Router()

routerLivros
  .get("/livros", LivroController.listarLivros)

  .get("/livros/busca", LivroController.listarLivrosPorEditora)

  .get("/livros/:id", LivroController.listarLivrosPorId)

  .post("/livros", LivroController.postarLivro)

  .put("/livros/:id", LivroController.atualizarLivro)

  .delete("/livros/:id", LivroController.excluirLivro)


export default routerLivros