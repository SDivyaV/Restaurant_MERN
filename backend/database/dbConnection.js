import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "Restaurant"
    }).then(() => {
        console.log("Connected to database successfully")
    }).catch(e => {
        console.log("Some error ocuured while connecting")
    })
}