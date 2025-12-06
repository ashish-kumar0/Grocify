import React from 'react'
import CatogeryPages from '../CategoryPage/CatogeryPages'
import Bgfruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
        <CatogeryPages title="Fruits and Veggies" bgImage={Bgfruits} categories={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits