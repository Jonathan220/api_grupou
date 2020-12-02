const models = require('../db/models');
const Usuario = require('../db/models/usuario.model');

// GET, POST, PUT, DELETE
// SELECT, INSERT, UPDATE, DELETE
//index GET ALL - pegar todos os registros
//show GET ID - pegar um usuario especifco
//store POST usuario
//update PUT usuario, ID
//destroy DELETE ID

exports.show = async (id) =>{
    const resultado = await models.usuario.findByPk(id, {
        include: ['aluno', 'questoes']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.usuario.findAll();
    return resultado;
}

exports.store = async (usuario) =>{
    const resultado = await models.usuario.create(usuario, {
        include: ['aluno', 'questoes']
    });
    return resultado;
}

exports.update = async (usuario, id) =>{
    const resultado = await models.usuario.update(usuario, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.usuario.destroy({
        where: {id:id}
    })
    return resultado;
}