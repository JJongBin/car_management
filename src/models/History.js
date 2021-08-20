import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    date: {type: Date, required: true},
    expense: {type: Number, required: true},
    meta: String,
    use_part: { type: String, required: true },
    number: {type: mongoose.Schema.Types.ObjectId, ref: "Car"},
});





const History =mongoose.model("History", historySchema);

export default History;

