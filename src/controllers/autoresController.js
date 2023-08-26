import autores from "../models/Autor.js"

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find()
      res.status(200).json(autoresResultado)
    } catch (err) {
      res.status(500).send({message: `${err} - Alguma coisa deu errado...`})
    }
  }

  static listarAutoresPorId = async (req, res) => {
    try {
      const id = req.params.id
      const autorResultado = await autores.findById(id)
      res.status(200).json(autorResultado)
    } catch(err){
      res.status(500).send({message: `${err.message} - Não foi possível localizar a id do autor`})
    }
  }

  static postarAutor = (req, res) => {
    try {
      let autor = new autores(req.body)
      autor.save()
      res.status(201).send({message: 'Autor cadastrado com sucesso...'})
    }catch(err){
      res.status(500).send({message: `${err} - falha ao cadastrar autor`})
    }
  }

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id
      await autores.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'Autor editado com sucesso...'})
    } catch (err) {
      res.status(500).send({message: `${err} - falha ao editar autor`})
    }
  }

  static excluirAutor = async (req, res) => {
    try {
      const id = req.params.id
      await autores.findByIdAndDelete(id)
      res.status(200).send({message: 'Autor deletado com sucesso...'})
    }catch(err){
      res.status(500).send({message: `${err} - falha ao excluir autor`})
    }
  }

}

export default AutorController