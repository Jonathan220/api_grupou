const models = require('../db/models');

// GET, POST, PUT, DELETE
// SELECT, INSERT, UPDATE, DELETE
//index GET ALL - pegar todos os registros
//show GET ID - pegar um usuario especifco
//store POST usuario
//update PUT usuario, ID
//destroy DELETE ID

exports.show = async (id) =>{
    const resultado = await models.hardskill.findByPk(id, {
        include: ['aluno']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.hardskill.findAll();
    return resultado;
}

exports.store = async (hardskill) =>{
    const resultado = await models.hardskill.create(hardskill, {
        include: ['aluno']
    });
    return resultado;
}

exports.update = async (hardskill, id) =>{
    const resultado = await models.hardskill.update(hardskill, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.hardskill.destroy({
        where: {id:id}
    })
    return resultado;
}