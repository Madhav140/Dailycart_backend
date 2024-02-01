const products = require('../Model/productModel')

//get all products from database
exports.getAllProductsController = async(req,res)=>{
    
     try {
        const allProducts = await products.find()
    res.status(200).json(allProducts)
     } catch (error) {
        res.status(401).json(error)
        
     }

}


exports.getAproduct=async(req,res)=>{
   const {id} = req.params
   try {
      const Products = await products.find({id})
      res.status(200).json(Products)
   } catch (error) {
      res.status(401).json(error)
      
   }
}