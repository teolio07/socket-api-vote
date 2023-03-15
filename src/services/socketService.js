import { participantModel } from '../database/models/participantModel.js';


export class socketServices {
    async getParticipants() {
        try{
            let participants = await participantModel.find();
            return participants;
        }
        catch(error){
          return ({error:'algo salio mal'}) 
        }
    }   
}