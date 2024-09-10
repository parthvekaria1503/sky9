import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productaction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item)=><div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

              </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;