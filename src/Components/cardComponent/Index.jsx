import { Card, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Meta } = Card;

function CardComponent({ title, image, id }) {
  return (
    <div
      style={{
        width: "30%",
        padding: "20px",
        // boxShadow: "-10px 53px 24px 26px rgba(0,0,0,0.75)",
      }}
    >
      <Card
        hoverable
        style={{
          width: 250,
          height: 400,
          backgroundColor: "#3c3e44",
          color: "white",
        }}
        cover={<img alt="example" src={image} />}
      >
        <Title level={5} style={{ color: "white" }}>
          {title}
        </Title>
        <Link to={`/profile/${id}`}>view Profile</Link>
      </Card>
    </div>
  );
}

export default CardComponent;
