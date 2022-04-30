import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../assets/images/mbuyers_curves_final.svg";
import Image from "next/image";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white.100", "gray.900")} px={4}>
        <Flex h="100px" alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            variant={"outline"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={Logo} display="block" alt="Motorbike buyers" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                whiteSpace="nowrap"
                textTransform="capitalize"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("blue.200", "gray.700"),
                }}
                href="/"
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                whiteSpace="nowrap"
                textTransform="capitalize"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("blue.200", "gray.700"),
                }}
                href="/about"
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                whiteSpace="nowrap"
                textTransform="capitalize"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("blue.200", "gray.700"),
                }}
                href="/contact"
              >
                Contact
              </Link>
              <Link
                px={2}
                py={1}
                whiteSpace="nowrap"
                textTransform="capitalize"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("blue.200", "gray.700"),
                }}
                href="faq"
              >
                FAQs
              </Link>
              <Link
                px={2}
                py={1}
                whiteSpace="nowrap"
                textTransform="capitalize"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("blue.200", "gray.700"),
                }}
                href="/tradeportal"
              >
                Trade Portal
              </Link>
              ))
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQs</Link>
              <Link href="/tradeportal">Trade Portal</Link>
              ))
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
