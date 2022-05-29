const db = require("../models");
const SongData = db.songdata;
// Create and Save a new SongData
exports.create = (req, res) => {
    // Validate request
    if (!req.body.items) {
        res.status(400).send({ message: "Content can not be empty!" });
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
// Find all published SongDatas
exports.findAllPublished = (req, res) => {

};