const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
    place: {
        type: String,
        required: true
    },
    pictures: {
        type: Array
    },
    persons: {
        type: Number
    },
    days: {
        type: Number
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    costs: {
        food: {
            type: Number,
        },
        transport: {
            type: Number
        },
        lodging: {
            type: Number
        },
        entertainment: {
            type: Number
        },
        others: {
            type: Number
        },
        required: true
    },
    description: {
        type: String,
        min: 300
    },
    comment: {
        type: String,
        min:300
    },
    likes: {
        type: Number
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = new model("Post", PostSchema);