import mongoose from 'mongoose';

const Owner = mongoose.Schema({
    ownerName : String,
    costH : {
        type : Number,
        default : 0
    },
    costKG : {
        type : Number,
        default : 0
    },
    costLabor : {
        type : Number,
        default : 0
    },
    filament_cost : {
        type : Number,
        default : 0
    },
    marg : {
        type : Number,
        default : 0
    },
    material : String,
    extra : {
        type : Number,
        default : 0
    },
    Printing_Speed : {
        type : Number,
        default : 0
    },
    File_3D : String,
    File_Img : String, 

});

const ownerMessage = mongoose.model('ownerMessage', Owner);
export default ownerMessage;