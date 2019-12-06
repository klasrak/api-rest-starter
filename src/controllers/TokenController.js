import User from '../models/User'

import jwt from 'jsonwebtoken'

class TokenController {
  async store (req, res) {
    const { email = '', password = '' } = req.body
    if (!email || !password) {
      return res.status(400).json({
        errors: ['Credenciais inválidas']
      })
    }
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe']
      })
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida']
      })
    }
    const { id } = user
    const token = jwt.sign({ id, email }, process.env.SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRATION })
    return res.json({ auth: true, token })
  }
}

export default new TokenController()
