import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { listTrendingProducts } from "../actions/productActions.js";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const trendingProducts = useSelector((state) => state.trendingProducts);
  const { loading, error, products } = trendingProducts;

  useEffect(() => {
      dispatch(listTrendingProducts());
    },
    [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message varient='danger'>{error}</Message>
  ) : (
    <div>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          {products.map((product) => {
            return (
              <div key={product._id} className='carousel-item'>
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    className='d-block w-100'
                    alt={product.name}
                  />
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>{product.name}</h5>
                    <p>&#x20B9; {product.price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
