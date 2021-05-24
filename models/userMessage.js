import mongoose from 'mongoose'; 

const User = mongoose.Schema({
    userName : String,
    density : {
        type : Number,
        default : 0
    },
    File_3D : String,
    File_Img : String, 

}); 

const userMessage = mongoose.model('userMessage', User);
export default userMessage;