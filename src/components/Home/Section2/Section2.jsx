import './Section2.scss'
import Card from '../../Card/Card'
import React from 'react'


const Section2 = ({ products }) => {

    return (
        <div className="home-section-2">
            <h2>Products</h2>
          
            <div className="product-container">

                {
                    products.length > 0
                        ? products.map(product => <Card key={product.id} product={product} />)
                        : <h2>No products to show</h2>
                }

            </div>
            <button className='btn btn-load'>LOAD MORE <img className='icon-sm' src="/Placeholders/rotate-cw.svg" alt="" /></button>
        </div>
    )
}


export default Section2