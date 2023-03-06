import './Shipping.css'

function preparing(){
  alert("아직 준비중인 기능입니다!")
}

function Shipping() {
  return (
    <div id="shpping">
      <div id="shipping01">
      <img src="/images/Shipping/shipping1.jpg"/>
      </div>
      <div id="shipping02">
      {/* <video loop autoPlay muted>
          <source src="/images/videos/shipping.mp4" type="video/mp4" />
        </video> */}
       <img src="/images/Shipping/shipping2.jpg"/>
      </div>
      <div id="shipping03">
       <img src="/images/Shipping/shipping3.png"/>
       <img src="/images/Shipping/shipping4.jpg"/>
      </div>
      <div id="shipping04" onClick={preparing}>
      <img src="/images/Shipping/shipping5.jpg"/>
      </div>
      <div id="shipping05">
      <img src="/images/Shipping/shipping6.png"/>
      <img src="/images/Shipping/shipping7.png"/>
      </div>
    </div>
  );
}

export default Shipping;
