import Owner from '../models/ownerMessage.js';

export const getOwner = async (req, res) =>{
    try{
        const ownerMessages = await Owner.find();

        res.status(200).json(ownerMessages);


    } catch(error){
        res.status(404).json({message: error.message});

    }

}

export const createOwner = async (req, res) =>{
    const owner = new Owner({
        ownerName : req.body.ownerName,
        costH : req.body.costH, 
        costKG : req.body.costKG,
        costLabor : req.body.costLabor,
        filament_cost : req.body.filament_cost,
        marg : req.body.marg,
        material : req.body.material,
        extra : req.body.extra,
        Printing_Speed : req.body.Printing_Speed,
        File_3D : req.body.File_3D,
        File_Img : req.body.File_Img
    })
    owner.save().then(data =>{res.json(data);})
    res.send("owner created");

}