import React from "react"
import tw from "tailwind-styled-components"
import CheckoutProduct from "../components/CheckoutProduct"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../components/StateProvider"
import Subtotal from "../components/Subtotal"

const Checkout = () => {
  const [{ cart }] = useStateValue()

  return (
    <Container>
      <WrapperAdSubtotal>
        <CheckoutAdContainer>
          <div>
            <CheckoutAd src="./assets/amazon-card.png" />
            <strong style={{ fontSize: "10px" }}>$15 instant gift card</strong>
          </div>
          <CheckoutText>
            Get a
            <strong style={{ color: "green" }}>$15 Amazon Gift Card </strong>
            instantly, plus up to 5% back for 6 months after approval for the
            Amazon Rewards Mastercard.
          </CheckoutText>
        </CheckoutAdContainer>
        {cart.length > 0 && <Subtotal />}
      </WrapperAdSubtotal>

      {cart?.length === 0 ? (
        <EmptyCartContainer>
          <h2>Your Amazon cart is empty.</h2>
        </EmptyCartContainer>
      ) : (
        <CartItems>
          <Heading>Shopping Cart</Heading>
          <PriceText>Price</PriceText>
          {cart?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </CartItems>
      )}
    </Container>
  )
}

export default Checkout
//Styles
const Container = tw.section`
bg-[#EAEDED] h-screen pt-4
`
const WrapperAdSubtotal = tw.div`
w-11/12 mx-auto mb-4 md:flex md:justify-between md:gap-2 
`
const CheckoutAdContainer = tw.div`
p-2  bg-white flex items-center flex-col gap-2   max-w-2xl
border border-slate-300 mb-4 lg:flex-row md:mb-0
`
const CheckoutAd = tw.img`
object-contain w-[85px] lg:flex-1
`
const CheckoutText = tw.p`
text-sm lg:flex-1
`
const CartItems = tw.div`
border border-slate-300 p-4 bg-white w-11/12 mx-auto
`
const EmptyCartContainer = tw(CartItems)`

`
const Heading = tw.h2`
text-3xl font-medium
`
const PriceText = tw.p`
text-slate-500 font-medium border-b border-solid border-slate-300 w-full text-right
mb-2
`
