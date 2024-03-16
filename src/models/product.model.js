import mongoose, { Document, Schema, model } from 'mongoose';


const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        productImage: { type: String, required: true },
        price: {type: Number, required: true, default: 0}
    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    }
);

const ProductModel = model("Product", ProductSchema);
export default ProductModel;