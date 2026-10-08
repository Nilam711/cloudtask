import {Router} from "express"; import {login,me,register,searchUsers} from "../controllers/authController.js"; import {requireAuth} from "../middleware/auth.js";
const r=Router(); r.post("/register",register); r.post("/login",login); r.get("/me",requireAuth,me); r.get("/users/search",requireAuth,searchUsers); export default r;
