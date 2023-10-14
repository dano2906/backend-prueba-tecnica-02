import { ProductModel } from "../models/product.model.js";

export class ProductController {
    static async getProductsByQuery (req,res) {
        const {search} = req.query;
        res.json({
            search
        })
    }
    static async getProductById(req,res) {
        const id = req.params.id;
        const invalidId = Number.isNaN(Number(id));
        if(invalidId) {
            res.status(400).json({
                message: "Invalid id"
            })
        } else {
            const product = await ProductModel.getProduct(Number(id));
            res.status(200).json({
                    data:product
            })
        }
        
    }
}