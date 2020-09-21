const Client = require('../../models/client');

const showAllClients = async (req, res, next) => {
    let clients
    try{
    
     clients = await Client.find().exec();
    
    if (!clients)
        return res.json({
            message: " No clients found!"
        });
    }catch(err){
        return res.json({message:"Could not show clients.", err:err})
    }
    res.json({
        message: "Clients: ",
        clients: clients
    })

}

module.exports = showAllClients