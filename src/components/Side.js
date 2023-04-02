import './Side.css'
import $ from "jquery";
import {BiChevronUp} from "react-icons/bi"
import { useEffect, useState } from 'react';
import { getRecent } from '../api/api';
import RecentItem from './RecentItem';
import { Link } from 'react-router-dom';


$(
  function(){
    scroll();
  }
)
function scroll(){
  let box01 = $('#box01').offset();
  $(window).on('scroll',function(e){
    if($(document).scrollTop()> box01.top){
      $('#side').addClass('sideFixed');
    }else{
      $('#side').removeClass('sideFixed');
    }
  })
}


function Side(){
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const RecentProducts = getRecent();
    setProducts(RecentProducts);
  },[])
  return(
  <>

    <aside id='side'>
      <p><Link to=''><BiChevronUp/></Link></p>
      
      최근 본 상품
      <div className='recently'>
        {
          products.map((product)=>(
            <li key={product.slug}>
              <RecentItem product={product}/>
            </li>
          ))
        }
      </div>
    </aside>
    </>
  )
}

export default Side;