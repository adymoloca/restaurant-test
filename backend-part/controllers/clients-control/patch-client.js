const Client = require('../../models/client');
const updateClient = async (req, res, next) => {
    const clientID = req.params.clientID;
    const { client_name,  client_phone,  client_adress } = req.body
    let client;
    try {
        client = await Client.findById(clientID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the client. ", err: err })
    }

    client.client_name = client_name
    client.client_phone = client_phone;
    client.client_adress = client_adress;
    




    try {
        await client.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the client. ", err: err })
    }
    return res.status(200).json({ message: "Client updated.", client: client })
}

module.exports = updateClient   