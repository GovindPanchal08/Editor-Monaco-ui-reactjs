"use client"
import{
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
import { LANGUAGE_VERSIONS } from "../app/constant.js";
import Webeditor from "./Web/Webeditor.jsx";

const lang = Object.entries(LANGUAGE_VERSIONS);
const LanguageSelect = ({language , onSelect}) => {
  return (
    <Box id="lang" ml={2} mb={4} display={"flex"} gap={"4"} >
      <Text mt={3} mb={2}  fontSize="lg" textColor="white">
        Languages:
      </Text>
      <Menu isLazy>
        <MenuButton mt={2} as={Button}>{language}</MenuButton>
        <MenuList bg={"#110c1b"} textColor={"white"}>
          {lang.map(([i,version]) => (
            <Box className="lan">
              <MenuItem
               color={
                i===language ? "blue.400" :""
               }
               bg={
                i===language ? "gray.900" :"transparent"
               }
               _hover={{
                color:"blue.400",
                bg:"gray.900"
               }}
              onClick={()=>onSelect(i)}
               key={i} >{i} 
               &nbsp;
              <Text as="span" ml={2} color="gray-600" fontSize="sm">{version}</Text>
              </MenuItem>
            </Box>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelect;
