
function Roulette() {

  let rolLength = 6;
  let setNum;
  let hiddenInput = document.createElement("input");


  const rRandom = () => {
    let min = Math.ceil(0);
    let max = Math.floor(rolLength - 1);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rRotate = () => {
    let panel = document.querySelector(".roletter-wacu");
    let btn = document.querySelector(".rouletter-btn");
    let deg = [];
    for(let i=1,len = rolLength; i <= len;i++){
      deg.push((360/len)*i);
    }
    let num = 0;
    document.body.append(hiddenInput);
    setNum = hiddenInput.value = rRandom();

    let ani = setInterval(()=>{
      num++;
      panel.style.transform = "rotate(" + 360 * num + "deg)";
      btn.disabled = true;
      btn.style.pointerEvents = "none"

      if(num === 30){
        clearInterval(ani);
        panel.style.transform = `rotate(${deg[setNum]}deg)`;
      }
    },30)
  }


  return (
    <div id="roulette">
    <h3><img src="/images/Roulette/main.png"/></h3>
    <div id="roulette01">
      <div>
        <p>매주 토요일에는<br/>
        <b>위클리<br/>쿠폰</b></p>
        <img src="/images/Roulette/discount.png"/>
        <div>
          <img src="/images/Roulette/coupon.png"/>
          <span>3</span>
        </div>
        <button>쿠폰 다운로드 ＞</button>
      </div>
    </div>
  </div>
  );
}

export default Roulette;
