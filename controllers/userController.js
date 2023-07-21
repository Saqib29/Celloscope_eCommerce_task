import User from "../models/UserModel.js"

const userRegister = async (req, res) => {
    try {
        const { name, email } = req.body

        const newUser = await User.create({
            name, 
            email
        })
        res.status(201).json(newUser)
    } catch (error) {
        console.error('Error adding supplier:', error)
        res.status(500).json({ error: 'An error occurred while adding the supplier.' })
    }

}

export { userRegister }