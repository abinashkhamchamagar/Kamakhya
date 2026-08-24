import productServices from "../services/product.services.js";

const getProducts = async (req, res) => {
    const products = await productServices.getProducts();
    res.json(products)
}
const createProduct = async (req, res) => {
    try {
        const createdProduct = await productServices.createProduct(req.body);

        res.status(201).json({message: "Product created successfully"});
    } catch (error) {
        res.json({ message: error.message });
    }
};
const getProductById = async (req, res) => {
    try {

        const product = await productServices.getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const data = await productServices.deleteProduct(req.params.id)
        res.json(data);
    }
    catch (error) {
        res.json({ message: error.message });
    }
}
const updateProduct = async (req, res) => {
    try {
        const product = await productServices.updateProduct(req.params.id, req.body)
        res.json(product);
    }
    catch (error) {
        res.json({ message: error.message });
    }
}



export default { getProducts, createProduct, getProductById, deleteProduct, updateProduct }