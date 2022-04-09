const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = new model("User", UserSchema)