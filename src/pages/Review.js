import { useParams } from "react-router-dom";
import { getReviewBySlue } from "../api/api";
import './Review.css'


import { formDate } from "../components/BestProductItem";



function Review(){
  const {reviewSlue} = useParams();
  const review = getReviewBySlue(reviewSlue);


  return(
    <div id="review">
      <div className="reviewTop">
        <figure>
          <div>
          <img src={review.reviewImgUrl}/>
          
          </div>
          <figcaption>
            {
              review.details.map((detail)=>(
                <dl>
            <dt>{detail.title}</dt>
            <dd>{detail.name}</dd>
            <dd>{formDate(detail.createdDt)}</dd>
            <dd>{detail.content}</dd>
            <dd>{detail.like}</dd>
          </dl>
              ))
            }
          </figcaption>
        
        </figure>
      </div>
      <div className="reviewbottom">
        {review.anotherReviews.map(({anotherReview})=>(
          <>
            <img src={anotherReview.url1}/>
            <img src={anotherReview.url2}/>
            <img src={anotherReview.url3}/>
            <img src={anotherReview.url4}/>
            <img src={anotherReview.url5}/>
            <img src={anotherReview.url6}/>
            <img src={anotherReview.url7}/>
            <img src={anotherReview.url8}/>
            <img src={anotherReview.url9}/>
            </>
          ))}
      </div>
    </div>
  )
}
export default Review;