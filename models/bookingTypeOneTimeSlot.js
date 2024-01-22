import { Schema, model } from "mongoose";


const timeSlotSchema = new Schema({
    name:{
        type:[String]
    },
    date:{
        type:String
    }
})

export default model('TimeSlot', timeSlotSchema)