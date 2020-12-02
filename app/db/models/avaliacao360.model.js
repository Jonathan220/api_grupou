const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Avaliacao360 = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(50)
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

Avaliacao360.associate = (models) =>{
    Avaliacao360.belongsToMany(models.softskill, {
        through: 'avaliacao_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_avaliacao'
        },
        as: 'softskills'
    })

    Avaliacao360.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'aluno'
    })

    Avaliacao360.belongsTo(models.grupo, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'grupo'
    })

    Avaliacao360.belongsTo(models.atividade, {
        foreignKey: {
            name: 'id_atividade'
        },
        as: 'atividade'
    })
}

module.exports = Avaliacao360;