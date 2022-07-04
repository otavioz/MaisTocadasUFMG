
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            collaborative: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            external_urls: {
                type: [{}],
                required: false
            },
            followers: {
                type: [{}],
                required: false
            },
            href: {
                type: String,
                required: true
            },
            images: {
                type: [{}],
                required: false
            },
            name: {
                type: Number,
                required: true
            },
            owner: {
                type: [{}],
                required: false
            },
            primary_color: {
                type: String,
                required: true
            },
            public: {
                type: String,
                required: true
            },
            snapshot_id: {
                type: String,
                required: true
            },
            tracks: {
                type: [{}],
                required: [true, '* Campo obrigatório!']
            },
            type: {
                type: String,
                required: true
            },
            uri: {
                type: String,
                required: true
            }
        },
        { timestamps: true }
    );
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const SongTuple = mongoose.model("songtuple", schema);
    return SongTuple;
};
