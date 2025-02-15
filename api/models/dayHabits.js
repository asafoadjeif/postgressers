const mongoose = require('mongoose');
const dayHabit = new mongoose.Schema({
    content: {
        type: String,
        required: true 
    },
    userName: {
        type: String,
        required: true
    },
    dates: [{
        date: String,
        complete: Boolean
    }]
    },{
        timestamps: true
})

module.exports = mongoose.model('HabitDay', dayHabit)

