
user = process.env.MONGO_USER
pass = process.env.MONGO_PASS
module.exports = {
    //url: "mongodb://127.0.0.1:27017/maistocadasufmg" //process.env.DATABASE_URL
    url: `mongodb://${user}:${pass}@mongotavio-shard-00-00.tg6dh.mongodb.net:27017,mongotavio-shard-00-01.tg6dh.mongodb.net:27017,mongotavio-shard-00-02.tg6dh.mongodb.net:27017/maistocadasufmg?ssl=true&replicaSet=atlas-x9guje-shard-0&authSource=admin&retryWrites=true&w=majority`
};