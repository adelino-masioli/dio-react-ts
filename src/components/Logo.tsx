import { Heading } from "@chakra-ui/react";

interface ILogo {
  color: string;
}

export const Logo = ({ color }: ILogo) => {
  return (
    <Heading as="h1" size="md" color={color} margin={"auto"}>
      Dio Bank
    </Heading>
  );
};
