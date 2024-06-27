const Images = require("../models/images.model.js")
const User = require("../models/users.model.js")

const getUsers = async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const addUser = async (req, res) => {

    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getUser=  async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    const { id } = req.params;
    try {
        const user = await User.findById(id)

        if (!user) {
            res.status(404).json({ message: "User not found", status: req.statusCode });
        }else{
            res.status(200).json(user)

        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            res.status(404).json({ message: "User not found", status: 404 });
        } else {
            res.status(200).json({ message: "User deleted successfully", status: 200 });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            res.status(404).json({ message: "User not found", status: req.statusCode });
        }else{
            const isUser = await User.findById(id);
            res.status(200).json(isUser)
        }
    
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const uploadImage = async (req,res)=>{
    try {
        const isImageUploaded = await Images.create(req.body)
        
        if(!isImageUploaded){
            res.status(403).json(isImageUploaded)
        }else{
            res.status(200).json(isImageUploaded)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
        
    }
}
module.exports = { getUsers, addUser, deleteUser ,updateUser,getUser,uploadImage}