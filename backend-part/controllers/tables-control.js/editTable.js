const Table = require('../../models/table');
const updateTable = async (req, res, next) => {
    const tableID = req.params.tableid;
    const { seats, indoor, available, number} = req.body
    let table;
    try {
        table = await Table.findById(tableID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the table. ", err: err })
    }

    table.number = number
    table.seats = seats
    table.indoor = indoor
    table.available = available

    try {
        await table.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the table.", err: err })
    }
    return res.status(200).json({ message: "Table updated.", table: table })
}

module.exports = updateTable