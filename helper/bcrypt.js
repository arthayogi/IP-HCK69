const bcrypt = require("bcryptjs")

const hashPassword = (defaultPassword) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(defaultPassword, salt)

    return hash
}

const comparePassword = (defaultPass, userPass) => {
    return bcrypt.compareSync(defaultPass, userPass)
}

module.exports = { hashPassword, comparePassword }