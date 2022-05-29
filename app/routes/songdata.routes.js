module.exports = app => {
    const songdatas = require("../controllers/songdata.controller.js");
    var router = require("express").Router();
    // Create a new SongData
    router.post("/", songdatas.create);
    // Retrieve all songdatas
    router.get("/", songdatas.findAll);
    // Retrieve all published songdatas
    router.get("/published", songdatas.findAllPublished);
    // Retrieve a single SongData with id
    router.get("/:id", songdatas.findOne);
    // Update a SongData with id
    router.put("/:id", songdatas.update);
    // Delete a SongData with id
    router.delete("/:id", songdatas.delete);
    // Create a new SongData
    router.delete("/", songdatas.deleteAll);
    app.use('/api/songdatas', router);
};