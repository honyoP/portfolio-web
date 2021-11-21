import React from 'react'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text color={useColorModeValue("black", "whiteAlpha.900")} fontWeight="bold" ml={3}>Tadeas Tran</Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
