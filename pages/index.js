import {
  Box,
  Flex,
  Container,
  Text,
  Center,
  Heading,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'

import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrush,
  IconMail,
  IconPhoto
} from '@tabler/icons'

import {
  AWSIcon,
  DockerIcon,
  DotnetIcon,
  ElectronIcon,
  GitIcon,
  JavaIcon,
  JSIcon,
  MongoIcon,
  NextIcon,
  PostgreIcon,
  PSIcon,
  ReactIcon,
  RubyIcon,
  RubyOnRailsIcon,
  TSIcon,
  WaveyBackground
} from '../components/icons'

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
            <Text mb="2rem"> Digital craftsman (Artist / Developer / Designer)</Text>
          </Box>
          <Center>
            <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}}>
              <Image border="2px" borderRadius="full" maxWidth="100px" src="images/profilepic.jpg" alt="Complimenting image of Tadeas Tran"/>
            </Box>
          </Center>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Box aligntext="center" mt={30}>
          <Text>    Tadeas is a freelance full-stack developer based in Czech Republic.
                He has a passion for building and designing interesting projects</Text>
        </Box>
        <Divider mt={3} />
      </Section>


      <Section delay={0.2}>
        <Heading as="h2" variant="section-title" size="md">What can I do?</Heading>
        <Text mb={3}>
          I&apos;m a fullstack developer, which means I can create both backend and frontend solutions
          of projects. I&apos;m also proficient in deploying applications and maintaining servers running Linux.
        </Text>
        <Flex bgColor={useColorModeValue('#f4ede4', 'gray.900')} borderRadius="10px" justifyContent="center">
          <Box mt={4} ml={2}>
            <Heading as="h3" size="sm" textDecoration="underline">Programming Languages</Heading>
            <List mt={3} spacing={3} fontSize="18px">
              <ListItem>
                <Text><JSIcon fontSize="30px" /> JavaScript</Text>
              </ListItem>
              <ListItem>
                <Text><TSIcon fontSize="30px" /> TypeScript</Text>
              </ListItem>
              <ListItem>
                <Text><DotnetIcon fontSize="30px" /> C Sharp</Text>
              </ListItem>
              <ListItem>
                <Text><RubyIcon fontSize="30px" /> Ruby</Text>
              </ListItem>
              <ListItem>
                <Text><JavaIcon fontSize="30px" /> Java</Text>
              </ListItem>
            </List>
            <Heading as="h3" size="sm" mt={4} textDecoration="underline">Frameworks</Heading>
            <List mt={3} mb={2} spacing={3} fontSize="18px">
              <ListItem><Text><ReactIcon fontSize="30px "/> React</Text></ListItem>
              <ListItem><Text><NextIcon fontSize="30px" /> NextJS</Text></ListItem>
              <ListItem><Text><ElectronIcon fontSize="30px" /> Electron</Text></ListItem>
              <ListItem><RubyOnRailsIcon fontSize="30px" /> Ruby on Rails</ListItem>
            </List>
          </Box>

          <Box mt={4} ml={9} mr={2}>
            <Heading as="h3" size="sm" textDecoration="underline">Project Management</Heading>
            <List mt={3} spacing={3} fontSize="18px">
              <ListItem>
                <Text><GitIcon fontSize="30px" /> Git</Text>
              </ListItem>
              <ListItem>
                <Text><AWSIcon fontSize="30px" /> Cloud hosting</Text>
              </ListItem>
              <ListItem>
                <Text><DockerIcon fontSize="30px" /> Docker containers</Text>
              </ListItem>
              <ListItem>
                <Text><PostgreIcon fontSize="30px "/> PostgreSQL</Text>
              </ListItem>
              <ListItem>
                <Text><MongoIcon fontSize="30px" /> Mongo</Text>
              </ListItem>
            </List>
            <Heading mt={3} as="h3" size="sm" textDecoration="underline">Designing Tools</Heading>
            <List mt={3} spacing={3} fontSize="18px">
              <ListItem display="flex" alignItems="center">
                <IconPhoto size="30px" /> Photoshop
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <IconBrush size="30px" /> Illustrator
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <IconBrandFigma size="30px "/> Figma
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Section>

      <Section delay={0.2}>
        <Flex direction="row" justify="center">
          <Box>
            <Heading as="h2" variant="section-title" size="md">My accounts</Heading>
            <List mt={2} ml={3} spacing={2}>
              <ListItem>
                <Link href="https://github.com/honyoP" target="_blank" display="flex" align="center">
                  <IconBrandGithub/>@honyoP
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.linkedin.com/in/tade%C3%A1%C5%A1-tran-b284051bb/" target="_blank" display="flex" align="center">
                  <IconBrandLinkedin/>@Tadeas Tran
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box ml={8} textAlign="right">
            <Heading as="h2" variant="section-title" size="md">My contacts</Heading>
            <List mt={2} mr={3} spacing={2}>
              <ListItem display="flex" align="center">
                tran.tadeas@trancheon.com <IconMail />
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Section>
    </Container>
  )
}
