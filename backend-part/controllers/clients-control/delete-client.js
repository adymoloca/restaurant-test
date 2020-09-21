
const Client = require('../../models/client');
const deleteClient = async (req, res, next) => {
    const clientID = req.params.cid;

    let client;
    try {
        client = await Client.findById(clientID);
    } catch (err) {
        return res.status(500).json("Deleting client failed! ")
    }

    try {
        await client.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting client has failed! ", error: err })
    }
    return res.status(200).json({ message: "Client deleted.", client: client })
}

module.exports = deleteClient