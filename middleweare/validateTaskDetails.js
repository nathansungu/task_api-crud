const validateTaskDetails =(req, res, next)=>{
    const {title, description, isCompleted} =req.body;
    if(!title ||  !isCompleted || !description ){
        return res.status(400).json({message: "Provide all the details"})
    }
    next()
}

export default validateTaskDetails;