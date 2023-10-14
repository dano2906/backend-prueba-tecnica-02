import { Router } from "express";
import { ProductController } from "../controller/product.controller.js";

export const router = Router();

router.get('/all-items',ProductController.getAllProducts)

router.get('/items', ProductController.getProductsByQuery)

router.get('/items/:id', ProductController.getProductById)