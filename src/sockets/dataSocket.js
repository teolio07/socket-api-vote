import { participantModel } from '../database/models/participantModel.js';
import { socketServices } from '../services/socketService.js';


/* 
class participantServices {
    async getParticipants() {
        try{
            let participants = await participantModel.find();
            return participants;
        }
        catch(error){
          return ({error:'algo salio mal'}) 
        }
    }   
} */


export function dataSocket(socket){
    socket.on('status',(status)=>{
        console.log(status)
        
        try{
            const socket_services = new socketServices();

            let get_participants = socket_services.getParticipants();
            get_participants.then((resolve)=>{
             
              if(resolve.error){
                socket.broadcast.emit('participants',{error:"algo salio mal al emitir"})
              }else{
                status?socket.broadcast.emit('participants',resolve):socket.broadcast.emit('participants',{error:"status error"})
              }
            })  
          }
          catch(error){
            console.log(error);
          } 
    
    })
}