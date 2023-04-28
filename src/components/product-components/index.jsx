import React from 'react'
import styles from './styled.module.css'
import PopularProduct from './popular-product'
import Category from '../category'

const ProductComponent = () => {
  return (
    <>
    <div className={styles.product_wrapper}>
        <Category/>
        <PopularProduct/>
    </div>
    </>
  )
}

export default ProductComponent