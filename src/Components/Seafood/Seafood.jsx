import React from 'react'
import Banner from '../Banner/Banner'
import CatogeryPages from '../CategoryPage/CatogeryPages'
import BgSeaFood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
        <CatogeryPages title="Meat & SeaFood" bgImage={BgSeaFood} categories={['SeaFood']}/>
    </div>
  )
}

export default Seafood
