const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})

model('User', userSchema);