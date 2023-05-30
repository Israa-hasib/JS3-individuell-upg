import '../scssPages/home.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productListSlice'
import Loader from '../components/Loader/Loader'
import Section1 from '../components/Home/Section1/Section1'
import Section2 from '../components/Home/Section2/Section2'
// import { addProduct } from '../store/features/products/productListSlice'
import { Navigate } from 'react-router-dom'



const Home = () => {

  const { user } = useSelector(state => state.auth)

  

  // dispatch(addProduct())

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)
  if (!user) return <Navigate to="/login" replace/>
  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <div className="container-home">
        
          <Section1 product={products} />
       
          <Section2 products={products} />       
          
      </div>
    </div>
  )
}

export default Home