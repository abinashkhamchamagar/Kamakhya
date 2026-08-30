import express from "express";

import productControllers from "../controllers/product.controllers.js";
import productSchema from "../libs/product.schema.js";
import validator from "../middlewares/validator.js";
import normalizeProductBody from "../middlewares/normalizeProductBody.js";

const router = express.Router();

router.get("/", productControllers.getProducts);

router.post(
    "/",
    normalizeProductBody,
    validator(productSchema),
    productControllers.createProduct
);


router.get("/:id", productControllers.getProductById);


router.delete("/:id", productControllers.deleteProduct);


router.put(
    "/:id",
    normalizeProductBody,
    validator(productSchema),
    productControllers.updateProduct
);



export default router;