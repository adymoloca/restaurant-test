const Product =  require('../../models/product')
const deleteProduct= async (req, res, next) => {
    const productID = req.params.productID;

    let product;
    try {
        product = await Product.findById(productID);
    } catch (err) {
        return res.status(500).json("Deleting product  failed! ")
    }

    try {
        await product.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting product has failed! ", error: err }),
        console.log(err)
    }
    return res.status(200).json({ message: "Product  deleted!", product: product })
}

module.exports = deleteProduct