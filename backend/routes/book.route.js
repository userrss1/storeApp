import express from "express"
import { bookStore } from "../controller/book.controller.js"

const router = express.Router()


router.get("/",bookStore)


export default router