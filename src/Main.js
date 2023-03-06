import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Wishlist from "./pages/WishList";
import BestProductList from "./pages/BestProductList"

import Event from "./pages/Event"
import Brand from "./pages/Brand"
import About from "./pages/About"
import Shipping from "./pages/Shipping"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Roulette from "./pages/Roulette";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import BrandItem from "./components/BrandItem";
import ReviewList from "./pages/ReviewList";
import Review from "./pages/Review";

function Main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="roulette" element={<Roulette />}/>
                    <Route path="/" element={<Home />}/>
                    <Route path="list">
                        <Route index element={<ProductList/>}/>
                        <Route path=":productSlug" element={<Product/>}/>
                    </Route>
                    <Route path="reviewList">
                        <Route index element={<ReviewList/>}/>
                        <Route path=":reviewSlue" element={<Review/>}/>
                    </Route>
                    <Route path="wishlist" element={<Wishlist />}/>
                    <Route path="signin" element={<SignIn />}/>
                    <Route path="signup" element={<SignUp />}/>
                    <Route path="event" element={<Event />}/>
                    <Route path="best" element={<BestProductList />}/>
                    
                    <Route path="brand" element={<Brand />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="brandItme" element={<BrandItem/>}/>
                    <Route path="shipping" element={<Shipping />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </App>
        </BrowserRouter>
    )
}
export default Main;