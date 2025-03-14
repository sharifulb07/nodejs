

const authMiddleWare=(req, res, next)=>{

    const authHeader=req.headers['authorization']

    const token=authHeader && authHeader.split(" ")[1]

  
   try {
    const decodedToken=jwt.verify(token, process.env.JWT_SECRET_TOKEN)

    console.log(decodedToken)

    req.userInfo=decodedToken


    next()
   } catch (error) {
    return res.status(404).json({
        success:false,
        message:"Access denied, No token provided now . Please login to continue "
    })
    
   }

    
}

module.exports=authMiddleWare