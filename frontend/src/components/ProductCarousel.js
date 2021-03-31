import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { listTrendingProducts } from "../actions/productActions.js";
import Logo from "../assets/logo.svg";
import Logo1 from "../assets/facebook.svg";
import Logo2 from "../assets/instagram.svg";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const trendingProducts = useSelector((state) => state.trendingProducts);
  const { loading, error, products } = trendingProducts;

  useEffect(() => {
    dispatch(listTrendingProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message varient='danger'>{error}</Message>
  ) : (
    <div>
      <h1>Carousel</h1>
    </div>
  );
};

export default ProductCarousel;

// {products.map((product) => {
//   return (
//     <div key={product._id} className='carousel-item'>
//       <Link to={`/product/${product._id}`}>
//         <img
//           src={product.image}
//           className='d-block w-100'
//           alt={product.name}
//         />
//         <div className='carousel-caption d-none d-md-block'>
//           <h5>{product.name}</h5>
//           <p>&#x20B9; {product.price}</p>
//         </div>
//       </Link>
//     </div>
//   );
// })}
