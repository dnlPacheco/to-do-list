import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/list.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        alt="https://www.flaticon.com/free-icons/list - To do list icons created by Ehtisham Abid - Flaticon"
        boxSize="60px"
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
