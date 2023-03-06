function Pagination({postPerPage,totalPosts,paginate}){
  const pageNumbers = [];
  for(let i=1; i <= Math.ceil(totalPosts/postPerPage);i ++){
    pageNumbers.push(i)
  }
  return(
    <div className="num">
    <ul>
      {
        pageNumbers.map((number) =>(
          <li key={number}>
            <span onClick={() =>{paginate(number)}}>{number}</span>
            </li>
        ))
      }
    </ul>
  </div>
  )
}

export default Pagination;