import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dataRoutes from "./Routes/dataRoutes.js"
const app = express();
mongoose.connect('mongodb://localhost:27017/TodoDb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Database = mongoose.connection;
Database.on('error',(error) => console.log(error));
Database.once('open', () => console.log('Database Connect'));

app.use(cors());
app.use(express.json());

app.use("/api", dataRoutes);

app.listen(5000, () => console.log("server jalan"));