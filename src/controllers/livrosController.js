import livros from '../models/Livro.js'

class LivroController {
  static listarLivros = (req, res) => {
    livros.find()
      .populate('autor')
      .then((livros) => {
        res.status(200).json(livros)
      })
      .catch((err) => {
        res.status(500).send({ message: `${err} - Alguma coisa deu errado...` })
      }
      )
  }

  static listarLivrosPorId = (req, res) => {
    const id = req.params.id
    livros.findById(id)
      .populate('autor')
      .then((livro) => {
        res.status(200).json(livro)
      }).catch((err) => {
        res.status(500).send({ message: `${err.message} - Não foi possível localizar a id do livro` })
      })
  }

  static listarLivrosPorEditora = (req, res) => {
    const editora = req.query.editora
    livros.find({ 'editora': editora })
      .populate('autor')
      .then((livros) => {
        res.status(200).send(livros)
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message} - Não foi possível localizar os livros dessa editora` })
      })

  }

  static postarLivro = (req, res) => {
    try {
      let livro = new livros(req.body)
      livro.save()
      res.status(201).send({ message: 'Livro cadastrado com sucesso...' })
    } catch (err) {
      res.status(500).send({ message: `${err} - falha ao cadastrar livro` })
    }
  }

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id
      await livros.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send({ message: 'Livro editado com sucesso...' })
    } catch (err) {
      res.status(500).send({ message: `${err} - falha ao editar livro` })
    }
  }

  static excluirLivro = async (req, res) => {
    try {
      const id = req.params.id
      await livros.findByIdAndDelete(id)
      res.status(200).send({ message: 'Livro deletado com sucesso...' })
    } catch (err) {
      res.status(500).send({ message: `${err} - falha ao excluir livro` })
    }
  }

}

export default LivroController