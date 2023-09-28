import { Flex } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Flex
        minHeight="100vh"
        backgroundColor="#9413dc"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Header />
        {children}
        <Footer />
      </Flex>
    </>
  );
};
