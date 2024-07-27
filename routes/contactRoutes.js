
//Router
const express = require("express");
const router = express.Router();

//Get All Contacts
router.route("/").get((req,res) =>{
    res.status(200).json({mesaage: "Get all Contacts"})
})

//Create Contact
router.route("/").post((req,res) =>{
    res.status(200).json({mesaage: "Create Contact"})
})

//Get individual contact
router.route("/:id").get((req,res) =>{
    res.status(200).json({mesaage: `get Contact for ${req.params.id}`})
})

//update contact
router.route("/:id").put((req,res) =>{
    res.status(200).json({mesaage: `Update Contact for ${req.params.id}`})
})

//Delete contact
router.route("/:id").delete((req,res) =>{
    res.status(200).json({mesaage: `Delete Contact for ${req.params.id}`})
})

module.exports = router;
