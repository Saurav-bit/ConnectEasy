import express from "express";
import mongoose from "mongoose";
// const Pusher = require("pusher");
import Pusher  from "pusher";

import cors from "cors";


import Messages from "./dbMessages.js";

const app = express();
const port = process.env.PORT || 9000;



const pusher = new Pusher({
 
});


app.use(express.json());
 app.use(cors());

//myDb database name
const connection_url ="";


mongoose.connect(connection_url, {
 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//promise return


// .then(()=>{
//     console.log("connected to db")
// })
// .catch((err)=>{
//     console.log("not connected");
//     console.log(err)

// });.


const db=mongoose.connection;

db.once("open",()=>{
  console.log("DB connected");

  const msgCollection=db.collection("messagecontents");
  const changeStream=msgCollection.watch();

  changeStream.on("change",(change)=>{
    // console.log(change);

    if(change.operationType==='insert')
    {
      const messageDetails=change.fullDocument;
      pusher.trigger('messages','inserted',
      {
        name:messageDetails.name,
        message:messageDetails.message,
        timestamp:messageDetails.timestamp,
        received:messageDetails.received

      })
    }
    else
    {
      console.log("error in pusher trigger")
    }

  });


});








    

//routes

app.get("/", (req, res) => {
  res.status(200).send("bhag yaha se");
}); //home 

//sending msg
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  console.log(dbMessage);
  dbMessage.timestamp=new Date().toLocaleString();

  Messages.create(dbMessage, (err, data) => {
    if (err) {
console.log("**************")
        console.log(err)
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//getting msg
app.get("/messages/sync",(req,res)=>{
    Messages.find((err,data)=>{
        if(err)
        {
res.status(500).send(err);
        }
        else
        {
res.status(200).send(data)
        }
    })
})

app.listen(port, () => {
  console.log(`listening on local host: ${port}`);
});
