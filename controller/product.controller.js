import { ProductModel } from "../models/product.model.js";

export class ProductController {
    static async getAllProducts (req,res) {
        const data = await ProductModel.getAllProducts();
        res.status(200).json({
            products: data
        })
    }
    static async getProductsByQuery (req,res) {
        const {search,page} = req.query;
        if(search.length === 0) {
            return res.status(400).json({
                message: "Empty search parameter"
            })
        }
        if(Number.isNaN(Number(page))) {
            return res.status(400).json({
                message: "Invalid page type"
            })
        }
        const data = await ProductModel.getProductsByQuery(search,Number(page));
        return res.status(200).json({
            data
        })
    }
    static async getProductById(req,res) {
        const id = req.params.id;
        if(Number.isNaN(Number(id))) {
            res.status(400).json({
                message: "Invalid id type"
            })
        } else {
            const product = await ProductModel.getProductByID(Number(id));
            res.status(200).json({
                    data:product
            })
        }
        
    }
}