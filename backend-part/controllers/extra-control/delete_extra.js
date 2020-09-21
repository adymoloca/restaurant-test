const Extra =  require('../../models/extra')
const deleteExtra= async (req, res, next) => {
    const extraID = req.params.extraID;

    let extra;
    try {
        extra = await Extra.findById(extraID);
    } catch (err) {
        return res.status(500).json("Deleting extra  failed! ")
    }

    try {
        await extra.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting extra has failed! ", error: err }),
        console.log(err)
    }
    return res.status(200).json({ message: "Extra  deleted!", extra: extra })
}

module.exports = deleteExtra