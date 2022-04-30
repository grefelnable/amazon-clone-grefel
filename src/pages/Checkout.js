import React from "react"
import tw from "tailwind-styled-components"
import { useStateValue } from "../components/StateProvider"

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue()

  return (
    <Container>
      <CheckoutAdContainer>
        <div>
          <CheckoutAd src="./assets/amazon-card.png" />
          <strong style={{ "font-size": "10px" }}>$15 instant gift card</strong>
        </div>
        <CheckoutText>
          Get a<strong style={{ color: "green" }}>$15 Amazon Gift Card </strong>
          instantly, plus up to 5% back for 6 months after approval for the
          Amazon Rewards Mastercard.
        </CheckoutText>
      </CheckoutAdContainer>
      <CartItems></CartItems>
    </Container>
  )
}

export default Checkout
//Styles
const Container = tw.section`
bg-[#EAEDED] h-screen pt-4
`
const CheckoutAdContainer = tw.div`
p-4 bg-white flex items-center flex-col gap-2 w-11/12 mx-auto
border border-slate-300
`
const CheckoutAd = tw.img`
object-contain w-[85px]
`
const CheckoutText = tw.p`
text-sm
`
const CartItems = tw.div`

`
