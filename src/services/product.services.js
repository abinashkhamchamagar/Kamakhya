
import Product from "../models/Product.js";

const getProducts = async () => {
    return Product.find();
}
const createProduct = async (data) => {
    const product = await Product.create(data);

    return product;
};


const getProductById = async (id) => {
    const product = await Product.findById(id)

    if (!product) {
        throw {
            message: "product not found",
        }
    }
    return product;
}

const deleteProduct = async (id) => {
    const product = await Product.findById(id)
    if (!product) {
        throw {
            message: "Product not found",
        }
    }
    await Product.findByIdAndDelete(id)
    return { message: "Product deleted successfully." }

}
const updateProduct = async (id, data) => {
    const product = await Product.findById(id, data)
    if (!product) {
        throw {
            message: "Product not found",
        }
    }
    return await Product.findByIdAndUpdate(id, data, { new: true });
}


export default {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct
};
