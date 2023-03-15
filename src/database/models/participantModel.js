import mongoose, {Schema} from "mongoose";

const participantSchema = new Schema({
    name:String,
    image:String,
    votes:Number
})

export const participantModel = mongoose.model('Participant', participantSchema);