const carts = require('../Model/cartModel')

exports.addToCartController = async(req,res)=>{
    const userId = req.payload
    const {id,title,price,description,category,image,rating,quantity} = req.body

    try {
        
        const existingProduct = await carts.findOne({id,userId})

        if(existingProduct){
            existingProduct.quantity +=1
            existingProduct.grandTotal = existingProduct.quantity*existingProduct.price
            existingProduct.save()
            res.status(200).json('item incremented')
        }else{
            const newProduct = new carts({
                id,title,price,description,category,image,rating,quantity,grandTotal:price,userId
            })
            await newProduct.save()
            res.status(200).json('new item added')
        }
    } catch (error) {
       res.status(401).json(error) 
    }


}



exports.getItemFromCartController = async(req,res)=>{
   const userId = req.payload

     try {
        const allProductUser = await carts.find({userId})
        res.status(200).json(allProductUser)
     } catch (error) {
        res.status(401).json(error)
     }

}



exports.removeItemController = async(req,res)=>{
    const {id}=req.params
    
     try {
        await carts.deleteOne({_id:id})
        res.status(200).json('removed the item')
     } catch (error) {
        res.status(401).json(error)
     }
}