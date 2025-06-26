import React from 'react'
import ShowProducts from '../components/Products/ShowProducts'
import BookNow from '../components/Products/BookNow'

function Products() {
  return (
    <div className='mt-20'>
        <ShowProducts/>
        <BookNow/>
    </div>
  )
}

export default Products