import React, {useEffect} from 'react'
import styles from './styled.module.css'
import ProductMoreComponent from '../../components/product-more-component'

const ProductMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <ProductMoreComponent/>
    </>
  )
}

export default ProductMore