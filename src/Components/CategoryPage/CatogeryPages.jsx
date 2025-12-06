import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import product from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CatogeryPages = ({title, bgImage, categories=[]}) => {

    let FilteredItems = categories.includes('All')
    ? ProductList
    : ProductList.filter(items=> categories.includes(items.category))

  const renderProduct = FilteredItems.map(product=>{
    return (
        <Cards image={product.image} name={product.name} price={product.price}/>
    )
  })

  return (
    <div>
      <Banner title={title} bgImage={bgImage}/>

      <div className='grid grid-cols-1 gap-9 md:grid-cols-4 py-20 max-w-[1400px] mx-auto px-10'>
        {renderProduct}
      </div>
    </div>


  )
}

export default CatogeryPages
