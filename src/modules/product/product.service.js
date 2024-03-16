import ProductModel from "../../models/product.model"

export const fetchProducts = async() => {
    const products = await ProductModel.find()

    return products;
}

export const fetchProduct = async(productId) => {
    const products = await ProductModel.findOne({_id:productId})

    return products;
}

export const insertProduct = async(productDto) => {
    const newProduct = await ProductModel.create(productDto)
    return newProduct
}

export const updateProduct = async(productId,productDto) => {
    const updatedProduct = await ProductModel.findOneAndUpdate({_id: productId},productDto, {
        new: true
      })

      if(!updatedProduct){
        let error = new Error('Product Not Found')
        error.statusCode = 404
        throw error
    }
      console.log('updatedProduct', updatedProduct)
    return updatedProduct
}

export const deleteProduct = async(productId) => {
    const deletedProduct = await ProductModel.deleteOne({_id: productId})
    return deletedProduct
}