const models = require('../db/models');


exports.show = async (id) =>{
    const resultado = await models.atividade.findByPk(id, {
        include: ['turma']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.atividade.findAll({
        include: ['turma']
    });
    return resultado;
}

exports.store = async (atividade) =>{
    const resultado = await models.atividade.create(atividade, {
        include: ['turma']
    });
    return resultado;
}

exports.update = async (atividade, id) =>{
    const resultado = await models.atividade.update(atividade, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.atividade.destroy({
        where: {id:id}
    })
    return resultado;
}