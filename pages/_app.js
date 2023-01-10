import '../styles/globals.css'
import { ChakraProvider, Center, Text } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import theme from '../libs/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <head>
        <title>Portfolio</title>
      </head>
      <Navbar />
      <Component {...pageProps} />
      <Center>
        <Text color="gray" position="relative" bottom="0">© {new Date().getFullYear()} Tadeas Tran. All rights reserved.</Text>
      </Center>
    </ChakraProvider>
  )
}

export default MyApp
