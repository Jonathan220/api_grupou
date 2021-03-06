const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Questao = sequelize.define(name, {
    descricao: {
        type: DataTypes.TEXT,
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

Questao.associate = (models) => {
    Questao.belongsTo(models.usuario, {
        foreignKey:{
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Questao.hasMany(models.questaodia, {
        foreignKey: {
            name: 'id_questao'
        },
        as: 'questaodia'
    })

    Questao.belongsTo(models.hardskill, {
        foreignKey:{
            name: 'id_hardskill'
        },
        as: 'hardskill'
    })
}
module.exports = Questao;