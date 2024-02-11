const { Schema, model } = require('mongoose');

const charactersSchema = new Schema({ 
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    modified: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    thumbnail: {
        type: String,
        required: false,
    },
    comics: {
        type: [Schema.Types.ObjectId],
        ref: 'Comic',
        required: true,
    },
});

module.exports = model('Character', charactersSchema)