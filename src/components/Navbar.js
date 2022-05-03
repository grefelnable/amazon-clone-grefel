import React from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import tw from "tailwind-styled-components"
import { useStateValue } from "./StateProvider"
import { auth } from "../firebase"

const Navbar = () => {
  const [{ cart, user }] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <Header>
      <Link to="/">
        <Logo src="./assets/amazon_PNG11.png" alt="logo" />
      </Link>

      <SearchContainer>
        <SearchInput type="text" />
        <SearchBtn type="button">
          <FaSearch />
        </SearchBtn>
      </SearchContainer>

      <HeaderNav>
        <Link to={!user && "/login"}>
          <HeaderOption onClick={handleAuthentication}>
            <GreetUser>Hello {user ? user.email : "Guest"} </GreetUser>
            <Text>{user ? "Sign Out" : "Sign In"}</Text>
          </HeaderOption>
        </Link>

        <Link to="/">
          <HeaderOption>
            <SmallText>Returns</SmallText>
            <Text>& Orders</Text>
          </HeaderOption>
        </Link>

        <Link to="/checkout">
          <HeaderOptionCart>
            <HeaderCartIcon>
              <FiShoppingCart />
            </HeaderCartIcon>
            <CartCount>{cart?.length}</CartCount>
          </HeaderOptionCart>
        </Link>
      </HeaderNav>
    </Header>
  )
}

export default Navbar

//Styles
const Header = tw.nav`
bg-[#131921] py-2  px-4 flex items-center gap-2 sticky top-0 z-30 
shadow-lg
`
const Logo = tw.img`
w-24 object-contain
`
const SearchContainer = tw.div`
flex items-center flex-1
`
const SearchInput = tw.input`
rounded-tl rounded-bl p-2 h-10 w-full
`
const SearchBtn = tw.button`
bg-orange-300 p-2 px-3 h-10 text-lg  rounded-tr rounded-br
ease-in-out duration-200 hover:bg-orange-400
`
const HeaderNav = tw.div`
flex
`
const HeaderOption = tw.div`
text-white border p-1 border-transparent hover:border hover:border-white 
`
const SmallText = tw.p`
text-xs font-medium -mb-1 
`
const GreetUser = tw(SmallText)`
hidden md:block
`
const Text = tw.p`
font-black tracking-tighter 
`
const HeaderOptionCart = tw.div`
text-white flex gap-2 border p-1 border-transparent hover:border hover:border-white h-11 items-center
`
const HeaderCartIcon = tw.span`
text-2xl 
`
const CartCount = tw.span`
text-2xl text-orange-400 font-black
`
