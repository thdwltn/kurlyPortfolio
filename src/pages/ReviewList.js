import { Link } from "react-router-dom";
import { getReview } from "../api/api"
import ReviewItem from "../components/ReviewItem";

import './ReviewList.css'

function ReviewList(){
  const reviews = getReview();
  return(
    <div className="reviewlist">
      {
        reviews.map((review)=>(
          <ReviewItem key={review.id} review={review}/>
        ))
      }
    </div>
   
  )
}

export default ReviewList;