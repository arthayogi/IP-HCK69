const errHandler = (err,req,res,next)=>{
    switch (err.name) {
        case "SequelizeValidationError":
            res.status(400).json({ message: err.errors[0].message })
            break;
        case "SequelizeUniqueConstraintError":
            res.status(400).json({ message: "Email already registered" })
        case "EmailRequired":
            res.status(400).json({ message: "Email is required" })
        case "PasswordRequired":
            res.status(400).json({ message: "Password is required" })
        case "InvalidLogin":
            res.status(400).json({ message: "Email/Password incorrect"})
        default:
            break;
    }
}

module.exports = errHandler