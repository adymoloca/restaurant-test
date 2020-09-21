const Extra = require('../../models/extra');

const createExtra = async (req, res, next) => {

    const {

        extra_name,
        extra_price,
        extra_category

    } = req.body

    let createdExtra;

    try {

        createdExtra = new Extra({

            extra_name,
            extra_price,
            extra_category,
            extra_last_updated: Date.now()
        })

        await createdExtra.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding extra has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Extra added!',
        extra: createdExtra
    });
};

exports.createExtra = createExtra;