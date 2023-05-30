import '../scssPages/add.scss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/features/products/productListSlice'
import { Navigate, useParams } from 'react-router-dom'
import { db } from '../firebase/config'
import { updateDoc, deleteDoc, doc } from 'firebase/firestore'
import useDoc from '../hooks/useDocs'
import UpdateForm from '../components/UpdateForm'



const Update = () => {

    const { id } = useParams()
    const { data: product, error, loading } = useDoc('products', id)

    // console.log(product)


    // const { user } = useSelector(state => state.auth)


    // if (!user) return <Navigate to="/login" replace/>

    // const dispatch = useDispatch()




    
    if (!product){
        return(
            <>
            {error && <p>{error}</p>}
            {loading && <p>loading...</p>}
            </>
        )
    }

    return (
        <UpdateForm product={product}>
        </UpdateForm>
    )
}

export default Update
