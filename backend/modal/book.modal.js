import mongoose from "mongoose";

const bookschema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category:String ,
    image:String
})

const Book = mongoose.model("Books", bookschema)

export default Book