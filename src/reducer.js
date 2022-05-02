export const initialState = {
  cart: [
    {
      id: 1,
      image: "./assets/bose.jpg",
      price: 409.99,
      rating: 4,
      title:
        "Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice Control, Black",
    },
  ],
  user: null,
}
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      }
    case "REMOVE_FROM_BASKET":
      let newCart = [...state.cart]

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )
      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in cart`
        )
      }

      return { ...state, cart: newCart }
    default:
      return state
  }
}

export default reducer
