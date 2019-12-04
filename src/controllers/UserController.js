import User from '../models/User'

class UserController {
  async store (req, res) {
    try {
      const novoUser = await User.create(req.body)
      return res.json(novoUser)
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }
  }

  // Index
  async index (req, res) {
    try {
      const users = await User.findAll()
      return res.status(200).json(users)
    } catch (err) {
      return res.json(null)
    }
  }

  // Show
  async show (req, res) {
    try {
      const { id } = req.params
      const users = await User.findByPk(id)
      return res.status(200).json(users)
    } catch (err) {
      return res.json(null)
    }
  }

  // Update
  async update (req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }
      const user = await User.findByPk(req.params.id)
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }
      const updatedUser = await user.update(req.body)
      return res.json(updatedUser)
    } catch (err) {
      return res.json({
        errors: err.errors.map(e => e.message)
      })
    }
  }
  // Delete
}

export default new UserController()
