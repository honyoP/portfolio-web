import React from 'react'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { IconTerminal2 } from '@tabler/icons'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

svg {
  transition: 200ms ease;
}

&:hover svg {
  transform: rotate(-15deg);
}
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <IconTerminal2 />
          <Text color={useColorModeValue("black", "whiteAlpha.900")} fontWeight="bold" ml={3} mt={1}>Tadeas Tran</Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
