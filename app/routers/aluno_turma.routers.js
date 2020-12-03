module.exports = (() => {
    const alunoTurmaController = require("../Controllers/aluno_turma.controller");

    var router = require("express").Router();

    router.post("/:id",async (req, res) =>{
        const turma = await alunoTurmaController.store(req.body, req.params.id);
        res.json(turma);
    })

    router.delete("/:id", async (req, res) => {
        const turma = await alunoTurmaController.destroy(req.body, req.params.id);
        res.json(turma);
    })

    return router;
})()