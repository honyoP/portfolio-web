import {
	Box,
	Container,
	Text,
	Heading,
	Stack,
	Center,
	useColorMode,
	Button,
	Link,
	useColorModeValue,
	Flex,
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Logo from "../components/logo";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconBrandGithub } from "@tabler/icons";

const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href;
    const inactiveColors = useColorModeValue("black", "whiteAlpha.900");
    return (
        <NextLink href={href} passHref>
          <Link
            p={2}
            bg={active ? "grassTeal" : undefined}
            color={active ? "#202023" : inactiveColors}
            target={_target}
            {...props}
          >
            {children}
          </Link>
        </NextLink>
    );
};

const Navbar = (props) => {
    const { path } = props;

    return (
        <Box
          position="fixed"
          as="nav"
          w="100%"
          bg={useColorModeValue("#f4ede4", "gray.900")}
          css={{ backdropFilter: "blur(10px)" }}
          zIndex={1}
          {...props}
        >
          <Container
            display="flex"
            p={2}
            maxW="container.md"
            wrap="wrap"
            align="center"
            justify="space-between"
          >
            <Flex align="center" mr={5}>
              <Heading
                as="h1"
                size="lg"
                letterSpacing={"tighter"}
              >
                {" "}
                <Logo />{" "}
              </Heading>
            </Flex>
            <Stack
              direction={{
                  base: "column",
                  md: "row",
              }}
              display={{ base: "none", md: "flex" }}
              width={{ base: "full", md: "auto" }}
              alignItems="center"
              flexGrow={1}
              mt={{ base: 4, md: 0 }}
            >
              <LinkItem href="/" path={path}>
                About
              </LinkItem>
              <LinkItem href="/work" path={path}>
                Work
              </LinkItem>
              <LinkItem _target="_blank" href="https://github.com/honyoP/portfolio-web" path={path} display="inline-flex" alignItems="center" style={{gap:4}}>
                <IconBrandGithub size="20px"/> Source
              </LinkItem>
            </Stack>

            <Box flex={1} align="right">
              <ToggleButton />
              <Box
                ml={2}
                display={{
                    base: "inline-block",
                    md: "none",
                }}
              >
                <Menu isLazy id="navbar-menu">
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                  <MenuList>
                    <NextLink href="/" passHref>
                      <MenuItem as={Link}>
                        About
                      </MenuItem>
                    </NextLink>
                    <NextLink href="/work" passHref>
                      <MenuItem as={Link}>
                        Work
                      </MenuItem>
                    </NextLink>
                    <MenuItem as={Link}>
                      <a target="_blank" rel="noreferrer" href="https://github.com/honyoP/portfolio-web">
                        View Source
                      </a>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Container>
        </Box>
    );
};

function ToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode} bgColor={useColorModeValue('gray.200', 'black.800')}>
          {" "}
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}

export default Navbar;
