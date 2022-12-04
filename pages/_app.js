import '../styles/globals.css'
import { ChakraProvider, Center, Text } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import theme from '../libs/theme'

function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider theme={theme}>
    <head>
      <title>Portfolio</title>
    </head>
    <Navbar/>
    <Center>
      <Text color="gray" position="fixed" bottom="0">© {new Date().getFullYear()} Tadeas Tran. All rights reserved.</Text>
    </Center>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
