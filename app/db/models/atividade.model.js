const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Atividade = sequelize.define(name, {
    descricao: {
        type: DataTypes.TEXT
    },
    nota :{
        type: DataTypes.FLOAT
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

Atividade.associate = (models) =>{
    Atividade.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_atividade'
        },
        as: 'avaliacao'
    })

    Atividade.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_atividade'
        },
        as: 'grupo'
    })

    Atividade.belongsToMany(models.hardskill, {
        through: 'atividade_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_atividade'
        },
        as: 'hardskill'
    })

    Atividade.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })
}


module.exports = Atividade;