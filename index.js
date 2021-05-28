import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import ownerRoutes from './routes/owner.js';
import userRoutes from './routes/user.js';
import ModelOwner from './models/ownerMessage.js';
import ModelUser from './models/userMessage.js';

const app = express();

app.use(bodyParser.json());
app.use('/owner', ownerRoutes);
app.use('/user', userRoutes);
app.use(cors());

// https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

const CONNECTION_URL = 'mongodb+srv://seekmakeuser:seekmakeuser123@cluster0.rdlbm.mongodb.net/InstantAPI?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('server running on port: ', PORT)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.get('/api/owner', function(req, res){
    ModelOwner.find(function(err, owners){
        if(err)
            res.send(err);
        res.json(owners);
    });
});

/* exemple :
app.use((req, res, next) => {
    res.status(200).json({
        message:'works!'

    });

});
*/


//module.exports = app;

