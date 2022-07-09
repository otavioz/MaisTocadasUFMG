const db = require("../models");
const SongData = db.songdata;
const SongTuple = db.songtuple;
// Create and Save a new SongData
exports.create = (req, res) => {
    // Validate request
    if (!req.body.items) {
        res.status(400).send({ message: "Requisição deve conter um array de músicas!" });
        return;
    }
    // Create a SongData
    const songdata = new SongData(
        req.body
    );
    // Save SongData in the database
    songdata
        .save(songdata)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the songdata."
            });
        });
};
// Retrieve all SongDatas from the database.
exports.findAllTracks = (req, res) => {
    //const title = req.query.title;
    var condition = { tracks: 1 }
    SongTuple.find({}, condition)
        .then(data => {
            var result = []
            data.forEach(element => {
                element.tracks[0].items.forEach(e => {
                    result.push(e.track)
                });
            });
            res.send(result);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Retrieve all SongDatas from the database.
exports.findAll = (req, res) => {
};

// Find a single SongData with an id
exports.findOne = (req, res) => {

};
// Update a SongData by the id in the request
exports.update = (req, res) => {

};
// Delete a SongData with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all SongDatas from the database.
exports.deleteAll = (req, res) => {

};
exports.createTuple = (req, res) => {
    // Validate request
    if (!req.body.tracks) {
        res.status(400).send({ message: "Requisição deve conter uma playlist" });
        return;
    }
    // Create a SongTuple
    const songtuple = new SongTuple(
        req.body
    );
    // Save SongTuple in the database
    songtuple
        .save(songtuple)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the songtuple."
            });
        });
};