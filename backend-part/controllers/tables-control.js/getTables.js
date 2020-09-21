const Table = require('../../models/table');

const showAllTables = async (req, res, next) => {
    let tables
    try{
    
     tables = await Table.find().exec();
    
    if (!tables)
        return res.json({
            message: " No tables found!"
        });
    }catch(err){
        return res.json({message:"Could not show tables.", err:err})
    }
    res.json({
        message: "Tables: ",
        tables: tables
    })

}

module.exports = showAllTables