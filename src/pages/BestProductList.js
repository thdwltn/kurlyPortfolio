import ProductItem from "../components/ProductItem";
import { getProduct } from "../api/api";
import './BestProductList.css'
import { useEffect, useState } from "react";
import BestProductItem from "../components/BestProductItem";
import mockupData from '../api/data.json';
import axios from 'axios';
import { Pagination } from "swiper";

function BestProductList() {
  const products = getProduct();
  const [order,setOrder] = useState(products);
  const [items,setItems] = useState(mockupData);
  // const [posts,setPosts] = useState([]);
  // const [currentPage,setCurrentPage] = useState(1);
  // const postsPerPage = 5;

  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     const response = await axios.get("../api/data.json");
  //     setPosts(response.data);
  //   };
  //   fetchData();
  // },[])

  const sortItems = items.sort((a,b) => b[order] - a[order]);
  const BestClick = () => setOrder('review');
  const NewClick = () => setOrder('date');
  const DiscountClick = () => setOrder('discount');
  const PriceClick = () => setOrder('dPrice');



  // const indexOfLast = currentPage * postsPerPage;
  // const indexOfFirst = indexOfLast - postsPerPage;
  // const currentPosts = (posts) => {
  //   let currentPosts = 0;
  //   currentPosts = posts.slice(indexOfFirst,indexOfLast);
  //   return currentPosts;
  // }
  return (
    <div id="best">
      <div className="bestBtn">
      <p><button onClick={BestClick}>베스트순</button></p>
      <p><button onClick={NewClick}>최신순</button></p>
      <p><button onClick={DiscountClick}>할인율순</button></p>
      <p><button onClick={PriceClick}>높은가격순</button></p>
 
      </div>
      <div className="bestItem">
        {
          products.map((product)=>(
            <BestProductItem key={product.id}  product={product} items={sortItems}/>
          ))
        
}
{/* <Pagination postsPerPage = {postsPerPage}
            totalPosts = {posts.length}
            paginate = {setCurrentPage}/> */}
      </div>
    </div>
  );
}

export default BestProductList;
