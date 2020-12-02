const {DataTypes} = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Usuario = sequelize.define(name, {
    nome_completo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        field:'criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field:'atualizado_em'
    }
    
},{
    sequelize,
    tableName: name,
});

//Para que a apartir de usuário possa chegar em aluno
Usuario.associate = (models) => {
    Usuario.hasOne(models.aluno, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'aluno'
    })

    Usuario.hasOne(models.professor, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'professor'
    })

    Usuario.hasMany(models.questao, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'questoes'
    })
}


module.exports = Usuario;