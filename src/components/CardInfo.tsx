import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

export function CardInfo({ mainContent, content }: ICardInfo) {
  return (
    <Box
      backgroundColor={"#ffffff"}
      minHeight={"120px"}
      padding={8}
      borderRadius={"25px"}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        {mainContent}
      </Text>
      <Text fontSize={"xl"}>{content}</Text>
    </Box>
  );
}
