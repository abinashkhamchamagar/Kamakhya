
import Product from "../models/Product.js";

const getProducts = async (query) => {

    const filter = {};

    if (query?.search) {
        filter.title = { $regex: query.search, $options: "i" };
        if (query?.brand) { filter.brand = query.brand; }
        if (query?.category) { filter.category = query.category; }
        if (query?.brand) { filter.brand = query.brand; }
        if (query?.brand) { filter.brand = query.brand; }
    }
    let sort = {};

    if (query.sort) {
        if (query.sort === "asc") {
            sort.title = 1;
        } else if (query.sort === "desc") {
            sort.title = -1;
        } else {
            throw {
                statusCode: 400,
                message: "Invalid sort value"
            };
        }
    }

    return Product.find(filter);
}
const createProduct = async (data) => {
    const product = await Product.create(data);

    return product;
};


const getProductById = async (id) => {
    const product = await Product.findById(id)

    if (!product) {
        throw new Error("Product not found.")
    }
    return product;
}

const deleteProduct = async (id) => {
    const product = await Product.findById(id)
    if (!product) {
        throw new Error("Product not found.")
    }
    await Product.findByIdAndDelete(id)
    return { message: "Product deleted successfully." }

}
const updateProduct = async (id, data) => {
    const product = await Product.findById(id)
    if (!product) {
        throw new Error("Product not found.")
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
