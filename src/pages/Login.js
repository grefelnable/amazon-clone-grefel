import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import tw from "tailwind-styled-components"
import { auth } from "../firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/")
      })
      .catch((error) => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          navigate("/")
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <Container>
      <Link to="/">
        <Logo src="./assets/amazon-logo-login.png" alt="logo" />
      </Link>
      <LoginWrapper>
        <LoginText>Sign-In</LoginText>
        <LoginForm>
          <LoginLabel>Email</LoginLabel>
          <LoginInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginLabel>Password</LoginLabel>
          <LoginInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginBtn type="submit" onClick={signIn}>
            Sign In
          </LoginBtn>
        </LoginForm>
        <LoginInfo>
          By continuing, you agree to AMAZON FAKE CLONE's Conditions of Use and
          Privacy Notice.
        </LoginInfo>
      </LoginWrapper>
      <CreateBtn type="button" onClick={register}>
        Create your Amazon account
      </CreateBtn>
    </Container>
  )
}

export default Login
// Styles
const Container = tw.div`
pt-4 bg-white
`
const Logo = tw.img`
w-28 mx-auto mb-4
`
const LoginWrapper = tw.div`
border border-slate-300 p-4 w-80 mx-auto mb-6
`
const LoginText = tw.h1`
text-3xl font-medium mb-2
`
const LoginForm = tw.form`
mb-4
`
const LoginLabel = tw.h4`
text-sm font-medium 
`
const LoginInput = tw.input`
border border-slate-500 w-full rounded p-1 px-2 mb-2
`
const LoginBtn = tw.button`
bg-yellow-400 mt-2 text-sm py-2 px-10 rounded-2xl
hover:bg-yellow-300 block w-full border border-yellow-900
`
const LoginInfo = tw.small`
leading-tight m-0
`
const CreateBtn = tw(LoginBtn)`
bg-slate-200 hover:bg-slate-300 w-80 mx-auto border-slate-700
`
