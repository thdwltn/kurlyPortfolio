import { Link } from "react-router-dom";


import './ReviewItem.css'

function ReviewItem({review}){

  return(
    <ul className="review">
      <li><Link to={`/reviewList/${review.slue}`}><img src={review.reviewImgUrl}/></Link></li>
    </ul>
  )
}

export default ReviewItem;