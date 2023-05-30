import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase/config'
import { useNavigate } from 'react-router-dom'

const UpdateForm = ({product}) => {
 const navigate=useNavigate()
    const [productData, setProductData] = useState({
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
        description: product.description
    })

    const handleChange = e => {
        const { id, value } = e.target
        setProductData(form => {
            return {
                ...form,
                [id]: value
            }
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const data = {
            ...productData,
            price: +productData.price
        }
        await updateDoc(doc(db,'products',product.id),data)
        navigate('/')
        

        // dispatch(addProduct(data)) 
    }
  return (

    <div className='container-add'>
    <h1 className='text-center my-5'>Update product</h1>
    <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name:</label>
            <input type="text" className="form-control" id='productName' value={productData.productName} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Product Price:</label>
            <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="imgUrl" className="form-label">Image Url:</label>
            <input type="text" className="form-control" id='imgUrl' value={productData.imgUrl} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Product Description:</label>
            <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
        </div>
        <button className="btn btn-primary">Update Product</button>
    </form>
</div>
  )
}

export default UpdateForm