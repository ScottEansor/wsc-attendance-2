const mongoose = require("mongoose")
//want to double check this structure with tim. 
//date array of attendance data? 
//or jsut dates and we display that? probably in frontend
const attendanceSchema = new mongoose.Schema({

    attendance: []
})

const athleteSchema