const Product = require('../../models/product');
const updateProduct = async (req, res, next) => {
    const productID = req.params.pid;
    const {product_name, product_description, product_price, product_images, product_extra } = req.body
    let product;
    try {
        product = await Product.findById(productID);
    } catch (err) {
        return res.status(500).json({ message: "Could not update the product. ", err: err })
    }

    product.product_name = product_name
    product.product_description = product_description;
    product.product_price = product_price;
    product.product_images = product_images;
    product.product_extra = product_extra
    product.product_last_updated = Date.now();




    try {
        await product.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the product. ", err: err })
    }
    return res.status(200).json({ message: "Product updated.", product: product })
}

module.exports = updateProduct