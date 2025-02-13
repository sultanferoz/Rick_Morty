import { Typography } from "antd";
const { Title } = Typography;

function Heading({ level, title }) {
  return (
    <>
      <Title style={{ margin: "10px 0px", color: "white" }} level={level}>
        {title}
      </Title>
    </>
  );
}

export default Heading;
