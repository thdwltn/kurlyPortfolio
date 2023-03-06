import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getWishList,deleteWishList } from "../api/api"
import ProductItem from "../components/ProductItem"
import { SlHeart } from "react-icons/sl"
// import data from "../api/data.json"
import './WishList.css'

function Wishlist() {

  const [products,setProducts] = useState([]);
  // data넘겨받을 effect
  useEffect(()=>{
    const NextProducts = getWishList();
    setProducts(NextProducts);
  },[])

  // 버리기
  const handleDelete = (productSlug) => {
    deleteWishList(productSlug);
    const nextProducts = getWishList();
    setProducts(nextProducts);
    alert("삭제 하시겠습니까?");
  }

  // 모두 버리기



  return (
    <div id="wishlist">
      <Helmet><title>위시리스트</title></Helmet>
      <h3>찜한상품({products.length})</h3>
      <ul>
        {
          products.map((product)=>(
            <li key={product.slug}>
              <ProductItem product={product}/>
              <p>
                <button onClick={()=> handleDelete(product.slug)} >삭제</button>
              </p>
            </li>
          ))
        }
      </ul>
    
      { products.length < 1 &&
        (<div className="empty">
       
          <p>
            <SlHeart/><br/>
            찜한 상품이 없습니다.
          </p>
        </div>)}
    
    </div>
  );
}

export default Wishlist;
