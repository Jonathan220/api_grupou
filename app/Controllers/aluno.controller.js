const models = require('../db/models');

// GET, POST, PUT, DELETE
// SELECT, INSERT, UPDATE, DELETE
//index GET ALL - pegar todos os registros
//show GET ID - pegar um usuario especifco
//store POST usuario
//update PUT usuario, ID
//destroy DELETE ID

exports.show = async (id) =>{
    const resultado = await models.aluno.findByPk(id, {
        include: ['usuario','harskills']
    });
    return resultado;
}

exports.index = async () =>{
    const resultado = await models.aluno.findAll({
        include: ['usuario', 'harskills']
    });
    return resultado;
}

exports.store = async (aluno) =>{
    const resultado = await models.aluno.create(aluno, {
        include: ['usuario','harskills']
    });
    return resultado;
}

exports.update = async (aluno, id) =>{
    const resultado = await models.aluno.update(aluno, {
        where:{id:id}
    })
    return resultado;
}

exports.destroy = async (id) =>{
    const resultado = await models.aluno.destroy({
        where: {id:id}
    })
    return resultado;
}