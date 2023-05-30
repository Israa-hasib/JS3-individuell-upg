import '../scssPages/productDetails.scss'
import React from 'react'
// import { FaCartPlus } from 'react-icons/fa'
import useDoc from '../hooks/useDocs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { db } from '../firebase/config'
import { updateDoc, deleteDoc, doc } from 'firebase/firestore'




const ProductDetails = () => {

  const navigate= useNavigate ()

  const { id } = useParams()
  const { data: product, error, loading } = useDoc('products', id)
  
//Delete
  const handleDelete = async () => {
    await deleteDoc(doc(db,'products', product.id))
    navigate('/')
}

//Update
 const handleChange = async () => {
  navigate('/Update')
  // await updateDoc(doc(db,'products', product.id),)
}




  if (!product) return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )

  return (
    <div className="container-productDetails">
   
      <div className='productdetails-section-1'>
        <div className='container-left'>
          <div className='img-big'>
            <img src={product.imgUrl} className="img-fluid" />
          </div>
          <div className='img-sm'>
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
          </div>
        </div>
        <div className="container-right">
          <div className="product-info">
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
          </div>
         
          <div className="price">
            <p>${product.price}</p>
          </div>
          <div className="addToCart">
           
            <Link className='btn btn-cart' to={'/update/'+ product.id}>UPDATE</Link>

            <button className='btn btn-cart' onClick={handleDelete}>DELETE</button>
          </div>
      
        </div>


      </div>
            <div className="productdetails-section-2">
       
      </div>

    </div>
  )
}

export default ProductDetails