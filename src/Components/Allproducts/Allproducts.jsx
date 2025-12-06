import React from 'react'
import Bgall from'../../assets/all-banner.jpg'
import CatogeryPages from '../CategoryPage/CatogeryPages'
const Allproducts = () => {
  return (
    <div>
        <CatogeryPages title="All Products" bgImage={Bgall} categories={[
            'All'
        ]}/>
    </div>
  )
}

export default Allproducts
