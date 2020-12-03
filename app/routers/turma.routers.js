module.exports = (() => {
    const turmaController = require("../Controllers/turma.controller");

    var router = require("express").Router();

    router.post("/",async (req, res) =>{
        const turma = await turmaController.store(req.body);
        res.json(turma);
    })

    router.get("/:id",async (req, res) =>{
        const turma = await turmaController.show(req.params.id);
        res.json(turma);
    })

    router.get("/", async (req, res) => {
        const turma = await turmaController.index();
        res.json(turma);
    })

    router.put("/:id", async (req, res) =>{
        const turma = await turmaController.update(req.body, req.params.id);
        res.json(turma);
    })

    router.delete("/:id", async (req, res) => {
        const turma = await turmaController.destroy(req.params.id);
        res.json(turma);
    })

    return router;
})()