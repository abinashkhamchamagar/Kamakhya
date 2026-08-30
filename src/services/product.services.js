
import Product from "../models/Product.js";

import uploadFiles from "../utils/fileUploader.js";

const getProducts = async (query) => {

    const filter = {};

    if (query?.search) {
        filter.title = {
            $regex: query.search,
            $options: "i"
        };
    }

    if (query?.brand) {
        filter.brand = query.brand;
    }

    if (query?.category) {
        filter.category = query.category;
    }
    if (query?.type) {
        filter.type = query.type;
    }

    let sort = {};

    if (query?.sort) {
        if (query.sort === "A-Z") {
            sort.title = 1;
        } else if (query.sort === "Z-A") {
            sort.title = -1;
        } else if (query.sort === "newest") {
            sort.createdAt = -1;
        } else if (query.sort === "oldest") {
            sort.createdAt = 1;
        }
    }

    return Product.find(filter).sort(sort);
};
const createProduct = async (data, files) => {
    if (files && files.length > 0) {
        const uploadedFiles = await uploadFiles(files);
        data.imageUrl = uploadedFiles.map(file => file.secure_url);
    }

    return await Product.create(data);
};


const getProductById = async (id) => {
    const product = await Product.findById(id)

    if (!product) {
        throw {
            statusCode: 404,
            message: "Product not found."
        }
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
const updateProduct = async (id, data, files) => {
    const product = await Product.findById(id)
    if (!product) {
        throw new Error("Product not found.")
    }

    if (files && files.length > 0) {
        const uploadedFiles = await uploadFiles(files);
        data.imageUrl = uploadedFiles.map(file => file.secure_url);
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
