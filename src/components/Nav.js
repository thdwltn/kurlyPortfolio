import { Link } from "react-router-dom";
import { BsXLg } from "react-icons/bs"
import { SlHeart } from "react-icons/sl"
import { BsList } from "react-icons/bs"
import Logo from "../assets/logo.jpg"
import $ from "jquery";
import './Nav.css'
import { useEffect, useState } from "react";
import { getWishList } from "../api/api";

$(function(){
close();
slide();
fixed();
})
function close(){
  $('.close').on('click',function(e){
    $('.popup').css('display','none')
  })
}

function slide(){
  $('body').on('scroll',function(e){
    $('.popup').css('display','none')
  });
}

function fixed(){
  let offset = $('.sub').offset();
  $(window).on('scroll',function(e){
    if ( $( document ).scrollTop() > offset.top ) {
      $( '.sub' ).addClass( 'fixed' );
    }
    else {
      $( '.sub' ).removeClass( 'fixed' );
    }
  })
}

function Nav() {
  const [products,setProducts]  = useState([]);
  useEffect(()=>{
    const NextProducts = getWishList();
    setProducts(NextProducts);
  })
    return (
      <>
    <nav className="popup">
      <div>
      <h2><Link to="roulette">지금 이벤트를 참여하시고 인기상품<b>100원</b>에 받아가세요!</Link></h2>
      <span className="close"><BsXLg /></span>
      </div>
    </nav>
      <header>
        <div>
          <h1><Link to="/"><img src={Logo}/></Link></h1>
          <ul>
            <li><Link to="signup">Log in</Link></li>
            <li><Link to="signin">Log out</Link></li>
            <li><Link to="wishlist"><SlHeart /><span>{products.length}</span></Link></li>
          </ul>
        </div>
      </header>
    <nav className="sub">
      <ul>
      <li><BsList/></li>
        <li><Link to="best">What's Hot</Link></li>
        <li><Link to="event">이벤트</Link></li>
        <li><Link to="brand">비건브랜드</Link></li>
        <li><Link to="about">About Us</Link></li>
        <li><Link to="shipping">배송안내</Link></li>
      </ul>
    </nav>
    </>
    );
  }
  
  export default Nav;
  