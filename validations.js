import { body } from 'express-validator'

export const loginValidator = [
  body('email', 'Wrong email format').isEmail(),
  body('password', 'Password cant be less than 5 symbols').isLength({ min: 5 }),
]
export const registerValidator = [
  body('email', 'Wrong email format').isEmail(),
  body('password', 'Password cant be less than 5 symbols').isLength({ min: 5 }),
  body('fullName', 'Enter name').isLength({ min: 3 }),
  body('avatarUrl', 'Wrong avatar link').optional().isURL(),
]
export const postCreateValidator = [
  body('title', 'Enter post title').isLength({ min: 3 }).isString(),
  body('text', 'Enter post text').isLength({ min: 10 }).isString(),
  body('tags', 'Wrong tags format(need an array)').optional().isString(),
  body('imageUrl', 'Wrong image link').optional().isString(),
]
