import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductBySlug,addWishList } from "../api/api"
import { SlHeart } from "react-icons/sl"
import { BsCart } from "react-icons/bs"

import './Product.css'


function Product(){
  const {productSlug} = useParams();
  const product = getProductBySlug(productSlug);
  const navigate = useNavigate();
  const handleAddWishList = () => {
    addWishList(product?.slug);
    // navigate('/wishlist');

  }

 
  return(
    <div id="product">
      <div className="top">
    <div id="productItem">
      <p><img src={product.photoUrl}/></p>
    </div>
    <div id="detail">
      <div className="productInfo">
          <p>샛별배송</p>
          <p>{product.title}</p>
          <h2>{product.subtitle}</h2>
      </div>
      {
        product.details.map(({detail})=>(
          <div className="detailInfo">
        <dl>
          <dt>배송</dt>
          <dd>
            <p>{detail.deliver}</p>
            <p>23시 전 주문 시 내일 아침 7시 전 도착
(대구·부산·울산 샛별배송 운영시간 별도 확인)</p>
          </dd>
        </dl>
        <dl>
          <dt>판매자</dt>
          <dd>{detail.seller}</dd>
        </dl>
        <dl>
          <dt>포장타입</dt>
          <dd>
              <p>{detail.packType}</p>
              <p>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
          </dd>
        </dl>
        <dl>
          <dt>판매단위</dt>
          <dd>{detail.num}</dd>
        </dl>
        <dl>
          <dt>중량/용량</dt>
          <dd>{detail.weight}g</dd>
        </dl>
        <dl>
          <dt>원산지</dt>
          <dd>{detail.origin}</dd>
        </dl>
        <dl>
            <dt>안내사항</dt>
            <dd>
              <p>{detail.warning}</p>
            </dd>
          </dl>
        <dl>
          <dt>유통기한</dt>
          <dd>{detail.period}일</dd>
        </dl>
      </div>
        ))
      }
      <div className="productOrder">
        <dl>
            <dt>상품선택</dt>
            <dd>
                <h3></h3>
                <div className="count"></div>
                <div className="price">
                  <span><del>
                  {product.oPrice}</del></span>
                  <span>{product.dPrice}</span>
                </div>
            </dd>
        </dl>
        <div className="productBtn">
          <p><button onClick={handleAddWishList}><SlHeart/></button></p>
          <p><button><BsCart/></button></p>
        </div>
      </div>
    </div>
    </div>
    <h3 className="anotherBuy">다른 고객이 함께 구매한 상품</h3>
    <div className="another">
      
      { product.anotherUrls.map(({anotherUrl})=>(
        <>
        <Link to="/list/Product01"><img src={anotherUrl.url1}/></Link>
        <Link to="/list/Product02"><img src={anotherUrl.url2}/></Link>
        <Link to="/list/Product03"><img src={anotherUrl.url3}/></Link>
        <Link to="/list/Product04"><img src={anotherUrl.url4}/></Link>
        </>
      ))}
    </div>
    </div>
  )
}

export default Product;
