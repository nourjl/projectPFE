import User from '../models/userMessage.js';

export const getUser = async (req, res) =>{
    try{
        const userMessages = await User.find();

        res.status(200).json(userMessages);


    } catch(error){
        res.status(404).json({message: error.message});

    }

}

export const createUser = async (req, res) =>{
    const user = new User({
        userName : req.body.userName,
        density : req.body.density,
        File_3D : req.body.File_3D,
        File_Img : req.body.File_Img

    })
    user.save().then(data =>{res.json(data);})
    res.send("user created");

}
/*
app.get('/user', function(req, res){
    userMessages.find(function(err, users){
        if(err)
            res.send(err);
        res.json(users);
    });
});

app.delete('/user/:id', function(req, res){
    userMessages.findOneAndRemove({_id:req.params.id}, function(err, user){
        if(err)
            res.send(err);
        res.json(user);
    });
});
*/