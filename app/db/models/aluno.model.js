const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Aluno = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name,
    timestamps: false
});

// Aluno recebe a chave estrangeira para usuarios em uma relação uma para um
Aluno.associate = (models) =>{
    Aluno.belongsTo(models.usuario, {
        foreignKey: {
            name:'id_usuario'
        },
        as: 'usuario'
    })

    Aluno.belongsToMany(models.hardskill, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'harskills'
    })

    Aluno.hasMany(models.tarefa, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'tarefas'
    })

    Aluno.belongsToMany(models.softskill, {
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'softskills'
    })

    Aluno.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'avaliacoes'
    })

    Aluno.hasMany(models.questaodia, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'questaodia'
    })

    Aluno.belongsToMany(models.grupo, {
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'grupo'
    })

    Aluno.belongsToMany(models.turma, {
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'turma'
    })

    Aluno.belongsTo(models.curso, {
        foreignKey: {
            name:'id_curso'
        },
        as: 'curso'
    })
}


module.exports = Aluno;