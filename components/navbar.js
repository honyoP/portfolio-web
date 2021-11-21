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

const LinkItem = ({ href, path, _target, children, ...props }) => {
	const active = path === href;
	const inactiveColors = useColorModeValue("black", "whiteAlpha.900");
	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				bg={active ? "grassTeal" : undefined}
				color={active ? "#202023" : inactiveColors}
				_target={_target}
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
			bg={useColorModeValue("#ffffff40", "#20202380")}
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
					<LinkItem href="/work" path={path}>
						Work
					</LinkItem>
					<LinkItem href="/" path={path}>
						About
					</LinkItem>
					<LinkItem href="/contact" path={path}>
						Contact
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
								icon={
									<HamburgerIcon />
								}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink
									href="/"
									passHref
								>
									<MenuItem
										as={
											Link
										}
									>
										About
									</MenuItem>
								</NextLink>
								<NextLink
									href="/work"
									passHref
								>
									<MenuItem
										as={
											Link
										}
									>
										Work
									</MenuItem>
									
								</NextLink>
								<NextLink href="/contact" passHref>
									<MenuItem as={Link}>
										Contact
									</MenuItem>
								</NextLink>
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
		<Button onClick={toggleColorMode}>
			{" "}
			{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
}

export default Navbar;
