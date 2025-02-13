import { Typography as TypographyAnt } from "antd";

const { Text } = TypographyAnt;

const TextComponent = ({ title }) => {
  return <Text style={{ color: "white" }}>{title}</Text>;
};

export default TextComponent;
