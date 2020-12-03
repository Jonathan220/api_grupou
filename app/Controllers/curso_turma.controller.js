
const models = require('../db/models');


let new_curso_turma = [];
exports.store = async (obj, id_curso) =>{
    const curso = await models.curso.findOne({
        where: {
            id: id_curso
        },
    })

    for(let h in obj.turma){
        let turma = obj.turma[h];
        console.log(turma);
        
        const [resultado] = await models.turma.findOrCreate({
            where: turma
        })
        new_curso_turma.push(resultado.id);
    }

    curso.addTurmas(new_curso_turma)

    return true
}

exports.destroy = async (obj, id_curso) =>{
    const curso = await models.curso.findOne({
        where: {
            id: id_curso
        },
    })

    for(let h in obj.turma){
        let turma = obj.turma[h];
        console.log(turma);
        
        const [resultado] = await models.turma.findOrCreate({
            where: turma
        })
        new_curso_turma.push(resultado.id);
    }

    curso.removeTurmas(new_curso_turma)

    return true
}