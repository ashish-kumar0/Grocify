import React from 'react'
import CatogeryPages from '../CategoryPage/CatogeryPages'
import BgDairy from '../../assets/dairy-banner.jpg'
const Dairy = () => {
  return (
    <div>
        <CatogeryPages title="Dairy & Egges" bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
