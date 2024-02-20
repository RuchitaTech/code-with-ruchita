var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://admin:Welcome%25123@cluster0.qthsxoa.mongodb.net/";















var DATABASENAME = "todoappdb";
var database;

app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING,(error, client)=>{
        database = client.db(DATABASENAME);
        console.log("MongoDB connection successful");
    });
})

app.get('/api/todoapp/get-notes',(resquest, response)=>{
    database.collection("todoappcollection").find({}).toArray((error,result)=>{
        response.send(result);
    })
})
app.post('/api/todoapp/add-notes',multer().none(),(request, response)=>{
    database.collection("todoappcollection").count({},function(error,numOfDocs){
        console.log("request",request.body);
        database.collection("todoappcollection").insertOne({
            id:(numOfDocs+1).toString(),
            description:request.body.newNotes
        });
        response.json("Added successfully");
    });
});

app.delete('/api/todoapp/delete-notes',(request,response)=>{
    database.collection("todoappcollection").deleteOne({
        id:request.query.id
    });
    response.json("deleted successfully");
})