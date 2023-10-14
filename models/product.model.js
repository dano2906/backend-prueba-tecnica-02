
import products from "../db/products.json" assert { type: "json" }
export class ProductModel {
    static async getProducts(){

    }
    static async getProduct(id){
        const {products: data} = products;
        const product = data.filter((product) => (product.id === id))
        if (product.length === 0) {
            return "El producto no existe"
        }
        return product
    }
}