
export class ProductController {
    static async getProductsByQuery (req,res) {
        const {search} = req.query;
        res.json({
            search
        })
    }
    static async getProductById(req,res) {
        const id = req.params.id;
        res.json({
            id
        })
    }
}