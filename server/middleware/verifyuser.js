import jwt from 'jsonwebtoken'

export const verifyuser = async (req,res,next) => {

    //console.log("headers", req.headers)
    const token = req.headers.authorization.split(" ")[1]

    if(!token){
        return res.status(403).send("Not Allowed")
    }

    //console.log("token received", token)

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("Decoded", decoded)

    req.user = decoded

    next()

}