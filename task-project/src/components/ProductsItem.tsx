import React from 'react'
import item from '../assets/products-item.jpg'

function ProductsItem() {
  return (
    <>
    <div className='product-heading'>
      <p className='product-head-text'>Our Gallery</p>
    </div>
    <div className='main-product'>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
    </div>
    <div className='main-product'>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
    </div>
    <div className='main-product'>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
      <div className='items-div'>
        <img className='img-item'  src={item} alt="" />
        <div className='items-div-text'>
            <p>Number one</p>
        </div>
      </div>
    </div>
    <div className="pagination">
        <button className='active'>1</button>
        <button>2</button>
        <button>3</button>
    </div>
    </>
  )
}

export default ProductsItem
