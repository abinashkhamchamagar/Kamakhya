import express from "express";

import productControllers from "../controllers/product.controllers.js";


const router = express.Router();

router.get("/", productControllers.getProducts);


router.post("/", productControllers.createProduct);


router.get("/:id", productControllers.getProductById);


router.delete("/:id", productControllers.deleteProduct);


router.put("/:id", productControllers.updateProduct);





export default router;