import products from './data.json'
import abouts from './aboutdata.json'
import brands from './branddata.json'
import reviews from './reviewdata.json'
import { animated, useSpring } from '@react-spring/web'

export default function MyComponent(){
  const springs = useSpring({
    from : {x:0},
    to : {x:100}
  })
  return(
    <animated/>
  )
}


export function getProduct(keyword){
  if(!keyword) return products;
  return filterByKeyword(products,keyword)
}

export function getAbout(keyword){
  if(!keyword) return abouts;
  return filterByKeyword(abouts,keyword)
}

export function getBrand(keyword){
  if(!keyword) return brands;
  return filterByKeyword(brands,keyword)
}

export function getReview(keyword){
  if(!keyword) return reviews;
  return filterByKeyword(reviews,keyword)
}

function filterByKeyword(items,keyword){
  const lowered = keyword.toLowerCase();
  return items.filter(({title})=>title.toLowerCase().includes(lowered))
  } 


const WishList_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WishList_KEY) || '{}');


export function getProductBySlug(productSlug){
  return products.find((product)=> product.slug === productSlug)
}
export function getReviewBySlue(reviewSlue){
  return reviews.find((review)=> review.slue === reviewSlue)
}
export function getWishList(){
  return products.filter((product)=> wishlist[product.slug])
}
export function getRecent(){
  return products.filter((product)=> wishlist[product.slug])
}
export function addWishList(productSlug){
  wishlist[productSlug] = true;
  localStorage.setItem(WishList_KEY, JSON.stringify(wishlist));
}
export function deleteWishList(productSlug){
  delete wishlist[productSlug];
  localStorage.setItem(WishList_KEY, JSON.stringify(wishlist));
}
