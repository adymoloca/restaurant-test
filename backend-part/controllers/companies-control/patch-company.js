const Company = require('../../models/company');

const updateCompany = async (req, res, next) => {
    const companyID = req.params.companyID;
    const { name, UID, street, nr, city, country} = req.body
    let company;
    try {
        company = await Company.findById(companyID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the company. ", err: err })
    }

    company.name = name;
    company.UID = UID;
    company.adress.street = street;
    company.adress.nr = nr;
    company.adress.city = city;
    company.adress.country = country;

    try {
        await company.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the company. ", err: err })
    }
    return res.status(200).json({ message: "Company updated!", company: company })
}

module.exports = updateCompany   