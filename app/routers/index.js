const usuario = require('./usuario.routers');
const hardskill = require('./hardskill.routers');
const questao = require('./questao.routers');
const aluno = require('./aluno.routers');
const alunoHardskills = require('./aluno_hardskill.routers');
const atividade = require('./atividade.routers');
const avaliacao360 = require('./avaliacao360.routers');
const curso = require('./curso.routers');
const disciplina = require('./disciplina.routers');
const grupo = require('./grupo.routers');
const professor = require('./professor.routers');
const questaodia = require('./questaodia.routers');
const softskill = require('./softskill.routers');
const tarefa = require('./tarefa.routers');
const turma = require('./turma.routers');
const alunoSoftskills = require('./aluno_softskill.routers');
const alunoGrupo = require('./aluno_grupo.routers');
const alunoTurma = require('./aluno_turma.routers');
const cursoTurma = require('./curso_turma.routers');
const professorDisciplina = require('./professor_disciplina.routers');

module.exports = app => {
    //endereço a ser acessado para o envio de requisição ao usuario
    app.use('/api/usuario', usuario);
    app.use('/api/hardskill', hardskill);
    app.use('/api/questao', questao);
    app.use('/api/aluno', aluno);
    app.use('/api/aluno_hardskills', alunoHardskills);
    app.use('/api/atividade', atividade);
    app.use('/api/avaliacao360', avaliacao360);
    app.use('/api/curso', curso);
    app.use('/api/disciplina', disciplina);
    app.use('/api/grupo', grupo);
    app.use('/api/professor', professor);
    app.use('/api/questaodia', questaodia);
    app.use('/api/softskill', softskill);
    app.use('/api/tarefa', tarefa);
    app.use('/api/turma', turma);
    app.use('/api/aluno_softskill', alunoSoftskills);
    app.use('/api/aluno_grupo', alunoGrupo);
    app.use('/api/aluno_turma', alunoTurma);
    app.use('/api/curso_turma', cursoTurma);
    app.use('/api/professor_disciplina', professorDisciplina);
}