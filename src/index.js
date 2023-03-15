//imports
import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import {Server as SocketServer} from 'socket.io';
import http from 'http';
import cors from 'cors';

//connect databse
import './database/connect.js'

//import data socket
import { dataSocket } from './sockets/dataSocket.js';

//const
const app = express();
const port = process.env.PORT || 4002;



//config
app.use(express.json());
dotenv.config();


//routes
app.get('/',(req,res)=>{res.send("funciona")});


//------middlewares

//morgan
app.use(morgan('dev'));

//cors
app.use(cors());  

//-----server socket.io
const server =  http.createServer(app)
const io = new SocketServer(server,{
    cors:{
        origin:'http://localhost:3000'
    }
});

//---------socket.io connection
io.on('connection',(socket)=>{
    console.log(socket.id)
    console.log('user connected')

    dataSocket(socket);


})



server.listen(port,()=>{
    console.log('running api')
})

