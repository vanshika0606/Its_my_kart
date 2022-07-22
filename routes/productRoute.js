const express = require("express");
const { getAllProducts , createProduct ,updateProducts, deleteProduct } = require("../controllers/productControllers");

const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id")
.put(updateProducts).delete(deleteProduct);

module.exports = router;