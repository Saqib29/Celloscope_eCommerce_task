import Supplier from "../models/SupplierModel.js"


const addSupplier = async (req, res) => {
    try{
        if (req.method == 'GET') {
            res.render('supplierandCategory/supplier', { title: "Add Supplier" })

        } else if (req.method == 'POST') {
            const { name, contact_email, contact_phone, address } = req.body

            const newSupplier = await Supplier.create({
                name,
                contact_email,
                contact_phone,
                address
            })
    
            res.redirect('/')
        }
    } catch(error) {
        console.error('Error adding supplier:', error)
        res.status(500).json({ error: 'An error occurred while adding the supplier.' })

    }
}

export { addSupplier }