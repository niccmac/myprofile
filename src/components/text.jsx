import { Text } from "@chakra-ui/react";
import BoldText from "../font/Bungee,Mulish,Open_Sans,Source_Sans_Pro/Mulish/Mulish-VariableFont_wght.ttf";
export const MyText = (props) => {
  const { text, bold, style } = props;
  const isBold = bold ? 800 : 400;

  return (
    <Text
      color="#313639"
      fontFamily={BoldText}
      style={{ fontWeight: isBold, ...style }}
      {...props}
    >
      {text}
    </Text>
  );
};
