import React from "react"
import { AiFillStar } from "react-icons/ai"
import tw from "tailwind-styled-components"
import { useStateValue } from "./StateProvider"

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue()
  console.log(cart)
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

  return (
    <Container>
      <ItemContainer>
        <Image src={image} alt={title} />
        <ItemInfo>
          <ItemTitle>{title}</ItemTitle>
          <ItemRating>
            {Array(rating)
              .fill()
              .map((_) => (
                <p>
                  <AiFillStar />
                </p>
              ))}
          </ItemRating>
          <RemoveBtn type="button" onClick={removeFromCart}>
            Remove
          </RemoveBtn>
        </ItemInfo>
      </ItemContainer>

      <ItemPrice>${price}</ItemPrice>
    </Container>
  )
}

export default CheckoutProduct

const Container = tw.div`
flex justify-between gap-9 py-2
border-b border-solid border-slate-300
`
const ItemContainer = tw.div`
md:flex
`
const Image = tw.img`
object-contain w-44 h-44 mx-auto
`
const ItemInfo = tw.div`
flex-1
`
const ItemTitle = tw.h4`
text-teal-800 font-medium
`
const ItemRating = tw.p`
flex text-md text-orange-400 mb-4
`
const ItemPrice = tw.p`
font-medium
`
const RemoveBtn = tw.button`
bg-yellow-300 mt-2 text-sm py-2 px-10 rounded-2xl
hover:bg-yellow-400 self-start block
`
