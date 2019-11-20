import Sequelize from 'sequelize'

export default class Aluno extends Sequelize.Model {
  static init (sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT
    }, {
      sequelize
    })
    return this
  }
}
