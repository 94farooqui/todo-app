import User from "../models/User.js"

export const getAllUsers = (req,res) => {
    return res.status(200).json({msg:"Request for all Users"})
}

export const getOneUser = (req,res) => {

}

export const addOneUser = async (req,res) => {
    const user = req.body
    const userAdded = new User(user)
    await userAdded.save()

    res.status(200).json(userAdded)
}

export const updateOneUser = (req,res) => {
    
}

export const deletOneUser = (req,res) => {

}
