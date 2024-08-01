
//Router
const express = require("express");
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");

//create and Get All Contacts
router.route("/").get(getContacts).post(createContact)

//Get individual contact, update and delete
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;
