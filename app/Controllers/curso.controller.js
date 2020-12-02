const models = require('../db/models');


exports.show = async (id) =>{
    const resultado = await models.curso.findByPk(id);
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.curso.findAll();
    return resultado;
}

exports.store = async (curso) =>{
    const resultado = await models.curso.create(curso);
    return resultado;
}

exports.update = async (curso, id) =>{
    const resultado = await models.curso.update(curso, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.curso.destroy({
        where: {id:id}
    })
    return resultado;
}