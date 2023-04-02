import {BiMessageAltDots} from "react-icons/bi"
import { Link } from "react-router-dom";
import { SlHeart } from "react-icons/sl"
import './ProductItem.css'
import { useState } from "react";

function percent(value){
  
  return value > 0 ? `${value} %` : value;
}
function won(value){

  return value > 0 ? `${value} 원` : value;
}
function ProductItem({product}){
  const [click,setClick] = useState(0);
  return(
    <figure>
      
      <div>
        <img src={product.photoUrl}/><span onClick={() => {setClick(click+1)}}><SlHeart/>&nbsp;{click}</span>
      </div>
      <figcaption>
      <Link to={`/list/${product.slug}`}>
        <p>샛별배송</p>
        <dl>
          <dt>{product.title}</dt>
          <dd>{product.subtitle}</dd>
          <dd>{percent(product.discount)}<b>{won(product.dPrice)}</b></dd>
          <dd><del>{won(product.oPrice)}</del></dd>
          
          <dd><BiMessageAltDots/>후기 {product.review}</dd>
        </dl>
        </Link>
      </figcaption>
      
    </figure>

  )
}

export default ProductItem;