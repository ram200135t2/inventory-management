import { Router } from "express";
import { getProduct,createProduct } from "../controllers/productController";


const  router = Router();

router.get("/get",getProduct)
router.post("/create",createProduct)


export default router;