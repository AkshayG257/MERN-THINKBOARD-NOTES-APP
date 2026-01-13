import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import path from "path";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname =path.resolve();
app.use(express.json());

if(process.env.NODE_ENV !== "production"){
    app.use(cors({
        origin: "http://localhost:5173"
    }))
}
app.use((req,res,next) => {
    console.log(`Request of type ${req.method} is comming for ${req.url} `)
    next();
})

app.use(rateLimiter)

app.use("/api/notes", notesRoutes);
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend/", "dist", "index.html"))
})
}


connectDB().then(() =>{
    app.listen(PORT, () =>  {
        console.log("Server started sucessfully on port:", PORT);
    });
});
// app.get("/api/notes",(req,res) => {
//     res.send("You have 6 notes");
// })

// mongodb+srv://akshayguru2010_db_user:M5zKgiU2ntrwkJI6@cluster0.oomnxg7.mongodb.net/?appName=Cluster0