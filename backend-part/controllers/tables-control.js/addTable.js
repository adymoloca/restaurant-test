const Table = require('../../models/table');

const createTable = async (req, res, next) => {


    const { seats, indoor, number } = req.body
    

    let createdTable;

    try {

        createdTable = new Table({
            number,
            seats,
            indoor

        })
        await createdTable.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding table failed",
            error: err
        })
    }

    res.status(201).json({
        message: 'Table added !',
        Table: createdTable
    });
};

module.exports = createTable;