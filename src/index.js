//imports
import express from 'express';
import * as dotenv from 'dotenv';

//const
const app = express();
const port = process.env.PORT || 4002;

//config
app.use(express.json());
dotenv.config();


//routes
app.get('/',(req,res)=>{res.send("funciona")});


app.listen(port,()=>{
    console.log('running api')
})

