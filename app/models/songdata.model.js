
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            items: {
                type: [{}],
                required: [true, '* Campo obrigatório!']
            },
            total: {
                type: Number,
                required: true
            },
            limit: {
                type: Number,
                required: true
            },
            offset: {
                type: Number,
                required: true
            },
            previous: {
                type: String,
                default: null,
            },
            href: {
                type: String,
                required: true
            },
            next: {
                type: String,
                required: true
            },
            grau: {
                type: String,
                required: true
            },
            area: {
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
    const SongData = mongoose.model("songdata", schema);
    return SongData;
};
