import { NavLink } from "react-router-dom";
import { Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from "@chakra-ui/react";
import logo from "../../assets/images/shared/logo.svg"
import { Flex } from "@chakra-ui/react"

const Header = () => {
  const links = [
    { label: "00 HOME", path: "/" },
    { label: "01 DESTINATION", path: "/Destination" },
    { label: "02 CREW", path: "/Crew" },
    { label: "03 TECHNOLOGY", path: "/Technology" },
  ];

  return (
    <>
      < Flex flexDir='row' gap='30px'>
        <header >
          <img src={logo} />
          <Tabs position='relative' variant='unstyled' bg="black">
            <TabList>
              {links.map((link, index) => (
                <Tab color="white" key={index} as={NavLink} to={link.path} >
                  {link.label}
                </Tab>
              ))}
            </TabList>
            <TabIndicator mt='-3px' height='3px' bg='white' borderRadius='1px' />
          </Tabs>
        </header>
      </Flex>
    </>
  );
};

export default Header;