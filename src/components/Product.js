import React from "react"
import tw from "tailwind-styled-components"
import { AiFillStar } from "react-icons/ai"
import { useStateValue } from "./StateProvider"

const Product = ({ id, title, image, price, rating }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <Container>
      <ProductImg src={image} />
      <ProductTitle>{title}</ProductTitle>
      <ProductRating>
        {Array(rating)
          .fill()
          .map((_) => (
            <p>
              <AiFillStar />
            </p>
          ))}
      </ProductRating>
      <ProductPrice>${price}</ProductPrice>
      <AddToCartBtn type="button" onClick={addToCart}>
        Add to Cart
      </AddToCartBtn>
    </Container>
  )
}

export default Product
//Styles
const Container = tw.article`
bg-white shadow-md p-2 py-4 z-10 h-96 flex flex-col justify-between
`
const ProductImg = tw.img`
max-h-48 object-contain mb-2
`
const ProductTitle = tw.h4`
text-teal-800 font-medium
`
const ProductRating = tw.p`
flex text-md text-orange-400 
`
const ProductPrice = tw.p`
text-red-600 font-medium
`
const AddToCartBtn = tw.button`
bg-yellow-300 mt-2 text-sm py-2 px-10 rounded-2xl
hover:bg-yellow-400 self-start block
`
