
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            collaborative: {
                type: String,
                required: false
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
                type: String,
                required: true
            },
            owner: {
                type: [{}],
                required: false
            },
            primary_color: {
                type: String,
                required: false
            },
            public: {
                type: String,
                required: false
            },
            snapshot_id: {
                type: String,
                required: false
            },
            tracks: {
                type: [{}],
                required: [true, '* Campo obrigatório!']
            },
            type: {
                type: String,
                required: false
            },
            uri: {
                type: String,
                required: false
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
