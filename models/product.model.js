
import products from "../db/products.json" assert { type: "json" }
export class ProductModel {
    static async getAllProducts() {
        const {products: data} = products;
        return products.products;
    }
    static async getProductsByQuery(search,page){
        const {products: data} = products;
        const items = data.filter((product) => product.title.toLowerCase().includes(search.toString().toLowerCase()))
        let prods = [];
        if(page === 0) {
            prods = items.slice(0,3);
            return {
                prods,
                nextPage: 1,
                prevPage: null
            }
        }
        prods = items.slice(page*3,page*3+3)
        return {
            prods,
            nextPage: page + 1,
            prevPage: page - 1
        }
    }
    static async getProductByID(id){
        const {products: data} = products;
        const product = data.filter((product) => (product.id === id))
        if (product.length === 0) {
            return "El producto no existe"
        }
        return product
    }
}