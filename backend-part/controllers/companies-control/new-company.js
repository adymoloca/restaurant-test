
const Company = require('../../models/company');

const createCompany = async (req, res, next) => {

    const {
        name,
        UID,
        street,
        nr,
        city,
        country
    } = req.body

    let createdCompany;

    try {

        createdCompany = new Company({
            name,
            UID,
            adress: {
                street,
                nr,
                city,
                country
            },
        })
        console.log(createdCompany)
        await createdCompany.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding company has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Company added!',
        company: createdCompany
    });
};

exports.createCompany = createCompany;

