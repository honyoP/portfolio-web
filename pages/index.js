import { Box, Flex, Container, Text, Center, Heading, Image } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Section from '../components/section'


export default function Home() {
  return (
    <Container pt="5rem">

      <Section delay={0.0}>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h1">Tadeas Tran</Heading>
            <Text mb="2rem"> Digital forgemaster (Artist / Developer / Designer)</Text>
          </Box>
          <Center>
            <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}}>
              <Image border="2px" borderRadius="full" maxWidth="100px" src="images/profilepic.jpg" alt="Complimenting image of Tadeas Tran"/>
            </Box>
          </Center>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Box alignText="center" mt={30}>
          <Text>    Tadeas is a freelance full-stack developer based in Czech Republic.
                He has a passion for building and designing interesting projects</Text>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h2" variant="section-title" fontSize="24px">Work</Heading>
      </Section>

    </Container>
  )
}
