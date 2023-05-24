const express = require("express");
const router = express.Router();
const {NewsController} = require("../controller/news")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage})

router.post("/input",upload.single('gambar'),NewsController.insert)
router.get("/detail/:id",NewsController.getDetail)
router.get("/",NewsController.getAll)
router.delete("/:id",NewsController.deleteNews)
router.put("/edit/:id",upload.single('gambar'),NewsController.edit2)

module.exports = router