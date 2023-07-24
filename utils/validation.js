import { body } from "express-validator"

const supplierValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('contact_email').isEmail().withMessage('Invalid email address'),
    body('contact_phone').isMobilePhone().withMessage('Invalid phone number'),
    body('address').notEmpty().withMessage('Address is required'),
]

const categoryValidationRules = [
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name can be at least 2 characters long')
]

export { categoryValidationRules, supplierValidationRules }