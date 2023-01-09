import {Router} from "express"

const router = Router()

router.get("/",(req,res)=>res.render("index",{title: "Primer sitio con node"}))

router.get("/about",(req,res)=>res.render("about", {title : "About me"}))

router.get("/contact",(req,res)=>res.render("contact", {title: "contact me"}))

export default router