const mongoose = require("mongoose");

const coinsSchema = new mongoose.Schema({
    
    coins:{
        type: Number,
        default : 100,
    },

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        unique : true,
    },
    


});

module.exports = mongoose.model("Coins", coinsSchema);