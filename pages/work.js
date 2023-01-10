import { Text, Container, Box, Heading, Divider, Image, IconButton, useBreakpointValue, Stack } from '@chakra-ui/react'
import React from 'react'
import Section from '../components/section'
import { CaptionCarousel } from '../components/carousel'

const Work = () => {
  return (
    <Container pt="5rem">
      <Section delay={0.0}>
        <Box>
          <Heading as="h1">Work</Heading>
          <Heading as="h3" size="2xl" m="2rem">Software Development</Heading>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Box aligntext="center" mt={30}>
          <Text>My journey in software development began in early childhood, when I learned to program with Ruby
            in order to create games in Game Maker. Then I experimented with web applications technology and also
            dabbled into robotics with Arduino.
          </Text>

          <Text mt="1rem">I enrolled into the Kyberna high school, where I also landed my first internship at Hanaboso. There
            I learned how real industry level applications work.
          </Text>

          <Text mt="1rem">During my last year in Kyberna, I led a project to renovate our School Information System. This
            later on spinned into a bigger project, that was intended to be rolled into public. But due to lack of interest we
            had to scrap it.
          </Text>

          <Text mt="1rem">From January 2022 to the end of February 2023 I was employed at Quadient Technologies. There I worked
          on multiple projects, consulting solutions and then implementing them.
          </Text>
        </Box>
        <Divider mt={3} />
      </Section>

      <Section delay={0.0}>
        <Box>
          <Heading as="h3" size="2xl" m="2rem">Art/Design</Heading>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Box aligntext="center" mt={30}>
          <Text>I'm also a huge creativity nerd and would love to pursue more creative things in the future.
            I love to play guitar, paint, carve and design things. The latter I applied when designing the
            School Information System for my high school.
          </Text>

          <Text mt="1rem">Instead of some long and surely interesting story, I'll just simply lay out a showcase of my work.
          </Text>
        </Box>

        <Box mt={3}>
          <CaptionCarousel cards={artCards} />
          <CaptionCarousel cards={sisCards} />
          <Divider mt={3} />
        </Box>
      </Section>
    </Container>
  )
}

const artCards = [
  {
    title: 'Artwork',
    text: "",
    image: 'images/artShowcase.jpg',
    height: "866"
  },
  {
    title: 'Photoshop',
    text: "",
    image: 'images/photoshop.jpg',
  },
  {
    title: 'Photography',
    text: "",
    image: 'images/photography.jpg',
  },
];

const sisCards = [
  {
    title: 'Homepage',
    text: "",
    image: 'images/sis_showcase_home.png',
  },
  {
    title: 'Schedule',
    text: "",
    image: 'images/sis_showcase_schedule.png',
  },
  {
    title: 'Grades',
    text: "",
    image: 'images/sis_showcase_grades.png',
  },
];

export default Work