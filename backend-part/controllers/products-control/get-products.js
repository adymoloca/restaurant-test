const Product = require('../../models/product');

const showAllProducts = async (req, res, next) => {
    let products
    try{
    
     products = await Product.find().exec();
    
    if (!products)
        return res.json({
            message: " No products found!"
        });
    }catch(err){
        return res.json({message:"Could not show products.", err:err})
    }
    res.json({
        message: "Products: ",
        products: products
    })

}

module.exports = showAllProducts