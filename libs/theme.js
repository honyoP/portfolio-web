import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("alphaWhite.900", "gray.800")(props),
        color: mode("gray.800", "white")(props),
      }
    })
  }
})

export default theme
