import { Link } from "react-router-dom";
import './RecentItem.css'

function RecentItem({product}){
  return(
    <div className="recentItem">
    <Link to={`/list/${product.slug}`}>
    <img src={product.photoUrl}/>
    </Link>
    </div>
  )
}

export default RecentItem;