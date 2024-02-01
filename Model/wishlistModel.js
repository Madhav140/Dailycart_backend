const mongoose = require('mongoose')

const wishSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    rating:{
        rate:{
            type:Number,
            require:true
        },
        count:{
            type:Number,
            require:true
        }
    },
    userId:{
        type:String,
        required:true
    }
})

const wishlists = mongoose.model("wishlists",wishSchema)

module.exports = wishlists