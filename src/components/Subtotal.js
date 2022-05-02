import React from "react"
import tw from "tailwind-styled-components"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider"
import { getCartTotal } from "../reducer"

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue()
  console.log(dispatch)

  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <SubtotalText>
              Subtotal ({cart.length} {cart.length > 1 ? "items" : "item"} )
              <strong>: {value}</strong>
            </SubtotalText>
            <SubtotalGift>
              <input type="checkbox" /> This order contains gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <SubtotalBtn type="button">Proceed to Checkout</SubtotalBtn>
    </Container>
  )
}

export default Subtotal

const Container = tw.article`
bg-white px-4 py-6 md:w-72
border border-solid border-slate-300
`

const SubtotalText = tw.h2`
font-medium mr-2
`
const SubtotalGift = tw.small`
flex gap-2 items-center
`
const SubtotalBtn = tw.button`
bg-yellow-300 mt-2 text-sm py-2 px-10 rounded-2xl
hover:bg-yellow-400 block w-full
`
