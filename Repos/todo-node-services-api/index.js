var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const util = require("util");
const controller = require("./controller");
const fs = require('fs');
const { dir } = require("console");


var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://admin:Welcome%25123@cluster0.qthsxoa.mongodb.net/";















var DATABASENAME = "todoappdb";
var database;
const maxSize = 2 * 1024 * 1024;

app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING,(error, client)=>{
        database = client.db(DATABASENAME);
        console.log("MongoDB connection successful");
        // database.createCollection("uploadFileCollection",function(err,res){
        //   if(err) throw err;
        //   console.log("MongoDB Collection Created");
        // })
    });
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })
  
  const uploadStorage = multer({ storage: storage });

  const getListFiles = (req, res) => {
    const directoryPath = __dirname+ "/uploads";
  
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
  
      let fileInfos = [];
      console.log("****",files);
  
      files.forEach((file) => {
        fileInfos.push({
          name: file
        });
      });
  
      res.status(200).send(fileInfos);
    });
  };

  const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __dirname + "/uploads";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };
  
  
  
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
});

app.post("/upload", uploadStorage.single("file"), (req, res) => {
    database.collection("uploadFileCollection").count({},function(error,numOfDocs){
      database.collection("uploadFileCollection").insertOne({
        id:(numOfDocs+1).toString(),
        name:req.file
      });
      });
      res.status(200).send({
        message: "Uploaded the file successfully",
      });
  });
app.get("/files", getListFiles);
app.get("/files/:name", download);

// var uploadFilesMiddleware = util.promisify(uploadFile);

// module.exports = uploadFilesMiddleware;