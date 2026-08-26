import productServices from "../services/product.services.js";

const getProducts = async (req, res) => {
    try {
        const products = await productServices.getProducts(req.query);
        if (products.length === 0) {
            return res.status(200).json({
                products: [],
                message: "No products found"
            });
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createProduct = async (req, res) => {
    try {
        const product = await productServices.createProduct(req.body);

        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getProductById = async (req, res) => {
    try {

        const product = await productServices.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const data = await productServices.deleteProduct(req.params.id)
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const updateProduct = async (req, res) => {
    try {
        const product = await productServices.updateProduct(req.params.id, req.body)
        res.status(200).json(product);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export default { getProducts, createProduct, getProductById, deleteProduct, updateProduct }