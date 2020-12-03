
const models = require('../db/models');


let new_aluno_softskill = [];
exports.store = async (obj, id_aluno) =>{
    const aluno = await models.aluno.findOne({
        where: {
            id: id_aluno
        },
    })

    for(let h in obj.softskill){
        let softskill = obj.softskill[h];
        console.log(softskill);
        
        const [resultado] = await models.softskill.findOrCreate({
            where: softskill
        })
        new_aluno_softskill.push(resultado.id);
    }

    aluno.addSoftskills(new_aluno_softskill)

    return true
}

exports.destroy = async (obj, id_aluno) =>{
    const aluno = await models.aluno.findOne({
        where: {
            id: id_aluno
        },
    })

    for(let h in obj.softskill){
        let softskill = obj.softskill[h];
        console.log(softskill);
        
        const [resultado] = await models.softskill.findOrCreate({
            where: softskill
        })
        new_aluno_softskill.push(resultado.id);
    }

    aluno.removeSoftskills(new_aluno_softskill)

    return true
}