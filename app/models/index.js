﻿const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.songdata = require("./songdata.model.js")(mongoose);
db.songtuple = require("./songtuple.model.js")(mongoose);
module.exports = db;
