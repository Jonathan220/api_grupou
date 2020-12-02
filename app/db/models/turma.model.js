const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Turma = sequelize.define(name, {
    numero: {
        type: DataTypes.INTEGER
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

Turma.associate = (models) =>{
    Turma.belongsToMany(models.aluno, {
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'aluno'
    })

    Turma.belongsToMany(models.hardskill, {
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'hardskill'
    })

    Turma.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'grupos'
    })

    Turma.hasMany(models.atividade, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'atividades'
    })

    Turma.belongsTo(models.disciplina, {
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'disciplina'
    })

    Turma.belongsToMany(models.professor, {
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professor'
    })

    Turma.belongsToMany(models.curso, {
        through: 'curso_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'cursos'
    })
}

module.exports = Turma;