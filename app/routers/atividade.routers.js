module.exports = (() => {
    const atividadeController = require("../Controllers/atividade.controller");

    var router = require("express").Router();

    router.post("/",async (req, res) =>{
        const atividade = await atividadeController.store(req.body);
        res.json(atividade);
    })

    router.get("/:id",async (req, res) =>{
        const atividade = await atividadeController.show(req.params.id);
        res.json(atividade);
    })

    router.get("/", async (req, res) => {
        const atividade = await atividadeController.index();
        res.json(atividade);
    })

    router.put("/:id", async (req, res) =>{
        const atividade = await atividadeController.update(req.body, req.params.id);
        res.json(atividade);
    })

    router.delete("/:id", async (req, res) => {
        const atividade = await atividadeController.destroy(req.params.id);
        res.json(atividade);
    })

    return router;
})()