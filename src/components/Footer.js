import './Footer.css'


function Footer() {
    return (
      <>
      <div id='bottom'>
      <aside className='top'>
        <h3>고객센터</h3>
        <p>1644-1234&nbsp;&nbsp;<span>월-토요일 오전7시 - 오후6시</span></p>
        <div className='info'>
          법인명(상호):주식회사 컬리사업자등록번호 : 123-45-67890<br/>
          통신판매업 : 제 2022-서울강남-12345호개인정보보호책임자 : 홍길동<br/>
          주소 : 서울특별시 강남구 테헤란로 123,45층(역삼동)대표이사 : 송지수<br/>
          입점문의 : godthdwltn@kurlycorp.com 제휴문의 : godthdwltn@kurlycorp.com<br/>
          채용문의 : godthdwltn@kurlycorp.com<br/>
          팩스 : 123-4567-8910
          <div className='sns'>
            <ul>
              <li><a><img src='/images/sns/HelloIMG1676876673439.png'/></a></li>
              <li><a><img src='/images/sns/HelloIMG1676876673699.png'/></a></li>
              <li><a><img src='/images/sns/HelloIMG1676876673959.png'/></a></li>
              <li><a><img src='/images/sns/HelloIMG1676876674220.png'/></a></li>
              <li><a><img src='/images/sns/HelloIMG1676876675097.png'/></a></li>
            </ul>
          </div>
        </div>
      </aside>
      <aside className='bottom'></aside>
      </div>
      <footer>
        <p>컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문,품질,교환/환불 등 의무와 책임을 부담하지 않습니다.
        </p>
        <small>&copy; KURLY CORP.ALL RIGHTS RESERVED</small>
      </footer>
      </>
    );
  }
  
  export default Footer;
  