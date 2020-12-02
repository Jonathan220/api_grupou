const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Tarefa = sequelize.define(name, {
    nome: {
        type: DataTypes.STRING(50)
    },
    descricao: {
        type: DataTypes.STRING(100)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
},{
    sequelize,
    tableName: name,
});

Tarefa.associate = (models) =>{
    Tarefa.belongsTo(models.aluno, {
        foreignKey:{
            name: 'id_aluno'
        },
        as: 'aluno'
    })
    Tarefa.belongsTo(models.grupo, {
        foreignKey:{
            name: 'id_grupo'
        },
        as: 'grupo'
    })
}

module.exports = Tarefa;