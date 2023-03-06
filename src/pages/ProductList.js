import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../api/api";
import ProductItem from "../components/ProductItem"
import { BiSearch } from "react-icons/bi"

import './ProductList.css'




function ProductList(){
  const [searchParam,setSearchParam] = useSearchParams();
  // console.log(searchParam.get('keyword'));
  const initKeyword = searchParam.get('keyword');
  const [keyword,setKeyword] = useState(initKeyword || '');
  const products = getProduct(initKeyword);

  // 함수
  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam(keyword?{keyword}:{})
  }
  return(
    <div id="productlist">
      <form onSubmit={handleSubmit}>
        <input name="keyword"
        value={keyword}
        placeholder="검색어를 입력해주세요"
        onChange={handleKeywordChange}/>
        <button type="submit"><BiSearch/></button>
      </form>
      <div id="container">
        <p>총 {products.length} 건</p>
        <div className="items">
        {products.map((product)=>(
          <ProductItem key={product.id}  product={product}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList;