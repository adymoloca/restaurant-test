const Table =  require('../../models/table')
const deleteTable= async (req, res, next) => {
    const tableID = req.params.tableID;

    let tables;
    try {
        tables = await Table.findById(tableID);
    } catch (err) {
        return res.status(500).json("Deleting table  failed! ")
    }

    try {
        await tables.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting table has failed! ", error: err }),
        console.log(err)
    }
    return res.status(200).json({ message: "Table  deleted!", tables: tables })
}

module.exports = deleteTable