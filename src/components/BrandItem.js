import { Link } from "react-router-dom";
import { getBrand } from "../api/api"
import "./BrandItem.css"

function BrandItem(){
  const brands = getBrand();
  return(
    <div id="brandItem">
      {
        brands.map((brand)=>(
          <ul key={brand.id}>
            <li><Link><img src={brand.imgUrl} alt={brand.slug}/></Link></li>
          </ul>
        ))
      }
    </div>
  )
}

export default BrandItem;