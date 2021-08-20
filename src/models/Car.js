import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    number: {type: String, required: true, trim: true, unique: true},
    car_name: {type: String, required: true, trim: true},
    i_number: {type: String, required: true, trim: true, unique: true},
    owner: {type: String, trim: true},
    phone: {type: String, trim: true},
    history: [{type: mongoose.Schema.Types.ObjectId, ref: "History"}]
});



const Car =mongoose.model("Car", carSchema);

export default Car;


