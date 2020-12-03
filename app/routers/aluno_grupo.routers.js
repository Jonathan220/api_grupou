module.exports = (() => {
    const alunoGrupoController = require("../Controllers/aluno_grupo.controller");

    var router = require("express").Router();

    router.post("/:id",async (req, res) =>{
        const grupo = await alunoGrupoController.store(req.body, req.params.id);
        res.json(grupo);
    })

    router.delete("/:id", async (req, res) => {
        const grupo = await alunoGrupoController.destroy(req.body, req.params.id);
        res.json(grupo);
    })

    return router;
})()