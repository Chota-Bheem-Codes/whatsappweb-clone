import { Button } from "@material-ui/core"
import Head from "next/head"
import styled from "styled-components"
import { auth, provider } from "../firebase"

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src='https://images.unsplash.com/photo-1599382103240-5f2a57137d28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'/>
                <Button onClick={signIn} variant='outlined'>Sign in with google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background: whitesmoke;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
    background: white;
    height: 80vh;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

const Logo = styled.img`
    width: 300px;
    margin-bottom: 50px;
`