const express = require("express");
const { createOrder, getAllorder, deleteOrder, updateOrder } = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(createOrder);
router.route("/orders").get(getAllorder);
router.route("/order/:id").delete(deleteOrder).put(updateOrder);




module.exports = router;