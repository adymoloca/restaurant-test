const User = require('../../models/user');

const showAllUsers = async (req, res, next) => {
    let users
    try{
    
     users = await User.find().exec();
    
    if (!users)
        return res.json({
            message: " No users found!"
        });
    }catch(err){
        return res.json({message:"Could not show users.", err:err})
    }
    res.json({
        message: "Users: ",
        users: users
    })

}

module.exports = showAllUsers