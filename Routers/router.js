const express = require('express')

const router = new express.Router()
const productsController = require('../Controller/productsController')
const usersController = require('../Controller/usersController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controller/wishlistController')
const cartController = require('../Controller/cartController')

//get all products
router.get('/all-products',productsController.getAllProductsController)

//register
router.post('/register',usersController.registerController)

//login
router.post('/login',usersController.loginController)

//get one product
router.get('/getproduct/:id',productsController.getAproduct)

//add to wishlist
router.post('/add-wishlist',jwtMiddleware,wishlistController.addToWishlist)

//get from wishlist
router.get('/wishlist/allproduct',jwtMiddleware,wishlistController.getFromWishlist)

//delete from wishlist
router.delete('/wishlist/remove/:id',jwtMiddleware,wishlistController.removeFromWish)

//add to cart
router.post('/add-cart',jwtMiddleware,cartController.addToCartController)

//get cart item
router.get('/cart/allproduct',jwtMiddleware,cartController.getItemFromCartController)

//remove from cart
router.delete('/cart/removeitem/:id',jwtMiddleware,cartController.removeItemController)


module.exports = router