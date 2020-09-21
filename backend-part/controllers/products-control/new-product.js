const Product = require('../../models/product');

const createProduct = async (req, res, next) => {

    console.log(req.body)
    const {

        product_name,
        product_description,
        product_price,
        product_images,
        product_category,
        product_extra
    } = req.body

    let createdProduct;

    try {

        createdProduct = new Product({

            product_name,
            product_description,
            product_price,
            product_images,
            product_category,
            product_extra,
            product_last_updated: Date.now()
        })
        await createdProduct.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding product failed",
            error: err
        })
    }

    res.status(201).json({
        message: 'Product added !',
        product: createdProduct
    });
};

exports.createProduct = createProduct;