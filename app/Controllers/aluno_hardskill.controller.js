
const models = require('../db/models');

// GET, POST, PUT, DELETE
// SELECT, INSERT, UPDATE, DELETE
//index GET ALL - pegar todos os registros
//show GET ID - pegar um usuario especifco
//store POST usuario
//update PUT usuario, ID
//destroy DELETE ID

let new_aluno_hardskill = [];
exports.store = async (obj, id_aluno) =>{
    const aluno = await models.aluno.findOne({
        where: {
            id: id_aluno
        },
    })

    for(let h in obj.hardskill){
        let hardskill = obj.hardskill[h];
        console.log(hardskill);
        
        const [resultado] = await models.hardskill.findOrCreate({
            where: hardskill
        })
        new_aluno_hardskill.push(resultado.id);
    }

    aluno.addHarskills(new_aluno_hardskill)

    return true
}

exports.destroy = async (obj, id_aluno) =>{
    const aluno = await models.aluno.findOne({
        where: {
            id: id_aluno
        },
    })

    for(let h in obj.hardskill){
        let hardskill = obj.hardskill[h];
        console.log(hardskill);
        
        const [resultado] = await models.hardskill.findOrCreate({
            where: hardskill
        })
        new_aluno_hardskill.push(resultado.id);
    }

    aluno.removeHarskills(new_aluno_hardskill)

    return true
}