import { Router } from "express";
import { getUsers } from "../controllers/userController";


const  router = Router();

router.get("/get",getUsers)



export default router;