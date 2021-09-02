import mongoose from "mongoose";

const partSchema = new mongoose.Schema({
    car_name: {type: String, required: true, trim: true},
    part: {type: String, required: true, trim: true},
    price: {type: Number, required: true, trim: true},
    lastday: {type: String, trim: true},
    num: {type: Number, trim: true},
});

const Part = mongoose.model("Part", partSchema);

export default Part;


