const models = require('../db/models');


exports.show = async (id) =>{
    const resultado = await models.professor.findByPk(id, {
        include: ['usuario']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.professor.findAll({
        include: ['usuario']
    });
    return resultado;
}

exports.store = async (professor) =>{
    const resultado = await models.professor.create(professor, {
        include: ['usuario']
    });
    return resultado;
}

exports.update = async (professor, id) =>{
    const resultado = await models.professor.update(professor, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.professor.destroy({
        where: {id:id}
    })
    return resultado;
}