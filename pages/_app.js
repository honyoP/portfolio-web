import '../styles/globals.css'
import { ChakraProvider, Center, Text } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import theme from '../libs/theme'

function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider theme={theme}>
    <Navbar/>
    <Center>
      <Text color="gray" position="fixed" bottom="0%">© {new Date().getFullYear()} Tadeas Tran. All Rights Reserved.</Text>
    </Center>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
