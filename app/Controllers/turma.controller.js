const models = require('../db/models');

exports.show = async (id) =>{
    const resultado = await models.turma.findByPk(id,{
        include: ['disciplina']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.turma.findAll({
        include: ['disciplina']
    });
    return resultado;
}

exports.store = async (turma) =>{
    const resultado = await models.turma.create(turma, {
        include: ['disciplina']
    });
    return resultado;
}

exports.update = async (turma, id) =>{
    const resultado = await models.turma.update(turma, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.turma.destroy({
        where: {id:id}
    })
    return resultado;
}