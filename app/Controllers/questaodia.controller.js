const models = require('../db/models');

// GET, POST, PUT, DELETE
// SELECT, INSERT, UPDATE, DELETE
//index GET ALL - pegar todos os registros
//show GET ID - pegar um usuario especifco
//store POST usuario
//update PUT usuario, ID
//destroy DELETE ID

exports.show = async (id) =>{
    const resultado = await models.questaodia.findByPk(id,{
        include: ['aluno', 'questao']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.questaodia.findAll({
        include: ['aluno', 'questao']
    });
    return resultado;
}

exports.store = async (questaodia) =>{
    const resultado = await models.questaodia.create(questaodia);
    return resultado;
}

exports.update = async (questaodia, id) =>{
    const resultado = await models.questaodia.update(questaodia, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.questaodia.destroy({
        where: {id:id}
    })
    return resultado;
}