const Product = require("../view/Product");
const ProductImage = require("../view/ProductImage");
const ValidateBodyFields = require("../validators/ValidateBodyFields").validate;

const fields = [{ name: "URL", value: "url" }];

exports.post = async (req, res, next) => {
  try {
    const product_id = req.params.product_id;
    const body = req.body;
    ValidateBodyFields(body, fields);
    await Product.getByID(product_id);
    const data = Object.assign({}, body, { product_id });
    const result = await ProductImage.post(data);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
