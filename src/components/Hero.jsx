import React from 'react'

function Hero() {
  return (
    <main className='hero'>
      <div className='hero-content'>
        <h1 className='hero-title'>Your Feet Deserve the Best</h1>
        <p className='hero-text'>Experience unparalleled comfort and style with our premium shoes designed just for you.</p>
        <div className='hero-buttons'>
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className='shopping'>
          <p>Also available on</p>
          <div className='shopping-logos'>
            <img src='/images/amazon.jpg' alt='amazon' height='50px' width='50px' />
            <img src='/images/flipkart.jpg' alt='flipkart' height='50px' width='50px' />
          </div>
        </div>
      </div>
      <div className='hero-img'>
        <img src='/images/shoe.png' alt='shoe' height='500px' />
      </div>
    </main>
  )
}

export default Hero
