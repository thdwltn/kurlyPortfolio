import { Link } from "react-router-dom";
import './Event.css'
import $ from "jquery";




function Event() {
  const coupon = () => {
    alert("쿠폰이 다운로드 되었습니다!");
    // 두번째 클릭시 다른 alert창("이미 다운받으셨습니다!")울리고 싶다...
    close();
  }
  $(function(){
    close();
    make();
    
    })
    function close(){
      $('.couponBtn').on('click',function(e){
        $('.couponTotal').css('display','none')
      })
    }
    function make(){
      $('.couponBtn').on('click',function(e){
        $('.done').css('display','flex')
      })
    }

    

  return (
    <div id="event">
      <h3><img src="/images/Roulette/main.png"/></h3>
    
      <div>
        <p>매주 토요일에는<br/>
        <b>위클리<br/>쿠폰</b></p>
        <img src="/images/Roulette/discount.png"/>
        <div className="done">
          이미 쿠폰을 받으셨습니다.
        </div>
        <div>
          <img src="/images/Roulette/coupon.png"/>
          <span className="couponTotal">3</span>
        </div>
        <button onClick={coupon} className="couponBtn">쿠폰 다운로드 ＞</button>
      
    </div>
    </div>
  );
}

export default Event;
