
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) =>{
    res.status(200).json({mesaage: "Get all Contacts"})
}

//@desc Create New  contacts
//@route POST /api/contacts
//@access public
const createContact = (req,res) =>{
    console.log("The request body is",req.body);

    //Validation
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({mesaage: "Create Contact"})
}

//@desc Create New  contacts
//@route POST /api/contacts
//@access public
const getContact = (req,res) =>{
    res.status(200).json({mesaage: `get Contact for ${req.params.id}`})
}

//@desc Update  contacts
//@route PUT /api/contacts
//@access public
const updateContact = (req,res) =>{
    res.status(200).json({mesaage: `Update Contact for ${req.params.id}`})
}

//@desc Delete  contacts
//@route DELETE /api/contacts
//@access public
const deleteContact =(req,res) =>{
    res.status(200).json({mesaage: `Delete Contact for ${req.params.id}`})
}

module.exports = {getContacts, createContact,getContact,updateContact,deleteContact}