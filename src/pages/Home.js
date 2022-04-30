import React, { useState } from "react"
import tw from "tailwind-styled-components"
import Product from "../components/Product"
import items from "../producList"

const Home = () => {
  const [productList, setProductList] = useState(items)

  return (
    <Container>
      <HomeImg src="./assets/home-banner.jpg" alt="Alexa ring" />
      <ProductsContainer>
        {productList.map((product) => {
          const { id, image, title, price, rating } = product
          return (
            <Product
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              rating={rating}
            />
          )
        })}
      </ProductsContainer>
    </Container>
  )
}

export default Home
//Styles
const Container = tw.section`

`
const HomeImg = tw.img`
mask-image
`
const ProductsContainer = tw.div`
w-11/12 mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 -mt-[100px] z-10 lg:-mt-[300px] mb-10

`
