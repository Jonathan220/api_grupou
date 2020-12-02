const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Grupo = sequelize.define(name, {
    nome_grupo: {
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

Grupo.associate = (models) => {
    Grupo.belongsToMany(models.aluno, {
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'aluno'
    })

    Grupo.hasMany(models.tarefa, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'tarefas'
    })

    Grupo.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'avaliacao'
    })

    Grupo.belongsTo(models.atividade, {
        foreignKey: {
            name: 'id_atividade'
        },
        as: 'atividade'
    })

    Grupo.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })
}

module.exports = Grupo;