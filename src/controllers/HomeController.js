import Aluno from '../models/Aluno'

class HomeController {
  async index (req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'maria@gmail.com',
      idade: 31,
      peso: 52,
      altura: 1.74
    })
    res.send(novoAluno)
  }
}

export default new HomeController()
