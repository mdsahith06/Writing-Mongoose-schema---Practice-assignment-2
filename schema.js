const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        username : {
            type : String
        },
        message : {
            type : String,
            required : true
        },
        commentedAt : {
            type : Date,
            default : ()=>Date.now()

        }
    }
)

const blogPostSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            unique : true,
            minLength : 5
        },
        content : {
            type : String,
            required : true,
            minLength : 50 
        },
        author : {
            type : String
        },
        tags : {
            type : [String],
            default : ["General"]
        },
        likes : {
            type : [String],
        },
        createdAt : {
            type : Date,
            default : ()=>Date.now()
        },
        updatedAt : {
            type : Date,
            default : ()=> Date.now()
        },
        comments : [commentSchema]

    }
)

module.exports = mongoose.model("Blogpost", blogPostSchema);
