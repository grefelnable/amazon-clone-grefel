import React from "react"
import tw from "tailwind-styled-components"
import { useStateValue } from "../components/StateProvider"
import { AiFillStar } from "react-icons/ai"

const Checkout = () => {
  const [{ cart }] = useStateValue()

  return (
    <Container>
      <CheckoutAdContainer>
        <div>
          <CheckoutAd src="./assets/amazon-card.png" />
          <strong style={{ fontSize: "10px" }}>$15 instant gift card</strong>
        </div>
        <CheckoutText>
          Get a<strong style={{ color: "green" }}>$15 Amazon Gift Card </strong>
          instantly, plus up to 5% back for 6 months after approval for the
          Amazon Rewards Mastercard.
        </CheckoutText>
      </CheckoutAdContainer>
      <CartItems>
        {cart?.length === 0 ? (
          <h2>Your Amazon cart is empty.</h2>
        ) : (
          <div>
            <ProductImg src={cart.image} />
            <ProductTitle>{cart.title}</ProductTitle>
            <ProductRating>
              {Array(cart.rating)
                .fill()
                .map((_) => (
                  <p>
                    <AiFillStar />
                  </p>
                ))}
            </ProductRating>
            <ProductPrice>${cart.price}</ProductPrice>
          </div>
        )}
      </CartItems>
    </Container>
  )
}

export default Checkout
//Styles
const Container = tw.section`
bg-[#EAEDED] h-screen pt-4
`
const CheckoutAdContainer = tw.div`
p-4 bg-white flex items-center flex-col gap-2 w-11/12 mx-auto max-w-2xl
border border-slate-300 mb-4
`
const CheckoutAd = tw.img`
object-contain w-[85px]
`
const CheckoutText = tw.p`
text-sm
`
const CartItems = tw.div`
border border-slate-300 p-4 bg-white w-11/12 mx-auto
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
