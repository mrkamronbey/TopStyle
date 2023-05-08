import React, {useEffect} from 'react'
import ProductComponent from '../../components/product-components'

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <ProductComponent/>
    </>
  )
}

export default Products