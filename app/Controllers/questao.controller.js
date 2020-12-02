const models = require('../db/models');

// GET, POST, PUT, DELETE
// SELECT, INSERT, UPDATE, DELETE
//index GET ALL - pegar todos os registros
//show GET ID - pegar um usuario especifco
//store POST usuario
//update PUT usuario, ID
//destroy DELETE ID

exports.show = async (id) =>{
    const resultado = await models.questao.findByPk(id, {
        include: ['usuario']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.questao.findAll({
        include: ['usuario']
    });
    return resultado;
}

exports.store = async (questao) =>{
    const resultado = await models.questao.create(questao, {
        include: ['usuario']
    });
    return resultado;
}

exports.update = async (questao, id) =>{
    const resultado = await models.questao.update(questao, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.questao.destroy({
        where: {id:id}
    })
    return resultado;
}