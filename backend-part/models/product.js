const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')



const productSchema = new mongoose.Schema({

    product_name: { type: String, required: true, unique:true },
    product_description: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_images: { type: Array, default: ['laba1'] },
    product_category: { type: String, required: true },
    product_extra: { type: Array, default: [] },
    product_date_added: { type: Date, default: Date.now() },
    product_last_updated: { type: Date }
});

productSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Product', productSchema);
