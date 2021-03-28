import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from '../components/Search.js';
import Product from "../components/ProductCard.js";
import { listProducts } from "../actions/productActions.js";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";

const Home = () => {
  const dispatch = useDispatch();
  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Search />
      <hr />
      <h2>
        <span className='badge' style={{ backgroundColor: "#2469A0" }}>
          Discount
        </span>
      </h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient='danger'>{error}</Message>
      ) : (
        <div className='productBox'>
          <div className='row row-cols-1 row-cols-md-4 g-2 productSubBox'>
            {products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
