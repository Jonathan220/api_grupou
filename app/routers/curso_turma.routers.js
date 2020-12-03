module.exports = (() => {
    const cursoTurmaController = require("../Controllers/curso_turma.controller");

    var router = require("express").Router();

    router.post("/:id",async (req, res) =>{
        const turma = await cursoTurmaController.store(req.body, req.params.id);
        res.json(turma);
    })

    router.delete("/:id", async (req, res) => {
        const turma = await cursoTurmaController.destroy(req.body, req.params.id);
        res.json(turma);
    })

    return router;
})()