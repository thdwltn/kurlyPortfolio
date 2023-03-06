import { Link } from "react-router-dom";
import { getBrand } from "../api/api";


function Brand() {
  const brands = getBrand();
  return (
    <div id="brand">
      {
        brands.map((brand)=>(
          <ul>
            <li><Link><img src={brand.imgUrl} alt={brand.slug}/></Link></li>
          </ul>
        ))
      }
    </div>
  );
}

export default Brand;
