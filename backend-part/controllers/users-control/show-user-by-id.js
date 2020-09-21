const User = require('../../models/user');

const showUserByID = async (req, res, next) => {
    const userID = req.params.uid;
    const users = await User.find().exec();
    const user = users.filter(p => {
        return p.id === userID;
    })
    if (!user)
        return res.json({
            message: " Inexistent user!"
        });
    res.json({
        message: "User: ",
        user: user
    })
}

module.exports = showUserByID