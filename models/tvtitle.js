var mongoose = require ("mongoose");

//schema Setup
var tvtitleSchema = new mongoose.Schema({
    name: String,
    image: String,
    slug: String,
    description: String, 
    year: Number,
    updatedAt: { type: Date, default: Date.now },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

//compiling schema into a model
module.exports = mongoose.model("Tvtitle", tvtitleSchema);